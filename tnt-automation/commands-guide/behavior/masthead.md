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
    var self = this;
        
    //Check Logo
    var logo = "#revidHeader span.mhLogo img";
    self
        .waitForElementPresent(logo)
        .verify.validUrl(logo, "src", "http://i.dell.com/images/global/brand/ui/logo-wt-bl.png")
        .verify.visible(logo);
    
    
    //Test search bar
    var search = "#searchinput",
        searchBtn = ".mhSearch button",
        searchText = "inspiron",
        time = 5000;
    self
        //Testing search clicking on Search button
        .waitForElementPresent(search)
        .verify.visible(search)
        .click(search)
        .keys(searchText)
        .verify.visible(searchBtn)
        .click(searchBtn)
        .pause(time)
        .verify.value("#search-next-search-box", searchText)
        .back()
        //Testing search pressing ENTER button
        .waitForElementPresent(search)
        .verify.visible(search)
        .click(search)
        .keys(searchText)
        .keys(self.Keys.ENTER)
        .pause(time)
        .verify.value("#search-next-search-box", searchText)
        .back();
    
    
    //Check Tiers Links
    var tier1Links = "#tr1 .t1Nav > li";
    self
        .waitForElementPresent(tier1Links)
        .elements("css selector", tier1Links + " > .tierLink a", function (links) {
            
            links.value.map(function (link) {
                self
                    .elementIdAttribute(link.ELEMENT, 'href', function (href) {
                        self.verify.validUrl("#for_homeMenu > .tierLink a", "href");
                        //self.verify.validUrl(href);
                        //self.verify.validUrl(href.value, 'href');
                    })
                    .elementIdText(link.ELEMENT, function (res) {
                        self.verify.ok(/\w+/g.test(res.value) === true, "Element contains text.");
                    });
            });
        });
    
    //Check My Account Link
    
    
    return self;
};
```