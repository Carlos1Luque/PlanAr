document.addEventListener("DOMContentLoaded", () => {
    const botonesReservar = document.querySelectorAll(".btn-reservar");
    const mensajeReserva = document.getElementById("mensaje-reserva");

    botonesReservar.forEach(boton => {
        boton.addEventListener("click", () => {
            mensajeReserva.textContent = "¡Reserva realizada correctamente!";
            mensajeReserva.classList.remove("oculto");
            
            setTimeout(() => {
                mensajeReserva.classList.add("oculto");
            }, 3000);
        });
    });
    const categorias = ["Conciertos", "Ferias", "Deportes"];
    const btnCategorias = document.getElementById("btn-categorias");
    const listaCategorias = document.getElementById("lista-categorias");

    btnCategorias.addEventListener("click", () => {
        listaCategorias.innerHTML = ""; 

        categorias.forEach(cat => {
            const span = document.createElement("span");
            span.textContent = cat;
            span.classList.add("categoria-item");
            listaCategorias.appendChild(span);
        });
    });
});
