document.getElementById("calcular").onclick = function () {
   const resultado = funcionDelAmor();

    document.getElementById("output").innerHTML = "<p>" + resultado + "% compatible!" + " " + evaluarResultado(resultado) + "</p>";
}

function funcionDelAmor(nombre1, nombre2) {
    nombre1 = document.getElementById("tuNombre").value;
    nombre2 = document.getElementById("suNombre").value;
    const resultado = Math.floor(Math.random() * 100 + 1);
    return resultado;
}

//añadimos un chascarrillo dependiendo del resultado aleatorio

function evaluarResultado(resultado) {
    if (resultado >= 0 && resultado <= 15) {
        return "Allí no es, date cuenta";
    } else if (resultado >= 16 && resultado <= 25) {
        return "Directo a la Friend Zone";
    } else if (resultado >= 26 && resultado <= 35) {
        return "Ni para trinchera";
    } else if (resultado >= 36 && resultado <= 45) {
        return "Con cuidado, pero estás avisado(a)";
    } else if (resultado >= 46 && resultado <= 55) {
        return "No nos hacemos cargo de los platos ni corazones rotos.";
    } else if (resultado >= 56 && resultado <= 65) {
        return "Tu casi algo.";
    } else if (resultado >= 66 && resultado <= 75) {
        return "El amor empieza a verse, me dan casi asco.";
    } else if (resultado >= 76 && resultado <= 85) {
        return "Ya en sus ojos se ve el empalagoso amor.";
    } else if (resultado >= 86 && resultado <= 95) {
        return "Allí es, cásense de una buena vez.";
    } else {
        return "A tener hijos como conejos o adoptar muchos gatos.";
    }
}
