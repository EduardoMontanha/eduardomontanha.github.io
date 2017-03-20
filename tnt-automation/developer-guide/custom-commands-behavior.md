# Homepage Legacy

---

## checkInterstitialBanner
Test interstitial banner on homepage legacy pages.
- Check if there is text in the banner
- Check if there are links present

```javascript
exports.command = function () {
    'use strict';
    var self = this,
        time = 3000,
        banner = "#revidHeader .custHelp";
    
    return self
        .hasText(banner + " .help")
        .elements("css selector", banner + " a", function (result) {
            result.value.map(function (link) {
                
                self.elementIdAttribute(link.ELEMENT, "href", function (href) {
                        if (href.value !== null) {
                            var pattern = /(https?:\/\/)?(www\.)?[\-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([\-a-zA-Z0-9:%_\+.~#?&\/\/=]*)/g;
                            
                            self.assert.ok(pattern.test(href.value), "Link has a valid URL");
                        }
                    });
            });
        })
        //Manage Cookies
        /*.waitForElementPresent(".custHelp .premier a[href^='#']")
        .click(".custHelp .premier a[href^='#']")
        .pause(time)
        .waitForElementPresent("#ens_pr_dialog")
        .assert.visible("#ens_pr_dialog")*/;
};
```

---

## checkLegacyBanner
Test if the Flash Banner exists and if it's clickable.
- Check if banner exists
- Check if it's clickable

```javascript
exports.command = function () {
    'use strict';
    var self = this,
        banner = ".flashContentDiv",
        currentUrl;
    
    return self
        .waitForElementPresent(banner)
        .url(function (result) {
            currentUrl = result.value;
        })
        .assert.visible(banner)
        .click(banner)
        .pause(2000)
        .url(function (result) {
            self.assert.ok(result.value !== currentUrl, "Banner is clickable");
        })
        .back();
};
```

---

## checkLegacyContent

---

## checkLegacyTiles
