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

Let's declare an object that will keep all this *behaviors*:

```javascript
var homepageCommands = {};
```

Okay, now that we have where to put the *behaviors* let's assign a new
name for each one.

```javascript
var homepageCommands = {
        checkInterstitialBanner: function () {
            'use strict';
            return this.homeLegacyInterstitialBanner();
        }
    };
```

From now on, we can call the *custom command* called
`homeLegacyInterstitialBanner` as `checkInterstitialBanner` inside the
*page object* that it is assigned.

After you place all your *behaviors* inside this new *object* we need
to pass them to the *page object*.

```javascript
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