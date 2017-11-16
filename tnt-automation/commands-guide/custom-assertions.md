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
browser.verify.validUrl("#selector", "href");
browser.verify.validUrl("#selector", "href", "www.dell.com");
browser.verify.validUrl("#selector", "src", "/en-uk/work/shop/");
browser.verify.validUrl("#selector", "src", ["dell", "laptops", "inspiron"]);

```