@echo off
:: Loop through first-level directories
for /d %%D in (*) do (
    :: Check for image files in each directory
    for %%F in ("%%D\*.jpg" ) do (
        :: Rename the first image file found to thumb.jpg
        ren "%%F" "thumb.jpg"
    )
)
echo All image files have been renamed to thumb.jpg in first-level directories.
pause
