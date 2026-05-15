@echo off

echo ===== AUTO GIT SCRIPT =====

git status

git add .

git commit -m "auto commit %date% %time%"

git push

echo ===== FINISHED =====
pause