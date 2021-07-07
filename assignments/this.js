/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Objec: When in global scope, the .this will be in the window console 

    * 2. Implicit Bindings: the object before that dot is .this keyword for the Implicit Binding.  

    * 3. New bindings: whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
    or in other words:   A constructor function is a function that returns an object. 

    * 4. Explicit Bindings: Whenever JavaScript’s call or apply method is used, this is explicitly defined.

*
* write out a code example of each explanation above
*/

// Principle 1:  

// code example for Window Binding:  (for
    //example, when using Codepen has its own this keyword built in. console.log(.this)

// Principle 2

// code example for Implicit Binding: (ex. myObj.sayHello('Ryan'); this refers to myObj) 

// Principle 3

// code example for New Binding: for example: CordialPerson will be a function that creates an object for us. When we call it we have to use the new keyword.

// Principle 4

// code example for Explicit Binding: new context using .call and .apply jerry.speak.call(newman); newman.speak.apply(jerry);

