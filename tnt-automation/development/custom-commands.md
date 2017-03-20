# Custom Commands
When we don't find a native command for what we need, or when we don't
want to repeat the same sequel of commands many times in the same code
we can create a *custom command*, that could do what we want and/or
a sequel of commands.<br>
<br>
Both *behavior* and *util* commands use the same basic structure:

```javascript
exports.command = function () {
    'use strict';
    //do stuff
};
```

!> Commands always return something.

---

## Behavior
*Behavior* commands in the most part are the most complex, because they
will test an entire feature or page behavior.

!> *Behaviors* must be independents! In other words, they doesn't have
to take parameters to do something.

---

## Util
*Util* commands are here to facilitate our work. And they're usually
easier to develop.
