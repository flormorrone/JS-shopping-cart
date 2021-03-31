//Funcion que quita elemento del carrito
function quitarItem(event) {
    let btnClicked = event.target.parentElement.parentElement.parentElement.remove();

    actualizarTotal();
}

//Funcion que actualiza el total a pagar
function actualizarTotal() {
    const cartItemContainer = document.getElementsByClassName("cart-item-container")[0];
    const cartRows = cartItemContainer.getElementsByClassName("cart-row");
    const totalInput = document.getElementsByClassName("cart-total-precio")[0];
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const precioElem = cartRow.getElementsByClassName("cart-precio")[0];
        const cantidadElem = cartRow.getElementsByClassName("cart-cantidad-input")[0];
        let precio = parseFloat(precioElem.innerText.replace("$", ""));

        let cantidad = parseFloat(cantidadElem.value);
        total = total + (precio * cantidad);
        precio = 0;
        cantidad = 0;
    }
    total = Math.round(total * 100) / 100;
    totalInput.innerText = "$ " + total;
}

//Funcion que maneja la cantidad de un item en el carrito
function cantidadChange(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    actualizarTotal();
}

//Funcion que se ejecuta al hacer click sobre el boton "agregar al carrito"
function clickAgregar(event) {
    const addbtn = event.target;
    const shopItem = addbtn.parentElement;
    const titulo = shopItem.getElementsByClassName("shop-cafe-item")[0].innerText;
    const precio = shopItem.getElementsByClassName("shop-item-precio")[0].innerText;
    const imgSrc = shopItem.getElementsByClassName("img")[0].src;
    agregarItemAlCarrito(titulo, precio, imgSrc);
    actualizarTotal();
}

//Funcion que agrega item al carrito
function agregarItemAlCarrito(titulo, precio, img) {
    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    const cartItems = document.getElementsByClassName("cart-item-container")[0];
    const cartRowTitulos = cartItems.getElementsByClassName("cart-titulo");
    for (let i = 0; i < cartRowTitulos.length; i++) {
        if (cartRowTitulos[i].innerText == titulo) {
            alert("item ya existe en el carrito");
            return;
        }
    }
    const cartRowContent = `
    <div class="cart-row-descripcion">
        <img class="img" src="${img}" alt="${titulo}" width="80px" height="80px">
        <span class ="cart-titulo">${titulo}</span>      
        <span class="cart-precio">${precio}</span>
        <div class="cart-cantidad">
            <input class="cart-cantidad-input" type="number" value="1">
            <button class="btn btn-danger">Quitar</button>
        </div>
    </div>  `;
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", quitarItem);
    cartRow.getElementsByClassName("cart-cantidad-input")[0].addEventListener("change", cantidadChange);
}
// funcion que se ejecuta al hacer click en "comprar" y borra todos los datos de la compra
function clickComprar() {
    alert("Gracias por su compra");
    const cartContainer = document.getElementsByClassName("cart-item-container")[0];
    while (cartContainer.hasChildNodes()) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
    actualizarTotal();
}
export const funcion = {
    quitarItem,
    actualizarTotal,
    cantidadChange,
    clickAgregar,
    agregarItemAlCarrito,
    clickComprar
};