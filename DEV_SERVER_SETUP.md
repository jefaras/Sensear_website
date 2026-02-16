# Dev Server Automatic Start/Stop Setup Guide

This guide explains how to configure the Next.js dev server to automatically start when VS Code opens and stop when VS Code closes.

## Current Status

✅ **Dev server is running** - The server has been successfully restarted and is operational.
✅ **No errors detected** - The server compiled successfully without errors.
✅ **Management scripts created** - PowerShell and Node.js scripts are available for server management.

## Quick Start

### Manual Control

**Start the dev server:**
```bash
npm run dev
```

**Stop the dev server:**
```bash
# Kill all Node processes
taskkill /F /IM node.exe

# Or use the management script
node scripts/vscode-workspace-handler.js stop
```

**Check server status:**
```bash
node scripts/vscode-workspace-handler.js status
```

### VS Code Tasks

Use `Ctrl+Shift+P` → "Tasks: Run Task" and select:
- `Start Dev Server` - Start the dev server
- `Stop Dev Server` - Stop the dev server
- `Dev Server Status` - Check if server is running
- `Kill All Node Processes` - Force kill all Node processes

## Automatic Startup/Shutdown Configuration

### Option 1: VS Code Workspace Tasks (Recommended)

The `.vscode/tasks.json` file is already configured with tasks. To enable automatic execution:

1. **Install the "Task Runner" extension:**
   - Open VS Code Extensions (`Ctrl+Shift+X`)
   - Search for "Task Runner"
   - Install the extension

2. **Configure automatic task execution:**
   - Open VS Code Settings (`Ctrl+,`)
   - Search for "tasks autoDetect"
   - Enable "Tasks: Auto Detect"

3. **Set up workspace events:**
   - Create a `.vscode/tasks.json` (already done)
   - The "Start Dev Server" task is set as the default build task
   - Press `Ctrl+Shift+B` to start the dev server

### Option 2: VS Code Settings - Terminal Integration

Add this to your `.vscode/settings.json` (already configured):

```json
{
    "terminal.integrated.defaultProfile.windows": "PowerShell",
    "npm.enableRunFromFolder": true,
    "npm.enableScriptExplorer": true
}
```

### Option 3: Windows Task Scheduler

For true automatic startup when VS Code opens:

1. **Open Task Scheduler:**
   - Press `Win+R`, type `taskschd.msc`, press Enter

2. **Create a new task:**
   - Click "Create Task" in the right panel
   - Name: "Start Antigravity Dev Server"
   - Description: "Automatically start the Next.js dev server when VS Code opens"

3. **Set up triggers:**
   - Go to "Triggers" tab
   - Click "New"
   - Select "On an event"
   - Log: "Application"
   - Source: "Code"
   - Event ID: 1 (VS Code startup event)
   - Click OK

4. **Set up actions:**
   - Go to "Actions" tab
   - Click "New"
   - Action: "Start a program"
   - Program: `node`
   - Arguments: `"c:\Users\jef\Documents\Antigravity\scripts\vscode-workspace-handler.js" start`
   - Start in: `c:\Users\jef\Documents\Antigravity`
   - Click OK

5. **Set up conditions:**
   - Go to "Conditions" tab
   - Uncheck "Start the task only if the computer is on AC power"
   - Uncheck "Stop if the computer switches to battery power"

6. **Set up settings:**
   - Go to "Settings" tab
   - Check "Allow task to be run on demand"
   - Check "Run task as soon as possible after a scheduled start is missed"
   - Click OK

### Option 4: VS Code Workspace Event Script

Use the provided Node.js script with VS Code extensions:

1. **Install "Auto Run Task" extension:**
   - Open VS Code Extensions
   - Search for "Auto Run Task"
   - Install the extension

2. **Configure the extension:**
   - Open VS Code Settings
   - Search for "autorun"
   - Add the task name: "Start Dev Server"

3. **The extension will automatically run the task when:**
   - VS Code opens the workspace
   - The workspace is reloaded

### Option 5: PowerShell Profile

Add to your PowerShell profile (`$PROFILE`):

```powershell
# Auto-start dev server when in Antigravity directory
function Set-DevServerAutoStart {
    $currentDir = Get-Location
    if ($currentDir.Path -like "*Antigravity*") {
        $pidFile = ".dev-server.pid"
        if (-not (Test-Path $pidFile)) {
            Write-Host "Starting dev server..." -ForegroundColor Green
            node scripts/vscode-workspace-handler.js start
        }
    }
}

# Call when directory changes
Set-PSReadlineOption -HistorySaveStyle SaveNothing
```

## Automatic Shutdown

### Method 1: VS Code Exit Task

1. Install "Exit Task" extension
2. Configure to run "Stop Dev Server" task on exit

### Method 2: Windows Task Scheduler

Create a task that runs when VS Code closes:

1. Create a new task in Task Scheduler
2. Trigger: "On an event" → "Application" → "Code" → Event ID: 4 (exit event)
3. Action: Run `node scripts/vscode-workspace-handler.js stop`

### Method 3: Batch File Shortcut

Create a batch file that stops the server and closes VS Code:

```batch
@echo off
cd /d "c:\Users\jef\Documents\Antigravity"
node scripts\vscode-workspace-handler.js stop
taskkill /F /IM Code.exe
```

## Troubleshooting

### Server won't start

1. Check if another instance is running:
   ```bash
   node scripts/vscode-workspace-handler.js status
   ```

2. Kill all Node processes:
   ```bash
   taskkill /F /IM node.exe
   ```

3. Check logs:
   ```bash
   type dev-server.log
   type dev-server-err.log
   ```

### Server won't stop

1. Use the stop script:
   ```bash
   node scripts/vscode-workspace-handler.js stop
   ```

2. Force kill all Node processes:
   ```bash
   taskkill /F /IM node.exe
   ```

3. Manually delete the PID file:
   ```bash
   del .dev-server.pid
   ```

### PowerShell execution policy

If you get execution policy errors:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Files Created

| File | Purpose |
|------|---------|
| `.vscode/tasks.json` | VS Code task definitions |
| `.vscode/launch.json` | Debug configurations |
| `.vscode/settings.json` | Workspace settings |
| `.vscode/extensions.json` | Recommended extensions |
| `scripts/manage-dev-server.ps1` | PowerShell management script |
| `scripts/vscode-workspace-handler.js` | Node.js workspace handler |
| `scripts/start-dev-server.bat` | Batch file to start server |
| `scripts/stop-dev-server.bat` | Batch file to stop server |
| `scripts/README.md` | Scripts documentation |

## Log Files

| File | Purpose |
|------|---------|
| `dev-server.log` | Main activity log |
| `dev-server-out.log` | Server stdout |
| `dev-server-err.log` | Server stderr |
| `.dev-server.pid` | Process ID (auto-generated) |

## Next Steps

1. **Choose your preferred method** for automatic startup/shutdown from the options above
2. **Test the configuration** by closing and reopening VS Code
3. **Verify the server starts automatically** when the workspace opens
4. **Verify the server stops** when VS Code closes (if configured)

## Support

For issues or questions:
- Check the logs in `dev-server.log`
- Review the scripts documentation in `scripts/README.md`
- Ensure Node.js and npm are properly installed
