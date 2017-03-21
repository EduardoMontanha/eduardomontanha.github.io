# Util Commands

## comparePrices
Get element's path or values, and compare them.

Parameter | Type | Description
--- | --- | ---
*val1* | String / Double | The element (CSS / Xpath) used to locate the element, or the value as string or double.
*val2* | String / Double | The element (CSS / Xpath) used to locate the element, or the value as string or double.

```javascript
exports.command = function (val1, val2) {
    'use strict';
    var self = this,
        message = 'Prices have the same value.',
        pricePattern = /\$\d+(\,\d+)?(\.\d+)?/g,
        price = 0,
        typeOfVal1 = typeof val1,
        typeOfVal2 = typeof val2;
    
    if (typeOfVal1 === 'string' && typeOfVal2 === 'string') {
        
        if (pricePattern.test(val1) && pricePattern.test(val2)) {
            
            return self.assert.ok(val1 === val2, message);
            
        } else if (pricePattern.test(val1)) {
            
            return self
                .getPrice(val2, function (result) {
                    return self.assert.ok(val1 === result, message);
                }, true);
            
        } else {
            
            return self
                .getPrice(val1, function (result) {
                    return self.assert.ok(val2 === result, message);
                }, true);
            
        }
        
    } else if (typeOfVal1 === 'number' && typeOfVal2 === 'number') {
        
        return self.assert.ok(val1 === val2, message);
        
    } else if (typeOfVal1 === 'string' && typeOfVal2 === 'number') {
        
        if (pricePattern.test(val1)) {
            
            price = parseFloat(val1.replace("$", ""));
            return self.assert.ok(price === val2, message);
            
        } else {
            
            return self
                .getPrice(val1, function (result) {
                    return self.assert.ok(val2 === result, message);
                });
            
        }
        
    } else if (typeOfVal1 === 'number' && typeOfVal2 === 'string') {
        
        if (pricePattern.test(val2)) {
            
            price = parseFloat(val2.replace("$", ""));
            return self.assert.ok(price === val1, message);
            
        } else {
            
            return self
                .getPrice(val2, function (result) {
                    return self.assert.ok(val1 === result, message);
                });
            
        }
        
    } else {
        throw new Error("The params should be a string or double.");
    }
};
```

---

## getPrice
Get element's text, remove unnecessary characters and parse it to float.

Parameter | Type | Description
--- | --- | ---
*path* | String | The element (CSS / Xpath) used to locate the element.
*callback* | function | The function to run as part of the queue. Its signature can have one parameter.
*condition* | boolean | The condition to check if the price should be returned as String or Double.

```javascript
exports.command = function (path, callback, condition) {
    'use strict';
    return this
        .waitForElementPresent(path)
        .getText(path, function (result) {
            var price;
            
            if (condition) {
                price = result.value.replace(/(?:[\+|\-]\s?)/g, ""); //Returns a string containnign price like '$49.50'
            } else {
                price = parseFloat(result.value.replace(/(?:[\+|\-]\s?)?\$/g, "")); //Returns the result as double
            }
            
            callback(price);
        });
};
```

---

## hasText
Check if element contais text.

Parameter | Type | Description
--- | --- | ---
*path* | String | The element (CSS / Xpath) used to locate the element.

```javascript
exports.command = function (element) {
    'use strict';
    return this
        .waitForElementPresent(element)
        .expect.element(element).text.to.match(/\w+/g);
};
```