#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -e  # exit on error

# selenium needed for complete testing of Seaside application (https://github.com/GsDevKit/GsDevKit_home/issues/284#
if [ ! -d "selenium-server-standalone-3.141.59.jar" ] ; then
	# download launch theselenium web driver
	CHROME_MAJOR_VERSION=`google-chrome --version | cut -d ' ' -f3 | cut -d '.' -f1,2,3`
	CHROME_DRIVER_VERSION=`curl -sS https://chromedriver.storage.googleapis.com/LATEST_RELEASE_$CHROME_MAJOR_VERSION`
	wget http://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar
	wget https://chromedriver.storage.googleapis.com/${CHROME_DRIVER_VERSION}/chromedriver_linux64.zip
	unzip chromedriver_linux64.zip
fi
# LAUNCH the web driver
# "export DISPLAY=:99.0"
# "/sbin/start-stop-daemon --start --quiet --pidfile /tmp/custom_xvfb_99.pid --make-pidfile --background --exec /usr/bin/Xvfb -- :99 -ac -screen 0 1280x1024x16"
$JAVA -Dwebdriver.chrome.driver=chromedriver -Dwebdriver.chrome.logfile=${TRAVIS_BUILD_DIR}/chromedriver.log -Dwebdriver.chrome.args=--verbose -jar ${TRAVIS_BUILD_DIR}/selenium-server-standalone-3.141.59.jar -port 4444 -log ${TRAVIS_BUILD_DIR}/seleniumlog.txt &

startStone -b ${STONENAME1}

# test the Getting started with Seaside instructions
set +e	# we want to ensure that we kill the chrome driver in the event of a test failure
"$GS_HOME/bin/private/gsDevKitTodeCommandLine" todeIt ${STONENAME1} << EOF
# after test run, <self> will be a TestResult
project install --url=http://gsdevkit.github.io/GsDevKit_home/Seaside32.ston
project load --loads=\`#('CI')\` Seaside3
test --batch project Seaside3
eval \`[(self hasErrors or: [ self hasFailures ]) ifTrue: [ self error: 'Tests failed' ] ] on: Warning do: [:ex | ex resume: true ]\`
EOF
status=$?

kill %1

if [ "$status" != "0" ] ; then
 exit $status
fi

if [ -e "${TRAVIS_BUILD_DIR}/chromedriver.log" ] ; then
	echo "======CHROME======="
	cat ${TRAVIS_BUILD_DIR}/chromedriver.log
fi
if [ -e "${TRAVIS_BUILD_DIR}/seleniumlog.txt" ] ; then
	echo "======SELENIUM======="
	cat ${TRAVIS_BUILD_DIR}/seleniumlog.txt &
fi


