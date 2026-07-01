const precosString = ["R$10.00","R$25.50","R$75.90"];

const textoLimpo =precosString.map(preco =>{
    const valor = preco.replace("R$","");
    return parseFloat(valor);
})
console.log(textoLimpo)

