# Project Instructions for Kilo Code

## Windows Command Compatibility

This project runs on **Windows 11** with **PowerShell 7** as the default shell.

### CRITICAL: Use Windows-Compatible Commands

When executing CLI commands, ALWAYS use Windows/PowerShell syntax. NEVER use Unix/Linux commands.

### Command Reference Table

| Unix Command | Windows CMD | PowerShell | Notes |
|-------------|-------------|------------|-------|
| `rm -rf path` | `rmdir /s /q path` | `Remove-Item -Recurse -Force path` | Delete directory |
| `rm file` | `del file` | `Remove-Item file` | Delete file |
| `cp src dest` | `copy src dest` | `Copy-Item src dest` | Copy file |
| `mv src dest` | `move src dest` | `Move-Item src dest` | Move file |
| `mkdir -p path` | `mkdir path` | `New-Item -ItemType Directory -Path path` | Create directory |
| `cat file` | `type file` | `Get-Content file` | Read file |
| `grep pattern file` | `findstr pattern file` | `Select-String pattern file` | Search in file |
| `head -n 10 file` | N/A | `Get-Content file -First 10` | First N lines |
| `tail -n 10 file` | N/A | `Get-Content file -Tail 10` | Last N lines |
| `sed 's/old/new/g' file` | N/A | `(Get-Content file) -replace 'old','new'` | Replace text |
| `ls` | `dir` | `Get-ChildItem` or `ls` (alias) | List directory |
| `ls -la` | `dir` | `Get-ChildItem -Force` | List with hidden |
| `touch file` | `type nul > file` | `New-Item -Type file file` | Create empty file |
| `chmod` | `icacls` | `icacls` (no PS equivalent) | Change permissions |
| `which command` | `where command` | `Get-Command command` | Find command |
| `env` | `set` | `Get-ChildItem Env:` | List env vars |
| `export VAR=val` | `set VAR=val` | `$env:VAR = "val"` | Set env var |
| `pwd` | `cd` | `Get-Location` | Current directory |
| `clear` | `cls` | `Clear-Host` | Clear screen |
| `find . -name "*.ts"` | `dir /s /b *.ts` | `Get-ChildItem -Recurse -Filter *.ts` | Find files |

### Chaining Commands

| Unix | Windows CMD | PowerShell |
|------|-------------|------------|
| `cmd1 && cmd2` | `cmd1 && cmd2` | `cmd1; cmd2` or `cmd1 && cmd2` |
| `cmd1 \|\| cmd2` | `cmd1 \|\| cmd2` | `cmd1; if (-not $?) { cmd2 }` |
| `cmd1 ; cmd2` | `cmd1 & cmd2` | `cmd1; cmd2` |
| `cmd \| grep x` | `cmd \| findstr x` | `cmd \| Select-String x` |

### Redirecting Output

| Unix | Windows |
|------|---------|
| `cmd > file` | `cmd > file` (same) |
| `cmd >> file` | `cmd >> file` (same) |
| `cmd 2>&1` | `cmd 2>&1` (same) |
| `cmd 2>/dev/null` | `cmd 2>nul` |

### Special Notes

1. **PowerShell aliases**: PowerShell has aliases like `ls`, `cat`, `rm` that work, but use full cmdlet names for reliability
2. **Path separators**: Windows uses `\` but PowerShell accepts `/` too
3. **Quotes**: PowerShell uses single quotes for literal strings, double quotes for interpolation
4. **Execution Policy**: If scripts fail, may need `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`
5. **Long paths**: Windows has 260 char limit, enable long paths in registry if needed

### Examples of Correct Usage

```powershell
# Delete .next directory
Remove-Item -Recurse -Force .next

# Clear cache and restart
taskkill /F /IM node.exe; Remove-Item -Recurse -Force .next; npm run dev

# Read first 50 lines of a file
Get-Content dictionaries/en.json -First 50

# Search for text in files
Select-String -Path "dictionaries/*.json" -Pattern "signature_playlists"

# Create directory if not exists
New-Item -ItemType Directory -Path "new-folder" -Force
```

### When in Doubt

If unsure about a command, use Node.js one-liners which work cross-platform:
```bash
node -e "require('fs').rmSync('.next', {recursive: true, force: true})"
node -e "console.log(require('fs').readFileSync('file.txt', 'utf8').split('\n').slice(0, 10).join('\n'))"
```
