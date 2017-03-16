## clickTrack

Triggers a clickTrack. There are multiple ways to do that (see below).

Parameter | Type | Description
--- | --- | ---
`element` | *string* | *(Optional)* Element that triggers the clicktrack. If passed, it will bind to the element automatically.
`clicked` | *string* | Name of the triggered metric.
`callback` | *string or function* | *(Optional)* Function to be executed after the clickTrack is registered.

If an element is passed as the first argument, *tntLib* automatically fills `t1234.clickedElement` with its *jQuery object* whenever a click is triggered, allowing the usage of the parameter inside the callbacks.

```javascript
t1234.clickTrack('1234_test');
```

```javascript
t1234.clickTrack('li.tileStack', '1234_test2');
```

```javascript
t1234.clickTrack('1234_test3', 't1234.callback');
```

```javascript
t1234.clickTrack('1234_test4', t1234.callback);
```

```javascript
t1234.clickTrack('1234_test5', function () {
    console.info('dynamic callback');
});
```

```javascript
t1234.clickTrack('li.tileStack', '1234_test6', function () {
    console.info(t1234.clickedElement); // returns the clicked $('li.tileStack') object
});
```

---

## addRef

Adds a ref value to an url. There are multiple ways to do that (see below).

Parameter | Type | Description
--- | --- | ---
`element` | *string* | Selector for elements to be changed *or* base URL that will receive the ref value.
`prop` | *string* | *(Optional)* Property of said elements which contain the desired URL.<br />*Default:* `href`
`ref` | *string* | Name of the metric to be added.

Returns the **resulting URL** as a *string*.

```javascript
t1234.addRef('http://www.dell.com/de/p/xps-laptops?ref=CONS-XPS-LT-tile&s=dhs', '1234_ref1');
```

```javascript
t1234.addRef('.mhLogo', '1234_ref2');
```

```javascript
t1234.addRef('.catTitle img', 'src', '1234_ref3');
```

---

## directInject

Triggers a direct inject with a specified value.<br />**IMPORTANT:** Only once per page.

Parameter | Type | Description
--- | --- | ---
`val` | *string* | Value of the metric to be triggered.

```javascript
t1234.directInject('1234_di');
```