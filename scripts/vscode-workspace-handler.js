#!/usr/bin/env node

/**
 * VS Code Workspace Event Handler
 * 
 * This script handles VS Code workspace events to automatically
 * start/stop the dev server when the workspace opens/closes.
 * 
 * Usage:
 *   node scripts/vscode-workspace-handler.js start  - Start dev server
 *   node scripts/vscode-workspace-handler.js stop   - Stop dev server
 *   node scripts/vscode-workspace-handler.js status - Check status
 */

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.resolve(__dirname, '..');
const PID_FILE = path.join(PROJECT_DIR, '.dev-server.pid');
const LOG_FILE = path.join(PROJECT_DIR, 'dev-server.log');

function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;
    fs.appendFileSync(LOG_FILE, logMessage);
    console.log(logMessage.trim());
}

function getDevServerPid() {
    try {
        if (fs.existsSync(PID_FILE)) {
            const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim());
            // Check if process is still running
            try {
                process.kill(pid, 0); // Signal 0 just checks if process exists
                return pid;
            } catch (e) {
                // Process doesn't exist, clean up PID file
                fs.unlinkSync(PID_FILE);
                return null;
            }
        }
    } catch (e) {
        log(`Error reading PID file: ${e.message}`);
    }
    return null;
}

function startDevServer() {
    log('Starting dev server...');
    
    const existingPid = getDevServerPid();
    if (existingPid) {
        log(`Dev server is already running with PID: ${existingPid}`);
        return;
    }
    
    const devProcess = spawn('npm', ['run', 'dev'], {
        cwd: PROJECT_DIR,
        detached: true,
        stdio: ['ignore', 'pipe', 'pipe']
    });
    
    // Save PID
    fs.writeFileSync(PID_FILE, devProcess.pid.toString());
    log(`Dev server started with PID: ${devProcess.pid}`);
    
    // Redirect output to files
    const outLog = fs.createWriteStream(path.join(PROJECT_DIR, 'dev-server-out.log'), { flags: 'a' });
    const errLog = fs.createWriteStream(path.join(PROJECT_DIR, 'dev-server-err.log'), { flags: 'a' });
    
    devProcess.stdout.pipe(outLog);
    devProcess.stderr.pipe(errLog);
    
    // Unref to allow parent to exit
    devProcess.unref();
    
    // Wait a moment and check if it's still running
    setTimeout(() => {
        const pid = getDevServerPid();
        if (pid) {
            log('Dev server is running successfully');
        } else {
            log('ERROR: Dev server failed to start');
        }
    }, 3000);
}

function stopDevServer() {
    log('Stopping dev server...');
    
    const pid = getDevServerPid();
    if (pid) {
        try {
            process.kill(pid, 'SIGTERM');
            log(`Dev server stopped (PID: ${pid})`);
            fs.unlinkSync(PID_FILE);
        } catch (e) {
            log(`ERROR: Failed to stop dev server: ${e.message}`);
        }
    } else {
        log('No dev server process found');
    }
    
    // Also try to kill any node processes running npm/next
    if (process.platform === 'win32') {
        exec('taskkill /F /IM node.exe', (error) => {
            if (error) {
                log(`No additional node processes to kill`);
            } else {
                log('Killed all node processes');
            }
        });
    } else {
        exec('pkill -f "npm.*dev" || pkill -f "next dev"', (error) => {
            if (error) {
                log(`No additional dev server processes to kill`);
            } else {
                log('Killed dev server processes');
            }
        });
    }
}

function getStatus() {
    const pid = getDevServerPid();
    if (pid) {
        log(`Dev server is RUNNING (PID: ${pid})`);
        process.exit(0);
    } else {
        log('Dev server is NOT running');
        process.exit(1);
    }
}

// Main execution
const command = process.argv[2];

switch (command) {
    case 'start':
        startDevServer();
        break;
    case 'stop':
        stopDevServer();
        break;
    case 'status':
        getStatus();
        break;
    default:
        console.log('Usage: node vscode-workspace-handler.js <start|stop|status>');
        process.exit(1);
}
