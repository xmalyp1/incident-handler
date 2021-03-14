@echo off

echo exec ../../post-merge-autorun.bat > .git/hooks/post-merge
echo exec echo @echo off ^> ../../post-merge-autorun.bat >> .git/hooks/post-merge
echo @echo off > post-merge-autorun.bat
