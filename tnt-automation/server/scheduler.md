## automation.bat
The automation bat file will only need run once in the Virtual Machine.
After that, it will call the scheduler file, where you will set the
frequence that your tests will run.

```bat
node scheduler.js
```

---

## scheduler.js
In this file you will set the frequence that tests runs.

```javascript
'use strict';

function scheduler() {
    let cron = require('node-cron'),
        exec = require('child_process').exec;

                  // ┌────────────── second (optional)
                  // │ ┌──────────── minute
                  // │ │ ┌────────── hour
                  // │ │ │ ┌──────── day of month
                  // │ │ │ │ ┌────── month
                  // │ │ │ │ │ ┌──── day of week
                  // │ │ │ │ │ │
                  // │ │ │ │ │ │
    //cron.schedule('* * * * *', function () {
    cron.schedule('* * * * *', function () {
        console.log('Running automated tests...');
        var child = exec('npm run email',
          function (err, stdout, stderr) {
              if (err) throw err;
              else console.log(stdout);
              console.log('===================================================');
          });
    });
}

scheduler();
```