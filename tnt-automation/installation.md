## get

Gets a cookie value from the client's machine

Parameter | Type | Description
--- | --- | ---
`cookieName` | *string* | Name of the desired cookie

Returns the **cookie value** (as a *string*) or ***null***.

```javascript
t1234.cookie.get('1234_cookie'); // returns the cookie value or null
```

---

## set

Sets a cookie on the client's machine.

Parameter | Type | Description
--- | --- | ---
`name` | *string* | Name of the cookie
`value` | *string* | Value to be stored
`date` | *datetime* | *(Optional)* Expiration date. This is later converted to a GMT datetime. (date object, example input: new Date(2016, 6, 27, 20, 30)
`path` | *string* | *(Optional)* Path
`domain` | *string* | *(Optional)* Domain
`secure` | *boolean* | *(Optional)* Sends the cookie only to encrypted connections if true

```javascript
t1234.cookie.set('1234_cookie', '1234:cookie:test:value', new Date(2017, 6, 27, 20, 30), '/', 'dell.com');
```