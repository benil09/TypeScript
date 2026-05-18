console.log("Hello")
console.log("Bye")


process.stdout.write("Hello")  
process.stdout.write("Bye")

let name ;
process.stdout.write("Enter your name: ");
process.stdin.on("data", function(data) {
    name = data.toString().trim();
    process.stdout.write("Hello, " + name + "!\n");
    process.exit();
});