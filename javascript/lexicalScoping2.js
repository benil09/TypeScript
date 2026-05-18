//only let,var,const and function declaration are considered as formal declaration 
var teacher = "Nilkamal";
function fun(){
    var teacher = "sanket"; 
    teachingAss = "Anand";
    console.log(teachingAss); // concept of auto-globals works
    console.log(teacher);
}

fun();
console.log(teacher);
console.log(teachingAss);
