/**
 * Created by Ricardo on 14/06/2015.
 * :D
 */
$(document).foundation();

function guardar() {
    localStorage.clear();
    localStorage.seleccion = document.getElementById("seleccion").value;
}

function leer() {
    document.getElementById("accesstext").innerHTML = "Accceso a: " + localStorage.seleccion;
}

window.onload = function () {
    if (document.getElementById("accesstext") !== null) {
        leer()
    }
};