# Folders Structure
Inside the project's folder, we will have some folders that we will use
to create our *tests*, *assertions* and custom *commands*.

![Folders structure](images/folders-structure.png "Folders structure")

## Add/Remove a folder
When we create a new folder, we need to associate it into the
*Nightwatch.js* settings files.<br>
We have to add the new folder path in two differnt files:
`local.conf.js` and `parallel.conf.js`.<br>
*You can find these files in the root folder of the project*<br>
<br>
In those files, we have 3 different properties. I fwe want to add a new
folder foa new behavior, we must put its path inside the
`custom_command_path`. Since the behaviors are *commands*.

!> If you have created a folder for a test, due his size or complexity,
you have to remove the path from `src_folders` property in the settings
files after move the test folder to `/old_tets`. If you don't remove
you will get an error everytime you try to run a test.<br>
The same serves for the folders inside `/custom`.

![Settings files folders](images/settings-files-folders.png "Settings files folders")

## /custom
The `/custom` folder will contain our *assertions*, *commands* and
*page objects*.

### /custom/assertions
This folder contains our custom *assertions*.

### /custom/commands
The content of this folder is separate in two other folder, `/behavior`
and `/util`.

#### /custom/commands/behavior
Its content is separate by page. Contains commands that will check each
page behavior.

#### /custom/commands/util
Contains commands that can be used everywhere. If you use the same
commands with a high frequence, you can think in create a new command
here.

### /custom/pages
This folder contains *Page Objects* files. You can see more details
about *page objects* in the development section of this documentation.

## /old_tests
As the name suggests, this folder contains the old tests. The tests
inside are separated in Fiscal Year and Quarter.<br>
*PS: A test is considered old not by the date we create them, but when
we don't need to run it anymore.*

![Old-test folder](images/old_tests-folder.png "Old-test folder")

## /reports
Everytime you run a test it will generate a report inside the
`/reports` folder with the id of the test, like `1234.xml` as the name
of the file.

## /screenshots
If the test returns an error, *Nightwatch.js* will take a screenshot
and save at `/screenshots` folder.<br>
*PS: You can also request inside the test to take screenshot of and
specific page or step.*

## /tests
Every file inside this folder will be executed. So, every current test
should be here.<br>
We will have one file for each test, and the name of this file must be
the test id number like `1234.js`.