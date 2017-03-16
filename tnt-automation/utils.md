## fixCartData

Fixes eComm cart data in case of unescaped quotes on product info

Returns **the fixed Cart *object***, or ***null*** if the script is not found.

```javascript
t1234.fixCartData();
```

---

## apiCall

Calls the TnT API for Sales Catalog information.

Parameter | Type | Description
--- | --- | ---
`type` | *string* | Type of the search. <br />*Possible values:*  `oc` `sku` `model` `configs`
`id` | *string* | ID of the element being searched. *(oc, sku, etc)*
`params` | *string* | Element's parameters that will be requested.
`fn` | *function* | Function that will be executed on a successful request. <br />Receives `data` as the request response.
`e` | *function* | *(Optional)* Function that will be executed on a failed request.

```javascript
t1234.apiCall('oc', 'fncwq53,dncwdp1', 'CatalogImage,Image,ShortDescription', function (data) {
    // logic
});
```

---

## getParameter

Extracts a parameter from the specified url.

Parameter | Type | Description
--- | --- | ---
`url` | *string* | URL the parameter will be extracted from.
`key` | *string* | Parameter name.

Returns the **parameter value** (as a *string*) or an ***empty string***, if not found.

```javascript
t1234.getParameter(location.href, 'oc');
```

---

## checkNested

Checks if object value exists already and is available.

Parameter | Type | Description
--- | --- | ---
`obj` | *object or string* | URL the parameter will be extracted from.

Returns **true** if available, **false** otherwise.

```javascript
t1234.checkNested('DELL.com.Mag.Anav');
```

```javascript
t1234.checkNested(DELL, 'com', 'Mag', 'Anav');
```

## preload

Preloads image(s) on the page, for posterior use.

Parameter | Type | Description
--- | --- | ---
`images` | *array* | List of image names to be preloaded. 
`path` | *string* | Path of the images.

```javascript
t1234.preload(['hero-image.jpg', 'windows.png'], 'http://i.dell.com/sites/imagecontent/consumer/en/PublishingImages/TnT_Tests/1234/');
```

---

## Error

Custom error handling function that adds extra information to the browser's console before triggering a bailout.

Parameter | Type | Description
--- | --- | ---
`msg` | *string* | Custom error message to be displayed.
`e` | *object* | Error object

```javascript
try {
    // logic
} catch (e) {
    t1234.Error('Custom error message.', e);
}
```