@echo off
REM Stop Dev Server - Batch wrapper for PowerShell script
cd /d "%~dp0.."
powershell -ExecutionPolicy Bypass -File "scripts\manage-dev-server.ps1" -Action stop
