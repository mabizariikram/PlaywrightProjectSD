@echo off

echo ============================
echo   GIT AUTO PUSH START
echo ============================

echo Adding files...
git add .

echo Creating commit...
git commit -m "auto commit"

echo Pushing to GitHub...
git push

echo ============================
echo   DONE SUCCESSFULLY
echo ============================

pause