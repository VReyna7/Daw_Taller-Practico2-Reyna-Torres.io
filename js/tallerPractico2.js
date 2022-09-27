//var extraPrecio = document.getElementById("extra").value;
var combo = document.getElementById("combos").value
var cantidad = parseInt( document.getElementById("cant"))
var factura = document.getElementById("factura")
var total = 0, valor = 0

function combosTotal(){
    if(combo=="super"){
        valor = 7.25;
        total = valor * cantidad
        console.log(combo, valor)
    console.log(cantidad,total)
    }else if(combo == "personal"){
        valor = 5.75;
    }else if(combo == "infantil"){
        valor = 3.50;
    } 
    
    factura.innerHTML = "<h1>Producto:" + combo + "         Precio:"+ valor + "</h1>"
}

