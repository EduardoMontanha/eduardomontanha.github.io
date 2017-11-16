# Util Commands

## comparePrices
Get element's path or values, and compare them.

Parameter | Type | Description
--- | --- | ---
*val1* | String / Double | The element (CSS / Xpath) used to locate the element, or the value as string or double.
*val2* | String / Double | The element (CSS / Xpath) used to locate the element, or the value as string or double.

```javascript
//A few examples
browser.comparePrices("#selector1", "#selector2");
browser.comparePrices("#selector", 12.90);
browser.comparePrices(15.89, "12.90");
browser.comparePrices("209", "#selector");
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
browser.getPrice("#selctor", function (price) {
    //price param will contain the selector's price as String
});

browser.getPrice("#selector", function (price) {
    //price param will contain the selector's price as String
}, true); // If condition is true, will retur the price as double
```

---

## hasText
Check if element contais text.

Parameter | Type | Description
--- | --- | ---
*path* | String | The element (CSS / Xpath) used to locate the element.

```javascript
browser.hasText("#selector");
```

---

## Metrics
### checkForClicktrack
Check if an element has clickTrack.

Parameter | Type | Description
--- | --- | ---
*element* | String | The element (CSS / Xpath) used to locate the element.
*metric* | String | The metric to be checked.

```javascript
browser.checkForClicktrack("#selector", "metric_value");
```

---

### checkForRef
Check if an element has ref metric.

Parameter | Type | Description
--- | --- | ---
*element* | String | The element (CSS / Xpath) used to locate the element.
*metric* | String | The metric to be checked.

```javascript
browser.checkForRef("#selector", "metric_value");
```