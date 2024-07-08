//javascript.info/task/new-object-same-constructor

// Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know which one, but we’d like to create a new object using it.

// Can we do it like that?

// let obj2 = new obj.constructor();

// Give an example of a constructor function for obj which lets such code work right. And an example that makes it work wrong.

https: function someObject(name) {
  this.name = name
}

const obj = new someObject('Andrei')

let obj2 = new obj.constructor('Stefanini')

console.log(obj)

console.log(obj2)

// THIS WAY OF DEFINING NEW OBJECTS DEFINITELY WORK. THE ONLY WAY FOR THIS TO BREAK IS TO REASSIGN PROTOTYPE IN SOME WAY. THIS WAY THE ONLY CONSTRUCTOR THAT IS AVAILABLE IS GLOBAL OBJECT CONSTRUCTOR WHICH IS NOT WHAT CAN ASSIGN THIS.NAME
