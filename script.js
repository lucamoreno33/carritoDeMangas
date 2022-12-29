const agregarCarrito = (carro, producto) => carro += producto ;
const calcularIva = (numero) => numero * 1.21 ;

function calcularMangas(){
    let carrito = 0;
    let mangaPrecio
    let manga
    while (manga !== "basta" ){
        manga = prompt("Ingrese que formato de manga quiere comprar: " + "\n" + "chico: $900" + "\n" + "mediano: $1200" + "\n" + "grande: $1800" + "\n" + "escribe basta para salir")
        if (manga === "chico"){
            mangaPrecio = 900
            carrito = agregarCarrito(carrito, mangaPrecio)
        }
        else if(manga === "mediano"){
            mangaPrecio = 1200
            carrito = agregarCarrito(carrito, mangaPrecio)
        }
        else if(manga === "grande"){
            mangaPrecio = 1800
            carrito = agregarCarrito(carrito, mangaPrecio)
        }
    }
    return carrito
}

function carrito(){
    let opcion = 0
    let total = 0
    let totalReal = 0
    let cuotas = 0
    while (opcion !== 5){
        opcion = parseInt(prompt("Hola! Bienvenido al carrito de mangas, ingrese el numero asignado para lo que quiera hacer" + "\n" + "-1 Comprar" + "\n" + "-2 total del carrito + impuestos" + "\n" + "-3 elegir cantidad de cuotas"+ "\n" + "-4 vaciar carrito"+ "\n" + "-5 salir"))
        if (opcion === 1){
            total=calcularMangas()
            totalReal+=total
        }
        else if(opcion === 2){
            alert("el total del carrito es: " + calcularIva(totalReal))
        }
        else if (opcion === 3){
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las que quiere efectuar el pago, 3, 6 o 12: "))
            if (cuotas === 3  || cuotas === 6  || cuotas ===12){
                alert("en " + cuotas + " cuotas serian: " + "$" + (calcularIva(totalReal)/cuotas) + "*mes")
            }
        }
        else if (opcion === 4 ){
            totalReal = 0
            alert("carrito vaciado")
        }
        else if (opcion === 5 ){
            alert("gracias por usar este carrito!")
        }
    }
}

carrito()