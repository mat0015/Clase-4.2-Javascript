let total =0  
let costo = 0

ingresa();
iva();
salida();


function ingresa(){
    costo = prompt("Ingrese el costo del producto para calcular el total incluido el IVA");
}

function iva() {
    total=(costo *1.21);
}

function salida() {
    alert (`El precio total de su producto con IVA es de ${total}`);

}