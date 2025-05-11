@echo off
setlocal enabledelayedexpansion

rem إنشاء ملف التكست
echo [ > output.txt

rem قراءة أسماء المجلدات في المجلد الحالي
for /d %%D in (*) do (
    rem إذا كان العنصر مجلدًا
    if exist "%%D\thumb.jpg" (
        rem إضافة البيانات إلى الملف
        echo   { >> output.txt
        echo     name: "%%D", >> output.txt
        echo     image: "html5/%%D/thumb.jpg", >> output.txt
        echo   }, >> output.txt
    )
)

rem غلق الملف
echo ] >> output.txt

echo تم إنشاء الملف output.txt بنجاح.
