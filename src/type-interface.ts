interface User{
    name:string,
    age:number,
    roll:number,
    subjects:string[],
   readonly email?:string
}

let student:User ={
    name:"Nilkamal",
    roll:22,
    age:27,
    subjects:["SDP","M&I"],
    email:"abcd@gmail.com"
}

student.name = "Ramesh"
//student.email = "asxy@gmail" // cannot modify the value of readonly field