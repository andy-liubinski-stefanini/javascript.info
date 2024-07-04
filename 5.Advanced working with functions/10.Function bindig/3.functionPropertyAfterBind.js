// https://javascript.info/task/function-property-after-bind

// There’s a value in the property of a function. Will it change after bind? Why, or why not?

function sayHi() {
  console.log(this.name)
}
sayHi.test = 5

let bound = sayHi.bind({
  name: 'John',
})

console.log(bound.test) // what will be the output? why?

// IT WILL BE UNDEFINED AS AFTER BINDING OUR FUNCTION NOW HAS A NEW CONTEXT AND THE OLD CONTEXT IS ERASED
