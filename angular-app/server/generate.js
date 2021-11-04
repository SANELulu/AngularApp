var faker = require("faker");

var database = { products: [] };

for (var i = 1; i <= 10; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://via.placeholder.com/50x50",
    quantity: faker.datatype.number(),
  });
}

console.log(JSON.stringify(database));
