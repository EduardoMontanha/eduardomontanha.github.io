# Page Objects
A *page object* will be a reference to a an web page.<br>
We use this objects to define unique commands or other properties that
will help up develop tests in the specific page.

---

## Creating a new Page Object
The basic structure for a new *page object* is very simple. Till now we
didn't explore the whole potential of this object, we are just using it
to refer *custom commands* to one specific page.

!> We must have in mind that the name of the file will define the name of
the object. For example:<br>
If we create a file named `homepage.js` we will call it later as
`homepage()`.

Below you can see the most basic structure for a *page object*:
```javascript
/* homepage.js */

module.exports = {
    elements: {}
};
```

---

## Adding behavior commands
