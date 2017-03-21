# Using a Page Object
Most part of out tests will have to check if a page behavior was
compromised by some development change.

Let's suppose test #1234 runs at a Homepage Legacy page.

You'll have to get the *page object* referent to the page we will be
testing, and keep this object in a variable called `homepage` for
example. (The variable can have the name you want).

```javescript
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

```javescript
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
but some of the features in the homepage legacy are made by targeting
and without the scrub the feature may not appear causing a test fail.

Okay, now that we already have a reference of the *page object* in our
test, we can just call for the behavior we want to test.

```javescript
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

In the code above you we are testing 4 different behaviors for a
homepage legacy page. Also, you may have noticed that in the end of
the step we have a `browser.end()`. After we check everything we want
we need to end the test. That line of code is finishing the test.