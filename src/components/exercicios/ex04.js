const redes = ["github","linkedin","instgram"];

const http = redes.map(rede =>{
    return `http://www.${rede}.com`;
})
console.log(http);