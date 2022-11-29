const carrito = [];
fruta = prompt("¿Gustas agregar alguna fruta a tu carrito?");
carrito.push(fruta);

while(confirm("¿Quieres agregar alguna otra fruta?")){
    fruta = prompt("¿Que fruta quieres agregar?");
    carrito.push(fruta);
}

for(let i of carrito){
    console.log(i);
}