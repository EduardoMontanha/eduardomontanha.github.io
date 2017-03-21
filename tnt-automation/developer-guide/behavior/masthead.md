# Masthead

## checkHomeLegacy
Test masthead behavior on Homepage Legacy pages
- Check if logo is not broken
- Search box
    - Check if there is a search box
    - Check if search box is clickable
    - Check if text can be inserted on it
    - Check if it searches
    - Check if it searches by pressing enter
- Tiers
    - Check if there are 4 links with text on tier 1
    - Check if click on tier 1 opens tier 2 section
    - Check if there is a "view all" link at the bootom of the tier 2 sections

```javascript
exports.command = function () {
    'use strict';
    var self = this,
        time = 5000,
        logo = "#revidHeader span.mhLogo img",
        tier1Links = "#tr1 .t1Nav > li",
        search = "#searchinput",
        searchBtn = ".mhSearch button",
        searchText = "inspiron";
    
    return self
        //Check Logo
        .waitForElementPresent(logo)
        .assert.validUrl(logo, "src", "http://i.dell.com/images/global/brand/ui/logo-wt-bl.png")
        .assert.visible(logo)
        
        //Testing search clicking on Search button
        .waitForElementPresent(search)
        .assert.visible(search)
        .click(search)
        .keys(searchText)
        .assert.visible(searchBtn)
        .click(searchBtn)
        .pause(time)
        .assert.value("#search-next-search-box", searchText)
        .back()
        //Testing search pressing ENTER button
        .waitForElementPresent(search)
        .assert.visible(search)
        .click(search)
        .keys(searchText)
        .keys(self.Keys.ENTER)
        .pause(time)
        .assert.value("#search-next-search-box", searchText)
        .back()
        
        //Check Tiers Links
        .waitForElementPresent(tier1Links)
        .elements("css selector", tier1Links + " > .tierLink a", function (result) {
            
            result.value.map(function (v, index) {
                self
                    .elementIdAttribute(v.ELEMENT, 'href', function (res) {
                        // true
                        console.log(res.value);
                    })
                    .elementIdText(v.ELEMENT, function (res) {
                        self.assert.ok(/\w+/g.test(res.value) === true, "Element contains text.");
                    });
            });
        });
};
```