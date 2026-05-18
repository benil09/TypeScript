function fun(){
    teachingAssistant="Avinash";
    console.log(teachingAssistant);
    var teachingAssistant = "Ayush";
    console.log(teachingAssistant)
}
console.log(teachingAssistant); // this will show error because teachingAssistant never became a global variable
fun();