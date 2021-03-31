import { funcion } from "./funciones.js"

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//Funcion que se ejecuta al cargar la pagina
function ready() {

    //maneja el evento click de quitar item en el carrito
    const quitarItemBtn = document.getElementsByClassName("btn-danger");
    for (let i = 0; i < quitarItemBtn.length; i++) {
        let btn = quitarItemBtn[i];
        btn.addEventListener('click', funcion.quitarItem);
    }

    //maneja el evento de cambio de cantidad de UN item en el carrito
    const cantidadInputs = document.getElementsByClassName("cart-cantidad-input");
    for (let i = 0; i < cantidadInputs.length; i++) {
        var input = cantidadInputs[i];
        input.addEventListener("change", funcion.cantidadChange);
    }

    //maneja evento click en agregar item a carrito
    const agregarBtns = document.getElementsByClassName("shop-btn");
    for (let i = 0; i < agregarBtns.length; i++) {
        let btn = agregarBtns[i];
        btn.addEventListener("click", funcion.clickAgregar);
    }

    //maneja el evento de click en boton comprar comprar 
    document.getElementsByClassName("btn-primary-comprar")[0].addEventListener("click", funcion.clickComprar);
}