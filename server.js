// Plesk deployment entry point
// This script launches the Next.js standalone server from the pre-built output
const path = require('path');
const { execSync, spawn } = require('child_process');
const fs = require('fs');

const standaloneDir = path.join(__dirname, '.next', 'standalone');
const standaloneServerJs = path.join(standaloneDir, 'server.js');

// Ensure the standalone build exists
if (!fs.existsSync(standaloneServerJs)) {
  console.error('ERROR: Standalone build not found at', standaloneServerJs);
  console.error('Please run "npm run build" locally and push the .next/standalone directory.');
  process.exit(1);
}

// Copy public/ into standalone directory if it exists and hasn't been copied
const publicSrc = path.join(__dirname, 'public');
const publicDest = path.join(standaloneDir, 'public');
if (fs.existsSync(publicSrc) && !fs.existsSync(publicDest)) {
  console.log('Copying public/ to standalone directory...');
  fs.cpSync(publicSrc, publicDest, { recursive: true });
}

// Copy .next/static into standalone/.next/static if not already there
const staticSrc = path.join(__dirname, '.next', 'static');
const staticDest = path.join(standaloneDir, '.next', 'static');
if (fs.existsSync(staticSrc) && !fs.existsSync(staticDest)) {
  console.log('Copying .next/static to standalone directory...');
  fs.cpSync(staticSrc, staticDest, { recursive: true });
}

// Set environment variables
process.env.PORT = process.env.PORT || '3000';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

// Launch the standalone server
console.log(`Starting Next.js standalone server on port ${process.env.PORT}...`);
require(standaloneServerJs);
