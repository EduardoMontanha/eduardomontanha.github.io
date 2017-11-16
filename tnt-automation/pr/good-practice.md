# Code Good Practices
Here you can find the best practices for our automation tests.

## Indent
Use 4 spaces for indentation

```javascript
function hello (name) {
    console.log("Hi", name);
}
```

## Quotes
Use double quotes for Strings
```javascript
console.log("Hello");
document.querySelector("div[id='example']");
```

## Keyword Spacing
Add a space after keywords
```javascript
if (condition) {} //Ok
if(condition) {}  //Avoid
```

## Space Before-After Function Parentheses
Add a space before and after a function declaration's parentheses.
```javascript
function name (arg) { ... } //Ok
function name(arg) { ... }  //Avoid

run(function () { ... }) //Ok
run(function (){ ... })  //Avoid
```

## Space Infix Operators
Infix operators must be spaced.
```javascript
//Ok
var name = "McLovin";
var message = "hello, " + name + "!";

//Avoid
var name="McLovin";
var message = "hello, "+name+"!";
```

## Comma Spacing
Commas should have a space after them.
```javascript
//Ok
var list = [1, 2, 3, 4]
function greet (name, options) { ... }

//Avoid
var list = [1,2,3,4]
function greet (name,options) { ... }
```

## Brace Style
Keep else statements on the same line as their curly braces.
```javascript
//Ok
if (condition) {
    // ... 
} else {
    // ... 
}

//Avoid
if (condition) {
    // ... 
}
else {
    // ... 
}
```

## No Multiple Empty Lines
Multiple blank lines not allowed.
```javascript
//Ok
var value = "hello world";
console.log(value);

//Ok
var value = "hello world";

console.log(value);

//Avoid
var value = "hello world";


console.log(value);
```

## Operator Linebreak
For the ternary operator in a multi-line setting, place ? and : on their own lines.
```javascript
//Ok
var location = env.development ? "localhost" : "www.api.com";

//Ok
var location = env.development
    ? "localhost"
    : "www.api.com";

//Avoid
var location = env.development ?
  "localhost" :
  "www.api.com";
```

## Block Spacing
Add spaces inside single line blocks.
```javascript
function foo () {return true}    // Avoid
function foo () { return true }  // Ok
```

## Camelcase
Use camelcase when naming variables and functions.
```javascript
function my_function () { } //Avoid
function myFunction () { }  //Ok

var my_var = "hello"; //Avoid
var myVar = "hello";  //Ok
```