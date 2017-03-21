# Homepage Legacy

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
Test section below the tiles/carousel on homepage legacy pages
- Check if there are 3 images / sections
- Check if images source link is valid
- Check if links are clickable

```javascript
exports.command = function () {
    'use strict';
    var self = this,
        sections = "#column3 .fragCntBrdFull",
        
        hasText = function (text, msg) {
            self.assert.ok(/\w+/g.test(text), msg);
        },
        
        validUrl = function (url, msg) {
            var pattern = /(https?:\/\/)?(www\.)?[\-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([\-a-zA-Z0-9:%_\+.~#?&\/\/=]*)/g;
            self.assert.ok(pattern.test(url), msg);
        };
    
    return self
        .waitForElementPresent(sections)
        .elements("css selector", sections, function (result) {
            result.value.map(function (section) {
                self
                    //Check section image
                    .elementIdElement(section.ELEMENT, "css selector", ".para img", function (img) {
                        self
                            //Check image source
                            .elementIdAttribute(img.value.ELEMENT, "src", function (src) {
                                validUrl(src.value, "Image has a valid url source");
                            })
                            //Check if image is visible
                            .elementIdDisplayed(img.value.ELEMENT, function (isDisplayed) {
                                self.assert.ok(isDisplayed.value, "Image is visible.");
                            });
                    })
                    //Check section links
                    .elementIdElements(section.ELEMENT, "css selector", "tr:nth-child(4) div div div a", function (links) {
                        links.value.map(function (link) {
                            self
                                //Check if links has a valid url
                                .elementIdAttribute(link.ELEMENT, "href", function (href) {
                                    validUrl(href.value, "Link has a valid url");
                                })
                                //Check if link has text
                                .elementIdText(link.ELEMENT, function (text) {
                                    hasText(text.value, "Link has text");
                                })
                                //Check if link is visible
                                .elementIdDisplayed(link.ELEMENT, function (isDisplayed) {
                                    self.assert.ok(isDisplayed.value, "Link is visible.");
                                });
                        });
                    });
            });
        });
};
```

---

## checkLegacyTiles
Test tiles images and if they are clickable
- Check if images source link is valid
- Check if it's clickable

```javascript
exports.command = function () {
    'use strict';
    var self = this,
        time = 5000,
        tilesArea = "#uk-genhomepage-banners_ph",
        currentUrl,
        
        validUrl = function (url, msg) {
            var pattern = /(https?:\/\/)?(www\.)?[\-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([\-a-zA-Z0-9:%_\+.~#?&\/\/=]*)/g;
            self.assert.ok(pattern.test(url), msg);
        },
        
        checkTiles = function (result) {
            result.value.map(function (tile) {
                
                self
                    .elementIdElement(tile.ELEMENT, "css selector", "a", function (tileLink) {
                        self
                            //Check tile url
                            .elementIdAttribute(tileLink.value.ELEMENT, "href", function (url) {
                                validUrl(url.value, "Tile link is valid");
                            });
                    })
                    .elementIdElement(tile.ELEMENT, "css selector", "img", function (tileLink) {
                        self
                            //Check image source url
                            .elementIdAttribute(tileLink.value.ELEMENT, "src", function (src) {
                                validUrl(src.value, "Tile image has a valid source link");
                            })
                            //Check if image is being displayed
                            .elementIdDisplayed(tileLink.value.ELEMENT, function (isDisplayed) {
                                self.assert.ok(isDisplayed.value, "Tile image are been displayed");
                            });
                    });
            });
        };
    
    return self
        .waitForElementPresent("#for_homeMenu > .subNav .tier2 #for_homeMenu0")
        .click("#for_homeMenu")
        .click("#for_homeMenu0")
        .pause(time)
        .back()
        .pause(time)
        .waitForElementPresent(tilesArea)
        .url(function (result) {
            currentUrl = result.value;
        })
        //Tiles first row
        .elements("css selector", tilesArea + " .gridCell", function (result) {
            checkTiles(result);
        })
        //Tiles second row
        .elements("css selector", tilesArea + " .gridCellAlt", function (result) {
            checkTiles(result);
        });
};
```