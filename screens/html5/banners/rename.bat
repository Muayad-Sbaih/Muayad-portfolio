@echo off
:: Iterate through all subdirectories
for /r %%F in (*.html) do (
    echo Attempting to rename: %%F
    move "%%F" "%%~dpFindex.html" || echo Failed to rename: %%F
)
pause