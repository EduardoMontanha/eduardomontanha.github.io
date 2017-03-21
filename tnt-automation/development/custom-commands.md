# Custom Commands
When we don't find a native command for what we need, or when we don't
want to repeat the same sequel of commands many times we can create a
*custom command*, that could do what we want and/or a sequel of
commands.<br>
<br>
Both *behavior* and *util* commands are the same in structure. What
changes is in where and how we will use them.

```javascript
exports.command = function () {
    'use strict';
    //do stuff
    
    return this;
};
```

!> Commands always return something.

!> Different from *tests* files, these custom commands files will not
have the `.end()` command at the end. We will only end a test in its
own file.

---

## Behavior
*Behavior* commands in the most part are the most complex, because they
will test an entire feature or page behavior.

!> *Behaviors* must be independents! In other words, they doesn't have
to take parameters to do something.

---

## Util
*Util* commands are here to facilitate our work. And they're usually
less complex than a *behavior* command.

Let's take a look at `hasText()`:

```javascript
/* hasText.js */

exports.command = function (element) {
    'use strict';
    return this
        .waitForElementPresent(element)
        .expect.element(element).text.to.match(/\w+/g);
};
```

!> As you may know, we call all the commands and assertions from
`browser` reference. And `this` will be a reference for `browser`, so
it will act the same way.<br>
If you want, you can store `this` inside a variable to make it easier
to understand.

So, `hasText()` is receiving an element path from *element* parametter,
and is checking if the element contains words/characters.<br>
We are using the native commands of *Nightwatch.js* for this, but you
can use your owns.

This is the essential for you to start doing your own *custom*
commands. There is no secrets, but of course, there is a lot more that
you can explore about.

---

For further information about how create commands
[click here](http://nightwatchjs.org/guide#writing-custom-commands).