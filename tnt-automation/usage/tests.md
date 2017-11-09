## Test Structure
Here is the basic structure of a *test*:

```javascript
/* globals module */

//Properties
var urls = [ //Where test will run
    "http://www.dell.com/en-us/shop/scc/sc/laptops?~ck=mn",
    "http://www.dell.com/en-us/shop/category/desktops?~ck=mn"
];

//Recipes
module.exports = {
    //Each step should be a different recipe
    '1234 - A': function (browser) {
        'use strict';
        var category = browser.page.category(); //Reference to page object
        
        //This will run your test through all urls
        urls.map(function (url) {
            browser.url(url + "&scrub=1234a"); //Adding recipe scrub
            
            category.checkTabs(); //Behavior
        });
        
        browser.end(); //Must be the last line of each step
    },
    
    '1234 - B': function (browser) {
        'use strict';
        var category = browser.page.category(); //Reference to page object
        
        //This will run your test through all urls
        urls.map(function (url) {
            browser.url(url + "&scrub=1234b"); //Adding recipe scrub
            
            /* Start - Specific recipe changes tests */
            
            /* End - Specific recipe changes tests */
            
            category.checkTabs(); //Behavior
        });
        
        browser.end(); //Must be the last line of each step
    }
};
```

!> If a test becomes too big, you can create a file for each recipe.<br>
You'll have to put them all together inside a folder that has the test
id as name like `tests/1234/1234-A.js`.<br>
Take a look at [Folders](https://eduardomontanha.github.io/tnt-automation/#/usage/folders?id=addremove-a-folder)
section for more details.

---

## Post-launch Tests
Code template for post-launched tests.

```javascript
/* globals module */

//Properties
var urls = [ //Where test will run
    "http://www.dell.com/en-us/shop/scc/sc/laptops?~ck=mn",
    "http://www.dell.com/en-us/shop/category/desktops?~ck=mn"
];

//Recipes
var recipeA = function (browser) {
        //do stuff
    },
    
    recipeB = function (browser) {
        //do stuff
    },
    
    recipeC = function (browser) {
        //do stuff
    };

module.exports = {
    //Each step should be a different recipe
    '1234 - Post-Launch': function (browser) {
        'use strict';
        var campaign,
            recipe,
            category = browser.page.category(); //Reference to page object
        
        //This will run your test through all urls
        urls.map(function (url) {
            browser.url(url); //Adding recipe scrub
            
            if (!campaign || !recipe) {
                var tntInfo = ".tt_info:not(#tt_info_hpr)";
                
                browser
                    .waitForElementPresent(tntInfo)
                    .getAttribute(tntInfo, "value", function (result) {
                        var testData = /(\d{5})\s\-\s(\w)+/g.match(result.value);
                        campaign = testData[1];
                        recipe = testData[2].toUpperCase();
                    });
            }
            
            //This will check which recipe test is running
            browser.perform(function () {
                if (campaign == "12345") { //Check campaign ID
                    if (recipe == "A") {
                        recipeA(browser);
                    } else if (recipe == "B") {
                        recipeB(browser);
                    } else if (recipe == "C") {
                        recipeC(browser);
                    }
                }
            });
            
            //Run behaviors after all
            category.checkTabs();
        });
        
        browser.end(); //Must be the last line of each step
    }
};
```

!> Since we can't pass the scrub for post-launched tests, we will get
cooked in just one assorted recipe for each time this code runs. So,
we should run this post-launch code more frequently to assure that we
pass through all recipes.

---

## Testing pages
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

To check the text of the first paragraph we will have to do something
like this:

```javascript
/* 1234.js */

module.exports = {
    '#1234 - Recipe B': function (browser) {
        'use strict';
        browser
            .url("url of the page we want to test")
            .waitForElementPresent("#hello")
            .expect.element("#hello").text.to.contain("Hello")
            .end();
    }
};
```

To run the test we will open the *Command Prompt* and go to the project
folder. Now we will type one of the commands below.<br>
Then *Nightwatch.js* will open the browser and execute the test.

```javascript
/* Command Prompt */

//On your computer
npm run local //Run all tests
npm run local --tests tests\1234.js //Run just one test
npm run local --tests tests\1234.js --testcase "1234 - Recipe A" //Run just one step

//On Virtual Mahcine
npm run remote //Run all tests on BrowserStack Automate
```

So, you can see now that there is no magic in here. Now you'll just have
to explore the native commands to check what you want. And if you don't
find a command or assertion that fits your necessities you can create
your own custom commands and assertions.