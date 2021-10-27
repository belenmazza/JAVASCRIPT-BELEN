let opcion = prompt("Ingrese si desea Rogel o Brownie")
let cantidad = parseInt(prompt("Ingrese cuantos quiere"));

let rogelDisponible = 1;
let brownieDisponible = 1;


if (opcion.toUpperCase() === "ROGEL") {
    verificarStock(cantidad, rogelDisponible)
} else if(opcion.toUpperCase() === "BROWNIE") {
    verificarStock(cantidad, brownieDisponible)
} else {
    alert("El numero ingresado es invalido")
}

function verificarStock (postreIngresado, stockDisponible) {
    if(postreIngresado === stockDisponible){
        solicitarDatos()
    } else {
        alert("Se agotó el stock del postre. Puede elegir otro o encargarlo")
    }
}

function solicitarDatos (){
    let nombre = prompt("Ingrese su nombre")
    let entrega = prompt("Ingrese modalidad de entrega")
    let tamaño = prompt ("Ingrese el tamaño del postre: grande o chico")

    while(nombre === "" || nombre === null || tamaño === "" || tamaño === null|| entrega === "" || entrega === null) {
        alert("Los valores ingresados son incorrectos, intente nuevamente")
        nombre = prompt("Ingrese su nombre")
        tamaño = prompt("Ingrese el tamaño del postre: grande o chico")
        entrega = prompt("Ingrese modalidad de entrega")

    }
    
    devolverReserva(nombre, tamaño, entrega)

}

function devolverReserva(nombreReserva, tamañoReserva){
    let numeroReserva = 2;
    alert("Gracias, "+ nombreReserva + "! Se reservó un postre " + tamañoReserva + ". Su número de reserva es el numero " + numeroReserva)

}