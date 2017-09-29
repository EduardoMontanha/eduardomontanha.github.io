# SSB

## checkServiceSelection
Test radio buttons functionality
- Click on radio buttons
- Check if the price change
    - Check if the price is right
- Check error message

```javascript
exports.command = function () {
    'use strict';
    var self = this; //Browser

    //Search Variables - Variables that contain the elements location/path
    var subtotal = 'h3[data-testid="warrantyServicesSubTotal"]',
        serviceRadio = '#m_33 li.options.ng-scope:nth-child(4)', //Radio Button - Group 1
        supportRadio = '#m_29 li.options.ng-scope:nth-child(3)', //Radio Button - Group 2
        loadingIcon = '.product-configurator > span',
        warningMsgContainer = '#m_33 div[class*="validation-error-container"]';
    
    //Content Variables - Variables that contain the elements content
    var subtotalPrice = 0,
        servicePrice = 0,
        supportPrice = 0;
    
    return self
        .waitForElementVisible(serviceRadio)
        
        //Get subtotal price
        .getPrice(subtotal, function (result) {
            subtotalPrice = result;
        })
        //Get price from the Services radio button that will be triggered
        .getPrice(serviceRadio + ' div[data-ng-click="configure(item)"] a', function (result) {
            servicePrice = result;
        })
        //Get price from the Support radio button that will be triggered
        .getPrice(supportRadio + ' div[data-ng-click="configure(item)"] a', function (result) {
            supportPrice = result;
        })
        
        .click(serviceRadio)
        .waitForElementNotVisible(loadingIcon)
        
        //Check sum of values and getting the new subtotal price
        .perform(function () { //Allow us read variables set by other commands
            self.comparePrices(subtotal, subtotalPrice + servicePrice);
            subtotalPrice += servicePrice;
        })
        
        .verify.visible(warningMsgContainer)
        .click(supportRadio)
        .waitForElementNotVisible(loadingIcon)
        
        //Check sum of values and getting the new subtotal price
        .perform(function () {
            self.comparePrices(subtotal, subtotalPrice + supportPrice);
            subtotalPrice += supportPrice;
        })
        
        .verify.elementNotPresent(warningMsgContainer);
};
```