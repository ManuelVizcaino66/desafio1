const item1 = {
    id: "item1",
    nombre: "Centro de Mesa",
    precio: 600
}

const item2 = {
    id: "item2",
    nombre: "Individuales",
    precio: 380
}

const item3 = {
    id: "item3",
    nombre: "Sale Item",
    precio: 550
}

const item4 = {
    id: "item4",
    nombre: "Cubiertos X6",
    precio: 800
}


let seguir;
let total = 0;
let carrito ;


function aplicarDescuento(descuento) {
    if (descuento > 2000) {
        descuento = descuento * 0.9;
    }
    return descuento;
}


do {
    const productoSeleccionado = prompt(`
    Seleccione el numero del producto que desea
    1. ${item1.nombre} $ ${item1.precio}
    2. ${item2.nombre} $ ${item2.precio}
    3. ${item3.nombre} $ ${item3.precio}
    4. ${item4.nombre} $ ${item4.precio}
    `);

    switch (productoSeleccionado) {
        case "1":
            // alert(`el producto ${item1.nombre} fue agregado al carrito`);
            total += item1.precio;
            carrito += item1.nombre;
            break;
        case "2":
            // alert(`el producto ${item2.nombre} fue agregado al carrito`);
            total += item2.precio;
            carrito += item2.nombre;
            break;
        case "3":
            alert(`No hay stock, intenta con otro`);
            break;
        case "4":
            // alert(`el producto ${item4.nombre} fue agregado al carrito`);
            total += item4.precio;
            carrito += item4.nombre ;
            break;
        default:
            alert("Ingresa alguno de los productos disponibles");
            break;
    }
    seguir = prompt("Si finalizaste tu compra ingresa `SI` ");

} while (seguir!== "SI")

alert("agregaste todos estos productos" + carrito)

let conDescuento = aplicarDescuento(total)

alert("El total de tu compra es de $" + total + ", y con descuento te queda en: $" + conDescuento);


