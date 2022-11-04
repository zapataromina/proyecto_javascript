const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let btnBorrar = document.getElementById("borrar");
let btnResumen = document.getElementById("resumen");

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i <x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

function total_a_pagar() {

    quitarClaseError();

    if (nombre.value === ""){
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (correo.value=== "") {
        alert("Por favor, escribí tu correo electrónico.");
        correo.classList.add("is-invalid");
        correo-focus();
        return;
    }

const correoValido = correo => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

if (!correoValido(correo.value)) {
    alert("Por favor, ingrese un correo válido");
    correo.classList.add("is-invalid");
    correo.focus();
    return;
}

if ((cantidad.value == 0) || (isNaN(cantidad.value))) {
    alert("Por favor, ingresá correctamente cantidad de tickets.");
    cantidad.classList.add("is-invalid");
    cantidad.focus();
    return;
}

if (categoria.value == "") {
    alert("Por favor, seleccioná una categoría.");
    categoria.classList.add("is-invalid");
    categoria.focus;
    return;
}

let totalValorTicket = (cantidad.value) * valorTicket;

if (categoria.value == 0) {
    totalValorTicket = totalValorTicket;
}

if (categoria.value == 1) {
    totalValorTicket = totalValorTicket - (descuentoEstudiante / 100 * totalValorTicket);
}
if (categoria.value == 2) {
    totalValorTicket = totalValorTicket - (descuentoTrainee / 100 * totalValorTicket);
}

if (categoria.value == 3) {
    totalValorTicket = totalValorTicket - ( descuentoJunior / 100 * totalValorTicket);
}

totalPago.innerHTML = totalValorTicket;

}

function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "";
    categoria.value = 0;

}
btnResumen.addEventListener('click', total_a_pagar);
btnBorrar.addEventListener('click', reset_total_a_pagar);