#include <iostream>
using namespace std;

class Product{
     string name;
     int price;

     // constructor
     public:
     Product(string n , int p){
        this->name = n;
        this->price = p;
     }

};

int main() {
    
    Product iphone("iphone 15 pro", 150000);
    
    return 0;
}