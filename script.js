/*CALCULAR VALOR DE CADA CUOTA*/

function suma (numero1, numero2) {
    return (numero1 / numero2)
}

let numero1 = parseFloat (prompt ("Ingrese precio del producto"))
let numero2 = parseFloat (prompt (" Ingrese cantidad de cuotas: 3/6/12"))

alert ("El valor de cada cuota es de $: " + suma(numero1, numero2))
