
class Student
{
    static i = 0
    constructor(name,age,phone,marks)
    {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.i=Student.i+1
    }
    elegibilty()
    {
        if(this.marks>40)
        {
            console.log(`${this.name} is elegible`)
        }
        else
        {
           console.log(`${this.name} is not elegible`)
        }
    }
    elegibilty2()
    {
        if(this.marks>40)
        {
           return (age) =>{
            if(this.age<21)
            {
                return false;
            }
            else 
            {
                return true;
            }
           }
        }
        else
        {
            return () => {
                return false;
            }
        }
    }
}
var student1 = new Student('Abhishek',21,96565632,65);
var student2 = new Student('Raj',19,96565632,39);
var student3 = new Student('Amit',22,96565632,45);
var student4 = new Student('Rocky',20,96565632,25);
var student5 = new Student('Bhanu',18,96565632,80);
console.log(Student.i)
console.log(student1.elegibilty2()())
console.log(student2.elegibilty2()())
console.log(student3.elegibilty2()())
console.log(student4.elegibilty2()())
console.log(student5.elegibilty2()())




