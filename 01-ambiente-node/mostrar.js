const estante = require("./estante");

console.log("===================================");
console.log(" MINHA ESTANTE");
console.log("===================================");
console.log("");

// ===== LIVRO 1 — já está pronto, use como modelo =====
console.log("Titulo: " + estante.livro1.titulo);
console.log("Autor: " + estante.livro1.autor);
console.log("Preco: R$ " + estante.livro1.preco);
console.log("Estoque: " + estante.livro1.estoque + " unidades");
console.log("");

// ===== LIVRO 2 — complete as 3 lacunas =====
console.log("Titulo: " + estante.livro2.titulo);

// LACUNA 1 → troque _____ pelo nome do objeto do segundo livro (livro2)
console.log("Autor: " + estante.livro2.autor);

// LACUNA 2 → troque _____ pelo nome da propriedade do preço (preco)
console.log("Preco: R$ " + estante.livro2.preco);

// LACUNA 3 → copie aqui a linha do "Estoque:" do Livro 1 e troque livro1 por livro2
console.log("Estoque: " + estante.livro2.estoque + " unidades");

console.log("");
console.log("===================================");