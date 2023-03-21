const boton = document.getElementById("darkmode");
const columnaDerecha = document.getElementById("columna-derecha");

boton.addEventListener("click", () => {
    if (boton.checked) {
        columnaDerecha.classList.add("oscuro");
    } else {
        columnaDerecha.classList.remove("oscuro");
    }
});

