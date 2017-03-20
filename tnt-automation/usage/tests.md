# Test Structure

Here is the basic structure of a *test*.

All the *recipes* of a test are a different step in the automation test.

```javascript
/* 1234.js */

module.exports = {
    
    '#1234 - Recipe A': function (browser) {
        'use strict';
    },
    
    '#1234 - Recipe B': function (browser) {
        'use strict';
    },
    
    '#1234 - Recipe C': function (browser) {
        'use strict';
    },
    
    '#1234 - Recipe D': function (browser) {
        'use strict';
    }
};
```