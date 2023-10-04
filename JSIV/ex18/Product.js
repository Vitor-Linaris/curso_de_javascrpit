class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantidade) {
    const stock = (this.inStock += quantidade);
    return stock;
  }

  calcDiscount(porcentagem) {
    const desconto = this.price * (porcentagem / 100);
    this.price = this.price - desconto;
  }
}

const camisa = new Product("camisa basica", "camisa normal", 250);
const jeans = new Product("jeans basica", "jeans normal", 500);

camisa.addToStock(80);
camisa.calcDiscount(50);

console.log(camisa);
/* console.log(jeans); */
