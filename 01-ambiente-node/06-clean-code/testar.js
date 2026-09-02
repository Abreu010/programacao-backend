const LivroFisico = require("./LivroFisico");

const livro1 = new LivroFisico("Clean Code", "Robert C. Martin", 89.90, 12, 0.6);

livro1.descrever();
console.log("Frete: R$ " + livro1.calcularFrete().toFixed(2));

// const LivroDigital = require("./LivroDigital");

// const livro2 = new LivroDigital("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, 8);
// livro2.descrever();
// console.log("Frete: R$ " + livro2.calcularFrete().toFixed(2));

console.log("");
console.log("----- polimorfismo -----");
console.log("Frete do fisico: R$ " + livro1.calcularFrete().toFixed(2));
// console.log("Frete do digital: R$ " + livro2.calcularFrete().toFixed(2));