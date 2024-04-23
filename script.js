document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones de compra dentro de los juegos
    var botonesCompra = document.querySelectorAll(".juegos-container button");

    // Obtener el contenedor de los juegos
    var juegosContainer = document.querySelector(".juegos-container");

    // Obtener la lista del carrito
    var carritoLista = document.getElementById("carrito-lista");

    // Obtener el total del carrito
    var totalCarrito = document.getElementById("total-carrito");

    // Agregar evento de clic a cada botón de compra
    botonesCompra.forEach(function(button) {
        button.addEventListener("click", function() {
            var juego = this.parentNode;
            var nombreJuego = juego.querySelector("h3").textContent;
            var precioJuego = 50; // Precio simulado del juego

            // Crear elemento de lista para el carrito
            var li = document.createElement("li");
            li.textContent = nombreJuego + " - $" + precioJuego;

            // Agregar elemento de lista al carrito
            carritoLista.appendChild(li);

            // Calcular y actualizar el total del carrito
            calcularTotalCarrito();
        });
    });

    // Función para calcular el total del carrito
    function calcularTotalCarrito() {
        var total = 0;
        var elementosCarrito = carritoLista.querySelectorAll("li");
        elementosCarrito.forEach(function(elemento) {
            var precio = parseInt(elemento.textContent.split(" - $")[1]);
            total += precio;
        });
        totalCarrito.textContent = "Total: $" + total;
    }

    // Vaciar el carrito al hacer clic en el botón "Vaciar Carrito"
    document.getElementById("vaciar-carrito").addEventListener("click", function() {
        carritoLista.innerHTML = "";
        totalCarrito.textContent = "Total: $0";
    });
});
