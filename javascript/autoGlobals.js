var teacher = "Nilkamal";
function fun(){
    var teacher = "Anand";
    console.log(teacher,teachingAssistant);
    teachingAssistant = "Avinash"; // eligible for becoming auto-globals
}
function gun(){
    console.log(subject);
    var subject = "JS";
    console.log(teacher);
}

console.log(teacher);
fun();
