# Dev Server Management Script for Antigravity Project
# This script manages the Next.js dev server lifecycle

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("start", "stop", "restart", "status")]
    [string]$Action
)

$ProjectDir = Split-Path -Parent $PSScriptRoot
$LogFile = Join-Path $ProjectDir "dev-server.log"
$PidFile = Join-Path $ProjectDir ".dev-server.pid"

function Write-Log {
    param([string]$Message)
    $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$Timestamp - $Message" | Out-File -FilePath $LogFile -Append
    Write-Host "$Timestamp - $Message"
}

function Get-DevServerPid {
    if (Test-Path $PidFile) {
        $ServerPid = Get-Content $PidFile
        $Process = Get-Process -Id $ServerPid -ErrorAction SilentlyContinue
        if ($Process -and $Process.ProcessName -eq "node") {
            return $ServerPid
        }
    }
    return $null
}

function Start-DevServer {
    Write-Log "Starting dev server..."
    
    # Check if already running
    $ExistingPid = Get-DevServerPid
    if ($ExistingPid) {
        Write-Log "Dev server is already running with PID: $ExistingPid"
        return
    }
    
    # Start the dev server in background
    $ProcessInfo = Start-Process -FilePath "npm" -ArgumentList "run", "dev" -WorkingDirectory $ProjectDir -PassThru -WindowStyle Hidden -RedirectStandardOutput "$ProjectDir\dev-server-out.log" -RedirectStandardError "$ProjectDir\dev-server-err.log"
    
    # Save PID
    $ProcessInfo.Id | Out-File -FilePath $PidFile -Force
    Write-Log "Dev server started with PID: $($ProcessInfo.Id)"
    
    # Wait a moment and check if it's still running
    Start-Sleep -Seconds 3
    $Process = Get-Process -Id $ProcessInfo.Id -ErrorAction SilentlyContinue
    if ($Process) {
        Write-Log "Dev server is running successfully"
    } else {
        Write-Log "ERROR: Dev server failed to start"
        Remove-Item $PidFile -ErrorAction SilentlyContinue
    }
}

function Stop-DevServer {
    Write-Log "Stopping dev server..."
    
    $ServerPid = Get-DevServerPid
    if ($ServerPid) {
        try {
            Stop-Process -Id $ServerPid -Force -ErrorAction Stop
            Write-Log "Dev server stopped (PID: $ServerPid)"
            Remove-Item $PidFile -ErrorAction SilentlyContinue
        } catch {
            Write-Log "ERROR: Failed to stop dev server: $_"
        }
    } else {
        Write-Log "No dev server process found"
    }
    
    # Also kill any other node processes that might be related
    $NodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
    if ($NodeProcesses) {
        foreach ($Process in $NodeProcesses) {
            $CmdLine = (Get-WmiObject Win32_Process -Filter "ProcessId = $($Process.Id)").CommandLine
            if ($CmdLine -and $CmdLine -match "next|npm") {
                try {
                    Stop-Process -Id $Process.Id -Force -ErrorAction Stop
                    Write-Log "Killed related node process (PID: $($Process.Id))"
                } catch {
                    Write-Log "WARNING: Could not kill process $($Process.Id): $_"
                }
            }
        }
    }
}

function Restart-DevServer {
    Write-Log "Restarting dev server..."
    Stop-DevServer
    Start-Sleep -Seconds 2
    Start-DevServer
}

function Get-DevServerStatus {
    $ServerPid = Get-DevServerPid
    if ($ServerPid) {
        $Process = Get-Process -Id $ServerPid -ErrorAction SilentlyContinue
        if ($Process) {
            Write-Log "Dev server is RUNNING (PID: $ServerPid, Started: $($Process.StartTime))"
            return $true
        }
    }
    Write-Log "Dev server is NOT running"
    return $false
}

# Main execution
switch ($Action) {
    "start" { Start-DevServer }
    "stop" { Stop-DevServer }
    "restart" { Restart-DevServer }
    "status" { Get-DevServerStatus }
}
