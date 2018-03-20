# Google Spreadsheets Scripts

## Introduction
Manage a Google spreadsheet with many user can be difficult. 
This script will help you to automatically fill rows in specific columns to get the last modification date & the username of the user who made these changes.

## How to create scripts for a spreadsheets ?
Full documentation [here](https://developers.google.com/apps-script/guides/sheets)

To test this script just copy the code inside the google scripts editor:
![Google Script](../img/screenshot_script.png)

Fill lines below and add the letters to identify the columns which will be filled when a row is modified
```
  var last_modif_date = 'K'
  var last_modif_username = 'L'

```
Then click on save.

That should work :) 
