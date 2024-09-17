//classes = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor functions
//          ex. static keyword, encapsulation, inheritance

class Product {
    constructor(unit, price) {
        this.unit = unit;
        this.price = price;
    }
    displayProduct(){
        console.log(`Your product: ${this.unit}`);
        console.log(`Price: $${this.price}`);
    }
    calculateTotal(tax) {
        return this.price + (this.price * tax)
    }
}

const tax = 0.05;
const product1 = new Product('Shirt', 9.99);
const product2 = new Product('Hat', 12,49);
const product3 = new Product('Stick', 59,99)

product1.displayProduct();
const total1 = product1.calculateTotal(tax);
//console.log(`Your total(include tax): $${total1}`)

product2.displayProduct();
const total2 = product2.calculateTotal(tax);

product3.displayProduct();
const total3 = product3.calculateTotal(tax);
console.log(`Your total(include tax): $${total1 + total2 + total3}`)


