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

## Testing stuff in the page
Let's see how you can test things in a page.

You may have noticed that all steps have a parameter called *browser*,
and it's because *browser* is a reference of the client.

Let's do a simple test considering the following *HTML*:

```html
<body>
    <main>
        <p id="hello">Hello World!</p>
        <p>Are you sure?</p>
    </main>
</body>
```

To check the test of the first paragraph we will have to do something
like this:

```javascript
/* 1234.js */

module.exports = {
    
    '#1234 - Recipe B': function (browser) {
        'use strict';
        browser
            .waitForElementPresent("#hello")
            .expect.element("#hello").text.to.contain("Hello")
            .end();
    }
};
```

To run the test we will open the *Command Prompt* and go to the project
folder. Then we will type `npm run local`.<br>
*Nightwatch.js* will open the browser and execute the test.

The test above will be *true* because the paragraph with id *hello*
contais the word *Hello*.

So, you can see now that there is no magic in here. You'll just have
to explore the native commands to check what you want. And if you don't
find a command or assertion that fits your necessities you can create
your own custom commands and assertions.