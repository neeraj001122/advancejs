var student = {name:'sidharth',
age : 19};

function get(a,b)
{
    return `Name is ${this.name+a} and age is ${this.age}`
}

console.log(get.call(student,' kumar'))

var student = {name:'sidharth',
age : 19};

var arr = [1,6,9];

function get(a)
{
    return `He is ${this.name} and age is ${this.age} and number is ${a}`
}

console.log(get.call(student,arr))

var student = {name:'sidharth',
age : 19};

var arr = [1,5,69]

function get(a)
{
    return `Name is ${this.name+a} and age is ${this.age}`
}

var bound = get.bind(student)

console.log(bound(arr))

function multiply(x,y)
{
     console.log(x*y)
}

var multiplybytwo = multiply.bind(this, 2);
multiplybytwo(3)

function multiply(x)
{
   return function mul(y)
   {
    console.log(x*y)
   }
}

var multiplybytwo = multiply(2)
multiplybytwo(2)
// okay lemmi try yes
