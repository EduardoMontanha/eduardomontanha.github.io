# Page Objects
A *page object* will be a reference to a web page.<br>
We use this objects to define unique commands or other properties that
will help us develop tests in a specific page.

*Page objects* are not a MUST, but it will keep the code easier to
understand and the maintenance simple.

---

## Creating a new Page Object
The basic structure for a new *page object* is very simple. Till now we
didn't explore the whole potential of this object, we are just using it
to refer *custom commands* to one specific page.

!> We must have in mind that the name of the file will define the name
of the object. For example:<br>
If we create a file named `homepage.js` we will call it later as
`homepage()`.

Below you can see the most basic structure for a *page object*:

```javascript
/* homepage.js */

module.exports = {
    elements: {}
};
```

!> You must declare the property `elements` and/or `sections` even
if you don't use them. Otherwise the *page object* will not work.

If you want more details about *page objects*
[click here](http://nightwatchjs.org/guide#page-objects).

---

## Adding behavior commands
*Behavior* commands are just *custom commands* that are specific to a
web page. In other words, they can only be used on the page they were
made for.

Let's declare an object that will keep all *behaviors* of the page:

```javascript
/* homepage.js */

var homepageCommands = {};
```

Okay, now that we have where to put the *behaviors* let's assign a new
name for each one.

```javascript
/* homepage.js */

var homepageCommands = {
        checkInterstitialBanner: function () {
            'use strict';
            return this.homeLegacyInterstitialBanner();
        }
    };
```

From now on, we can call the *custom command* called
`homeLegacyInterstitialBanner` as a method called
`checkInterstitialBanner` inside the *page object* we just created.

After you place all your *behaviors* inside this new *object* we need
to pass them to the *page object*.

```javascript
/* homepage.js */

var homepageCommands = {
        checkInterstitialBanner: function () {
            'use strict';
            return this.homeLegacyInterstitialBanner();
        },
        checkLegacyBanner: function () {
            'use strict';
            return this.homeLegacyBanner();
        },
        checkLegacyContent: function () {
            'use strict';
            return this.homeLegacyContent();
        },
        checkLegacyTiles: function () {
            'use strict';
            return this.homeLegacyTiles();
        }
    };

module.exports = {
    commands: [homepageCommands],
    elements: {}
};
```

And that's it! We assigned all the *behaviors* to its proper web page.

---

## Using a Page Object
Most part of out tests will have to check if a page behavior was
compromised by some development change.

Let's suppose test #1234 runs at a Homepage Legacy page.

You'll have to get the *page object* referent to the page we will be
testing, and keep this object in a variable called `homepage` for
example. (The variable can have the name you want).

```javascript
/* 1234.js */

module.exports = {

    '#1234 - Recipe B': function (browser) {
        'use strict';
        var homepage = browser.page.homepage();
    }
};
```

After that, you'll have to say the browser the url that the test is
running.

```javascript
/* 1234.js */

module.exports = {

    '#1234 - Recipe B': function (browser) {
        'use strict';
        var homepage = browser.page.homepage();
        
        browser.url("http://www.dell.co.uk/?scrub=notimeout");
    }
};
```

!> The scrub with value *notimeout* it's not necessary in all links,
but some of the features in the Homepage Legacy are made by targeting
and without the scrub the feature may not appear causing a test fail.

Okay, now that we already have a reference of the *page object* in our
test, we can just call for the behavior we want to test.

```javascript
/* 1234.js */

module.exports = {

    '#1234 - Recipe B': function (browser) {
        'use strict';
        var homepage = browser.page.homepage();
        
        browser.url("http://www.dell.co.uk/?scrub=notimeout");
        
        homepage.checkInterstitialBanner();
        homepage.checkLegacyBanner();
        homepage.checkLegacyContent();
        homepage.checkLegacyTiles();
        
        browser.end();
    }
};
```

In the code above we are testing 4 different behaviors for a
Homepage Legacy page. Also, you may have noticed that in the end of
the step we have a `browser.end()`. After we check everything we want
we need to end the test, and that line is doing this.