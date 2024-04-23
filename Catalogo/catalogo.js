const juegoscontainer = document.querySelector(".juegos-container")
const juegoscontainera = document.querySelector(".juegos-container-a")
const juegoscontainerav = document.querySelector(".juegos-container-av")



const juegoshorror = [
    {
        link: "/img/RESIDENT4.jpeg",
        name: "RESIDENT EVIL 4 REMAKE",
        synop: "Este juego, lanzado originalmente en 2005, sigue la historia del agente especial Leon S. Kennedy mientras investiga el secuestro de la hija del presidente en una aldea rural de Europa. Con una jugabilidad intensa, una atmósfera inquietante y una historia absorbente, Resident Evil 4 Remake ofrece una experiencia de juego emocionante."
    },
    {
        link: "/img/LEFT 4 DEAD 2.jpg",
        name: "LEFT 4 DEAD 2",
        synop: "La trama se centra en los intentos de los supervivientes por encontrar un lugar seguro mientras son perseguidos por los zombis y enfrentan desafíos en forma de áreas peligrosas, armas limitadas y la necesidad de colaboración para sobrevivir. Cada campaña del juego presenta una serie de niveles que los jugadores deben atravesar."
    },
    {
        link: "/img/OFF.jpg",
        name: "DYING LIGHT 2",
        synop: "La trama de Dying Light 2 se centra en el conflicto entre diferentes facciones que luchan por el control de recursos escasos y el futuro de Villedor. Los jugadores tienen la libertad de elegir cómo interactuar con estas facciones y cómo influir en el curso de los eventos, lo que lleva a múltiples finales y ramificaciones en la historia."
    }
]

const juegopuzzles = [
    {
        link: "/img/ESCAPE.jpg",
        name: "ESCAPE SIMULATOR",
        synop: "Escape Simulator es un juego de simulación que te desafía a escapar de una variedad de entornos y situaciones difíciles. Desde prisiones hasta laboratorios científicos secretos, cada nivel presenta un nuevo conjunto de obstáculos y rompecabezas que debes resolver para liberarte. Utiliza tu ingenio, habilidades de resolución de problemas."
    },
    {
        link: "/img/PORTAL2.jpg",
        name: "PORTAL 2",
        synop: "Portal 2 es un juego de puzzle en primera persona desarrollado por Valve Corporation. La historia continúa desde el primer Portal, donde los jugadores controlan a Chell, quien es desafiada por GLaDOS, la inteligencia artificial malvada de Aperture Science. En Portal 2, Chell despierta en una versión deteriorada de las instalaciones de Aperture Science."
    },
    {
        link: "/img/LITTLE.jpg",
        name: "LITTLE NIGHTMARES",
        synop: "El juego se destaca por su atmósfera inquietante, diseño de niveles meticuloso y una narrativa visual que se desarrolla a través de escenas evocadoras y detalles ambientales. Con una jugabilidad centrada en la exploración y el sigilo, Little Nightmares ofrece una experiencia inmersiva que te mantendrá al borde de tu asiento."
    }
]

const juegosaventuras = [
    {
        link: "/img/HORIZON.jpg",
        name: "HORIZON ZERO DAWN",
        synop: "Horizon Zero Dawn es un juego de acción y aventuras desarrollado por Guerrilla Games. La historia se desarrolla en un mundo post-apocalíptico donde la humanidad ha retrocedido a una sociedad tribal primitiva, mientras máquinas animales gigantes dominan la Tierra. Controlas a Aloy, una joven cazadora exiliada de su tribu desde su nacimiento."
    },
    {
        link: "/img/HALF-LIFE-ALYX.jpg",
        name: "HALF LIFE ALYX",
        synop: "Es un videojuego perteneciente al género de disparos en primera persona en realidad virtual desarrollado y publicado por Valve Corporation. Es el primer videojuego de la serie Half-Life desde el lanzamiento de Half-Life 2: Episode Two en 2007, y tiene lugar entre los eventos de Half-Life y Half-Life 2."
    },
    {
        link: "/img/god_of_war_ragnarok.jpeg",
        name: "GOD OF WAR RAGNAROK",
        synop: "God of War: Ragnarök es la secuela del aclamado juego de acción y aventuras God of War lanzado en 2018. En esta nueva entrega, los jugadores continuarán la historia de Kratos, el dios de la guerra, y su hijo Atreus mientras se embarcan en una épica búsqueda por los reinos nórdicos para detener el apocalipsis conocido como Ragnarök."
    }    
]


let juegos = ""
let juegosa = ""
let juegosav = ""

for(const juego of juegoshorror){
    juegos += `<div class="juego">
    <h3>${juego.name}</h3>
    <div class="container-img">
        <img src="${juego.link}" class="imgoff" alt="${juego.name}">
    </div>
    <div class="container-p">
        <p>${juego.synop}</p>
    </div>
    <button class="btn btn-warning">Comprar</button>
</div>`
}

for(const juego of juegopuzzles){
    juegosa += `<div class="juego">
    <h3>${juego.name}</h3>
    <div class="container-img">
        <img src="${juego.link}" class="imgoff" alt="${juego.name}">
    </div>
    <div class="container-p">
        <p>${juego.synop}</p>
    </div>
    <button class="btn btn-warning">Comprar</button>
</div>`
}

for(const juego of juegosaventuras){
    juegosav += `<div class="juego">
    <h3>${juego.name}</h3>
    <div class="container-img">
        <img src="${juego.link}" class="imgoff" alt="${juego.name}">
    </div>
    <div class="container-p">
        <p>${juego.synop}</p>
    </div>
    <button class="btn btn-warning">Comprar</button>
</div>`
}



juegoscontainer.innerHTML = juegos
juegoscontainera.innerHTML = juegosa
juegoscontainerav.innerHTML = juegosav

/* CARRITO */

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones de compra dentro de los juegos de terror
    var botonesCompraTerror = document.querySelectorAll(".juegos-container button");

    // Obtener todos los botones de compra dentro de los juegos de puzzles
    var botonesCompraPuzzles = document.querySelectorAll(".juegos-container-a button");

    // Obtener todos los botones de compra dentro de los juegos de aventura
    var botonesCompraAventura = document.querySelectorAll(".juegos-container-av button");

    // Agregar evento de clic a cada botón de compra de juegos de terror
    botonesCompraTerror.forEach(function(button) {
        button.addEventListener("click", function() {
            agregarJuegoAlCarrito(this);
        });
    });

    // Agregar evento de clic a cada botón de compra de juegos de puzzles
    botonesCompraPuzzles.forEach(function(button) {
        button.addEventListener("click", function() {
            agregarJuegoAlCarrito(this);
        });
    });

    // Agregar evento de clic a cada botón de compra de juegos de aventura
    botonesCompraAventura.forEach(function(button) {
        button.addEventListener("click", function() {
            agregarJuegoAlCarrito(this);
        });
    });

    // Función para agregar un juego al carrito
    function agregarJuegoAlCarrito(button) {
        var juego = button.parentNode;
        var nombreJuego = juego.querySelector("h3").textContent;
        var precioJuego = 50; // Precio simulado del juego

        // Crear elemento de lista para el carrito
        var li = document.createElement("li");
        li.textContent = nombreJuego + " - $" + precioJuego;

        // Agregar elemento de lista al carrito
        document.getElementById("carrito-lista").appendChild(li);

        // Calcular y actualizar el total del carrito
        calcularTotalCarrito();
    }

    // Función para calcular el total del carrito
    function calcularTotalCarrito() {
        var total = 0;
        var elementosCarrito = document.getElementById("carrito-lista").querySelectorAll("li");
        elementosCarrito.forEach(function(elemento) {
            var precio = parseInt(elemento.textContent.split(" - $")[1]);
            total += precio;
        });
        document.getElementById("total-carrito").textContent = "Total: $" + total;
    }

    // Vaciar el carrito al hacer clic en el botón "Vaciar Carrito"
    document.getElementById("vaciar-carrito").addEventListener("click", function() {
        document.getElementById("carrito-lista").innerHTML = "";
        document.getElementById("total-carrito").textContent = "Total: $0";
    });
});
