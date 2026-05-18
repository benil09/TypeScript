const name:string = "Nilkamal"
const age:number = 23
const isAdmin:boolean = false;

// array
const colors:string[]=["blue","red","green"]
const words:number[]=[4,3,5]
const student:[string,number]=["nilkamal",22]

// enum

enum Roles{
    admin,
    customer,
    owner
}
const user : Roles = Roles.admin 

// any type - avoid as much as possible
let course:any = "ece"
course = 4
course = false
course = ["ece",'cse']


// unknown - safer than any ( suggested to use )
let courses : unknown = 'cse'
courses = 5
courses = false
courses = ['ece','mech','civil']

// message type is string and we need to also define what the function returns by default it return type is void
function helloWorld(name:string):number{
    console.log("Hello",name)
    return 1;
}

const x = helloWorld("nil")
console.log(x)