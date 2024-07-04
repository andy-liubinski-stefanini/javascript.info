// https://javascript.info/task/second-bind

// Can we change this by additional binding?

// What will be the output?

function f() {
  alert(this.name)
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' })

f()

// SUCH BINDING DOES NOT WORK. BIND WORKS ONLY ONCE AT CREATION TIME AND CANNOT BE CALLED AFTER
