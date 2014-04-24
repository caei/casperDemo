@echo off

:: Default
set URL='http://www.digi.no'

:: Chk input
if "%1"=="" GOTO start

::chgURL
  set URL='%1'

:start
echo URL=%URL%
rem if "%2"<>"" echo Run only test: %2
cls
del cookies.txt
echo casperjs --verbose --cookies-file=cookies.txt test tests/%2 --pre=pre.js --includes=common.js --post=post.js --url=%URL% --xunit=logs/log.xml
pause
casperjs --verbose --cookies-file=cookies.txt test tests/%2 --pre=pre.js --includes=common.js --post=post.js --url=%URL% --xunit=logs/log.xml --web-security=false
