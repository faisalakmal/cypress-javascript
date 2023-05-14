## initiate node package modules

npm init -y

## install cypress framework

npm install cypress

## checking cypress version

npx cypress -v OR
npx cypress verify

## running from Test Runner

npx cypress open

## running from Test Terminal

npx cypress run
OR
npx cypress run --headed

## running single test from Test Terminal

npx cypress run -spec ".\cypress\e2e\<name_directory>"

## running from Test Terminal using specified browser

npx cypress run --browser chrome
