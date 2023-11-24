## initiate node package modules
npm install

## how to run from UI cypress
npm run cypress open

## how to run headless and create reports
npm run cypress:run

## running headless
npx cypress run --headed

## running single test from Test Terminal
npx cypress run 0-spec ".\cypress\e2e\<name_directory>"

## running from Test Terminal using specified browser
npx cypress run --browser chrome
