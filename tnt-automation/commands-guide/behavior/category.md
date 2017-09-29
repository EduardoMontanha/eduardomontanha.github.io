# Category

## checkTabs
Test tiles for Desktops and Laptops category pages
- Click on each tab
- Test if the right element is being displayed
- Check if tabs that goes to other page are still working

```javascript
exports.command = function () {
    'use strict';
    var self = this,
        currentUrl;
    
    self
        //Here we will keep the value of the current url to check if Deals tile redirects to another page.
        .url(function (result) {
            currentUrl = result.value;
        })
        .elements("css selector", "#category-tiles .category-tile", function (tiles) {
            var tilesLen = tiles.value.length;
        
            tiles.value.map(function (tile, index) {
                //Click on each tile
                self.elementIdClick(tile.ELEMENT, function () {
                    if (index === 0) { //Shop All tile
                        //Search for families sections
                        self.elements("css selector", "div[id^='prototypeSeriesFamily']", function (families) {
                            families.value.map(function (family) {
                                //It will check if all family sections are visible
                                self.elementIdDisplayed(family.ELEMENT, function (result) {
                                    self.verify.ok(result.value, "Family is visible");
                                });
                            });
                        });
                    } else if (index < tilesLen - 1) { //Family tiles
                        
                        var tileTitle,
                            tileSubtitle;
                        
                        self
                            //Get tile title
                            .elementIdElement(tile.ELEMENT, "css selector", "h4", function (title) {
                                self.elementIdText(title.value.ELEMENT, function (result) {
                                    tileTitle = result.value;
                                    console.log("###### " + tileTitle + " ######"); //Make it better to read on console
                                });
                            })
                            //Get tile subtitle
                            .elementIdElement(tile.ELEMENT, "css selector", "h4 ~ p", function (subtitle) {
                                self.elementIdText(subtitle.value.ELEMENT, function (result) {
                                    tileSubtitle = result.value;
                                });
                            });
                        
                        //Search for families sections
                        self.elements("css selector", "div[id^='prototypeSeriesFamily']", function (families) {
                            families.value.map(function (family, familyIndex) {
                                if (familyIndex === index - 1) {
                                    self
                                        //Check if family section is visible
                                        .elementIdDisplayed(family.ELEMENT, function (result) {
                                            self.verify.ok(result.value, "Family is visible");
                                        })
                                        //Check if family title is equal tile title
                                        .elementIdElement(family.ELEMENT, "css selector", "h2", function (title) {
                                            self.elementIdText(title.value.ELEMENT, function (result) {
                                                self.verify.ok(result.value == tileTitle, "Titles are the same");
                                            });
                                        })
                                        //Check if family subtitle is equal tile subtitle
                                        .elementIdElement(family.ELEMENT, "css selector", "h2 ~ p strong", function (subtitle) {
                                            self.elementIdText(subtitle.value.ELEMENT, function (result) {
                                                self.verify.ok(result.value == tileSubtitle, "Subtitles are the same");
                                            });
                                        });
                                } else {
                                    //Others sections must be hidden
                                    self.elementIdDisplayed(family.ELEMENT, function (result) {
                                        self.verify.ok(result.value === false, "Family is hidden");
                                    });
                                }
                            });
                        });
                    } else { //Deals tile
                        console.log("###### Deals Tile ######");
                        //Check if Deals tile is redirection to another page
                        self
                            .pause(2000)
                            .url(function (result) {
                                self.verify.ok(result.value !== currentUrl, "Redirects to another page");
                            })
                            .back();
                    }
                });
            });
        });
    
    return self;
};
```