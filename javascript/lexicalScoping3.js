var teacher = "Nilkamal";
function fun(){
    console.log(subject);
    var teacher = "sanket"; 
    teachingAss = "Anand";
    var subject ="javascript";
    console.log(teachingAss); // concept of auto-globals works
    console.log(teacher);
}

fun();
console.log(teacher);
console.log(teachingAss);
