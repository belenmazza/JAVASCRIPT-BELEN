class Postre1 {
    constructor (pedido){
        this.nombre = pedido.nombre
        this.tamanio = pedido.tamanio
        this.chocolate = pedido.chocolate
        this.dulcedeleche = pedido.dulcedeleche
    }
    entregarPostre () {
        if(this.chocolate != "" && this.dulcedeleche != ""){
            console.log ("Felicitaciones" + " "+ this.nombre + " " + "¡Aquí tiene su postre" + " " + this.tamanio + " " + "con extra" + " " + this.chocolate + 
            " " +"y extra" + " " + this.dulcedeleche + "!")
        }else if (this.chocolate != "" && this.dulcedeleche == "") {
            console.log ("Felicitaciones" + " "+ this.nombre + " " + "¡Aquí tiene su postre" + " " + this.tamanio + " " + "con extra" + " " + this.chocolate + 
            " " + "!")
        }else {
            console.log ("Felicitaciones"+ " " + this.nombre + " " + "Aquí tiene su" + " " + this.postre + " " + this.tamanio)
        }
    }
}

let postre = new Postre1 ({nombre: "belen", tamanio:"grande", chocolate:"chocolate", dulcedeleche:"dulce de leche"})
postre.entregarPostre()