# Custom Assertions

## validUrl
Check if the given element contains the specified text in the href or
src attribute.

Parameter | Type | Description
--- | --- | ---
*selector* | String | The selector (CSS / Xpath) used to locate the element.
*attr* | String | The attribute to be verified.
*url* | String / Array | The url or url fragments to look for.

```javascript
var util = require('util');
exports.assertion = function (selector, attr, url) {
    'use strict';
    
    /**
     * The message which will be used in the test output and
     * inside the XML reports
     * @type {string}
     */
    var MSG_ELEMENT_NOT_FOUND = 'Testing if element <%s> "%s" attribute contains a valid url. ' +
        'Element could not be located.',
        msgFragments = "";
    
    if (Array.isArray(url)) {
        for (var i = 0; i < url.length; i++) {
            msgFragments += url[i];
            if (i !== url.length - 1) {
                msgFragments += ", ";
            }
        }
    } else {
        msgFragments = url;
    }
    
    this.message = util.format('Testing if element <%s> "%s" attribute contains a valid url.', selector, attr);
    
    /**
     * A value to perform the assertion on. If a function is
     * defined, its result will be used.
     * @type {function|*}
     */
    this.expected = true;
    
    /**
     * The method which performs the actual assertion. It is
     * called with the result of the value method as the argument.
     * @type {function}
     */
    this.pass = function (value) {
        if (url) {
            if (Array.isArray(url)) {
                for (var i = 0; i < url.length; i++) {
                    if (value.indexOf(url[i]) == -1) {
                        return false;
                    }
                }
                return true;
            } else {
                return value.indexOf(url) > -1;
            }
        } else {
            var pattern = /(https?:\/\/)?(www\.)?[\-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\b([\-a-zA-Z0-9:%_\+.~#?&\/\/=]*)/g;
            return pattern.test(value);
        }
    };
    
    this.failure = function (result) {
        var failed = result === false || (result && result.status === -1);
        if (failed) {
            this.message = util.format(MSG_ELEMENT_NOT_FOUND, selector, attr);
        }
        return failed;
    };
    
    /**
     * The method which returns the value to be used on the
     * assertion. It is called with the result of the command's
     * callback as argument.
     * @type {function}
     */
    this.value = function (result) {
        return result.value;
    };
    
    /**
     * Performs a protocol command/action and its result is
     * passed to the value method via the callback argument.
     * @type {function}
     */
    this.command = function (callback) {
        
        return this.api.getAttribute(selector, attr, callback);
    };
};
```