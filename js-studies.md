### IIFE
Imediately Invoked Function Expression
```javascript
(function(name){
  console.log("hello " + name);
})("Arthur")
```

### Closure
Inner function that has access to the scope of an enclosing function
```javascript
function outterFunc(param1){
  function innerFunc(param2){
    console.log(param1 + param2);
  }
  innerFunc("World");
}
outterFunc("Hello ");
```

### This
Keyword that refers to the object it is derectly inside.
```javascript
var obj = {
  name: "Arthur",
  lastName: "Vargas",
  getName: function(){
    console.log(this.name + " " + this.lastName);
  }
}

obj.getName();
```

### Hoisting
The process in which the JS interpreter finds variables and function declarations and pulls it to the top of the scope it is declared.
It hoists the declaration but do not assign value to it.

```javascript
// function expression
// declaration is hoisted but not definition
// defined at run-time
var foo = function() { }

// function statement
// declaration and definition are hoisted
// defined at parse-time
function foo() { }
```
let, const = block scoped (hoisted to top of the block, for loop for example)

var = function scoped (hoisted to top of function)

### Self
Maintain `this` scope reference
```javascript
var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color); // "Blue"
        console.log("In logColor - self.color: " + self.color); // "Blue"
        (function() {
            console.log("In IIFE - this.color: " + this.color); // undefined
            console.log("In IIFE - self.color: " + self.color); // "Blue"
        })();
    }
};

myCar.logColor();
```

### use strict
Enforce stricter parsing and error handler:

* prevent use of global variables;
* prevent duplicate variable names in function parameters;

### call and apply
* Is a method of any function in js;
* Change the context of `this` in a function call;
* call(context, arg1, arg2) | apply(context, [arg1, arg2])

### bind()
Bind `this` context of a function to a particular object.

You can also bind parameteres to always be passed the same way.

`func.bind(obj)`