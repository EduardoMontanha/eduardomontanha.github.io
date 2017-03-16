## waitForElement

Waits for an element to be available on the page and then runs a callback function.

Parameter | Type | Description
--- | --- | ---
`element` | *string* | Element selector being waited for
`callback` | *function* | Code to be executed when the element is available

```javascript
t1234.waitForElement('#sideBar', function () {
	//logic
});
```

---

## stopWaitingFor

Disable the timeout loop and stops the code from waiting for the specified selector.

Parameter | Type | Description
--- | --- | ---
`selector` | *string* | Selector that will match the element that will not being sought anymore.

```javascript
t1234.stopWaitingFor('#sideBar');
```

---

## waitForCondition

Waits for a condition to be met and then runs a callback function.

Parameter | Type | Description
--- | --- | ---
`condition` | *string* | Condition being waited to be met
`callback` | *function* | Code to be executed when the condition is met

```javascript
t1234.waitForCondition('flag=true', function () {
	//logic
});
```

---

## setTimeout

Vanilla *setTimeout*, wrapped in a try catch block.

Parameter | Type | Description
--- | --- | ---
`fn` | *function* | Callback function to be executed on the determined timeout
`timer` | *integer* | Time in millisseconds to wait before triggering the callback
`msg` | *string* | *(Optional)* Custom error message, in case of function failure

```javascript
t1234.setTimeout(function () {
    // logic
}, 200);
```

```javascript
t1234.setTimeout(function () {
    // logic
}, 1000, 'Logic execution error!');
```

---

## ready

*$(document).ready*, wrapped in a try catch block.

Parameter | Type | Description
--- | --- | ---
`fn` | *function* | Callback function to be executed

```javascript
t1234.ready(function () {
    //logic
});
```