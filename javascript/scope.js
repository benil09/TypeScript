let nums = [1,2,3,4,5]

// nums.forEach((n)=>{
//    const a=  setTimeout(()=>{
//         console.log(n)
//     },1000)
// })

// for(var i =0 ; i<=nums.length;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

//console.log()


console.log("A")
setTimeout(()=>{console.log("B")},0)
console.log("C")
console.log("D")
setTimeout(()=>{console.log("E")},0)
console.log("F")