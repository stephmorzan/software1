/**
 * Created by Ricardo on 14/06/2015.
 * :D
 */
$(document).foundation();

function guardar() {
    localStorage.clear();
    localStorage.seleccion = document.getElementById("seleccion").value;
    localStorage.nombAcceso = document.getElementById("nombAcceso").value;
}

function leer() {
    document.getElementById("accesstext").innerHTML = "Accceso a: " + localStorage.seleccion;
}
function leer2() {
    document.getElementById("accesstext2").innerHTML = localStorage.seleccion;
    document.getElementById("nombAcceso").innerHTML = localStorage.nombAcceso;
}


window.onload = function () {
    if (document.getElementById("accesstext") !== null) {
        leer()
    }
    if (document.getElementById("accesstext2") !== null) {
        leer2()
    }
};