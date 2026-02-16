# Dev Server Management

This directory contains scripts to automatically manage the Next.js development server lifecycle.

## Overview

The dev server management system provides:
- Automatic startup when VS Code opens the project
- Automatic shutdown when VS Code closes
- Manual control via scripts and VS Code tasks
- Process tracking and logging

## Files

| File | Description |
|------|-------------|
| `manage-dev-server.ps1` | Main PowerShell script for server management |
| `start-dev-server.bat` | Batch wrapper to start the dev server |
| `stop-dev-server.bat` | Batch wrapper to stop the dev server |

## Usage

### Manual Control

**Start the dev server:**
```bash
# Using batch file
scripts\start-dev-server.bat

# Using PowerShell directly
powershell -ExecutionPolicy Bypass -File scripts\manage-dev-server.ps1 -Action start
```

**Stop the dev server:**
```bash
# Using batch file
scripts\stop-dev-server.bat

# Using PowerShell directly
powershell -ExecutionPolicy Bypass -File scripts\manage-dev-server.ps1 -Action stop
```

**Check server status:**
```bash
powershell -ExecutionPolicy Bypass -File scripts\manage-dev-server.ps1 -Action status
```

**Restart the dev server:**
```bash
powershell -ExecutionPolicy Bypass -File scripts\manage-dev-server.ps1 -Action restart
```

### VS Code Integration

The project includes VS Code tasks for easy access:

1. **Start Dev Server**: Press `Ctrl+Shift+B` or use `Tasks: Run Build Task`
2. **Stop Dev Server**: Use `Tasks: Run Task` and select "Stop Dev Server"
3. **Kill All Node Processes**: Use `Tasks: Run Task` and select "Kill All Node Processes"

## Automatic Startup/Shutdown

### Method 1: VS Code Workspace Tasks (Recommended)

The `.vscode/tasks.json` file is configured with tasks that can be set to run automatically:

1. Open VS Code Settings (`Ctrl+,`)
2. Search for "tasks autoDetect"
3. Enable "Tasks: Auto Detect"

### Method 2: VS Code Extensions

Install the "Task Runner" extension and configure it to run the start task on workspace open.

### Method 3: Windows Task Scheduler

Create a task that runs when VS Code opens:

1. Open Task Scheduler
2. Create a new task
3. Set trigger to "On Event" - "Application" - "VS Code"
4. Set action to run `scripts\start-dev-server.bat`

### Method 4: VS Code Workspace Settings

The `.vscode/settings.json` includes configuration for automatic task execution.

## Logs

The dev server management creates the following log files:

- `dev-server.log` - Main activity log
- `dev-server-out.log` - Server stdout output
- `dev-server-err.log` - Server stderr output
- `.dev-server.pid` - Process ID file (auto-generated)

## Troubleshooting

### Server won't start

1. Check if another instance is already running:
   ```bash
   powershell -ExecutionPolicy Bypass -File scripts\manage-dev-server.ps1 -Action status
   ```

2. Kill all Node processes and try again:
   ```bash
   taskkill /F /IM node.exe
   ```

3. Check the error log:
   ```bash
   type dev-server-err.log
   ```

### Server won't stop

1. Use the stop script:
   ```bash
   scripts\stop-dev-server.bat
   ```

2. If that fails, kill all Node processes:
   ```bash
   taskkill /F /IM node.exe
   ```

3. Manually delete the PID file:
   ```bash
   del .dev-server.pid
   ```

### PowerShell execution policy

If you get execution policy errors, run:
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## VS Code Debugging

The `.vscode/launch.json` file includes debug configurations:

- **Next.js: debug server-side** - Debug the Node.js server
- **Next.js: debug client-side** - Debug in Chrome
- **Next.js: debug full stack** - Debug both server and client

Press `F5` to start debugging with the selected configuration.
