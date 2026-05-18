 class Product{

    //constructor function
    constructor(n,p){
        // * constructor function to create a new real life instances called objects
        // *  when we create an object this constructor is the first function that gets called 
        this.name = n
        this.price = p
    }



    //member function 
    displayProduct(){
        console.log(this.name,this.price)
    }
    buyProduct(){

    }
 }

//class-based object
 let iphone = new Product ("iphone 15",150000);
 let macbook = new Product("macbook m1",84000);

iphone.displayProduct()
 //object literal
 let obj = {
    name :"macbook m1",
    price:84000
 }

 console.log(iphone)
 console.log(macbook)
 console.log(obj)