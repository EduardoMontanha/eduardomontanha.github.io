## Test Structure
Here is the basic structure of a *test*:

```javascript
/* 1234.js */

module.exports = {
    
    '#1234 - Recipe A': function (browser) {
        'use strict';
    },
    
    '#1234 - Recipe B': function (browser) {
        'use strict';
    },
    
    '#1234 - Recipe C': function (browser) {
        'use strict';
    },
    
    '#1234 - Recipe D': function (browser) {
        'use strict';
    }
};
```

All the *recipes* are separate in different steps.

!> If a test becomes too big, you can create a file for each recipe.<br>
You'll have to put them all together inside a folder that has the test
id as name like `tests/1234/1234-A.js`.<br>
Take a look at [Folders](https://eduardomontanha.github.io/tnt-automation/#/usage/folders?id=addremove-a-folder)
section for more details.

---

## Testing things
Let's see how you can test things in a page.

You may have notice that in all steps we have a *browser* parameter.<br>

Parameter | Description
--- | ---
*browser* | Is a reference for the client.

```javascript
/* 1234.js */

module.exports = {
    
    '#1234 - Recipe B': function (browser) {
        'use strict';
    }
};
```