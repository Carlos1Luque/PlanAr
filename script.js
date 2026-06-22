document.addEventListener("DOMContentLoaded", () => {
    const botonesReservar = document.querySelectorAll(".btn-reservar");
    const mensajeReserva = document.getElementById("mensaje-reserva");

    botonesReservar.forEach(boton => {
        boton.addEventListener("click", () => {
            mensajeReserva.textContent = "¡Reserva realizada correctamente!";
            mensajeReserva.classList.remove("oculto");
            
            // Opcional: Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                mensajeReserva.classList.add("oculto");
            }, 3000);
        });
    });