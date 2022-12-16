class Equipo{
    constructor(codigo, nombre, marca, fabrica, repuestos){
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.fabrica = fabrica;
        this.repuestos = repuestos;
    }
}

class Repuesto{
    constructor(nombre, fabricante, codigo, esOriginal, originales, copias, alternativos, reemplazos, equipos){
        this.nombre = nombre;
        this.fabricante = fabricante;
        this.codigo = codigo;
        this.esOriginal = esOriginal;
        this.originales = originales;
        this.copias = copias;
        this.alternativos = alternativos;
        this.reemplazos = reemplazos;
        this.equipos = equipos;
    }
}

function imprimir(texto){
    console.log(String(texto));   
}

let formulario = document.getElementById('formulario');

let tipo = document.getElementById("tipoArticulo");

let cantidadCopias = 0;
let cantidadOriginales = 0;
let cantidadAlternativos = 0;
let cantidadReemplazos = 0;
let cantidadEquipos = 0;
let cantidadReps = 0;

let arregloRepuestos = [];
let arregloEquipos = [];

function agregarCopias(){
    let copia = document.createElement("input");
    let copiaLabel = document.createElement("label");
    copiaLabel.innerText = "Introduzca el codigo o el nombre de la copia";
    copia.id = "copia" + cantidadCopias;
    copia.type = "copia";
    copiaLabel.htmlFor = copia.id;
    let familiaCopias = document.getElementById("familiaCopias");
    let salto = document.createElement('br');

    let borrar = document.createElement("button");
    borrar.type = "button";
    borrar.innerText = "X";
    borrar.addEventListener("click", function () {cantidadCopias--; return eliminarCuadro(copiaCuadro.id);});

    let copiaCuadro = document.createElement("div");
    copiaCuadro.id = copia.id + "Cuadro";

    familiaCopias.append(copiaCuadro);
    copiaCuadro.append(copiaLabel);
    copiaCuadro.append(copia);
    copiaCuadro.append(borrar);
    copiaCuadro.append(salto);
    cantidadCopias++;
    
    let boton = document.getElementById("agregarCopia");
    familiaCopias.append(boton);
}

function agregarOriginales(){

    let original = document.createElement("input");
    let originalLabel = document.createElement("label");
    originalLabel.innerText = "Introduzca el codigo o el nombre del original";
    original.id = "original" + cantidadOriginales;
    original.type = "original";
    originalLabel.htmlFor = original.id;

    let familiaOriginales = document.getElementById("familiaOriginales");
    let salto = document.createElement('br');

    let borrar = document.createElement("button");
    borrar.type = "button";
    borrar.innerText = "X";
    borrar.addEventListener("click", function () {cantidadOriginales--; return eliminarCuadro(originalCuadro.id);});

    let originalCuadro = document.createElement("div");
    originalCuadro.id = original.id + "Cuadro";

    familiaOriginales.append(originalCuadro);
    originalCuadro.append(originalLabel);
    originalCuadro.append(original);
    originalCuadro.append(borrar);
    originalCuadro.append(salto);
    cantidadOriginales++;
    
    let boton = document.getElementById("agregarOriginal");
    familiaOriginales.append(boton);
}

function familiaOriginalCopias(){
    let existefamiliaCopias = document.getElementById("familiaCopias");
    let existeOriginal = document.getElementById("familiaOriginales");

    if(document.getElementById("esOriginal").value == 'Si'){
        if(existeOriginal){
            existeOriginal.remove();
            cantidadCopias  = 0;
            cantidadOriginales = 0;
        }

        let familiaCopias = document.createElement("fieldset");
        familiaCopias.id = "familiaCopias";
        familiaCopias.innerHTML = `<button type="button" id="agregarCopia">Agregar Copia</button>`;
        formulario.append(familiaCopias);

        let agregarCopia = document.getElementById("agregarCopia");
        agregarCopia.addEventListener("click", agregarCopias);
    }

    else{
        if(existefamiliaCopias){
            existefamiliaCopias.remove();
            cantidadCopias  = 0;
            cantidadOriginales = 0;
        }
        let familiaOriginales = document.createElement("fieldset");
        familiaOriginales.id = "familiaOriginales";
        familiaOriginales.innerHTML = `<button type="button" id="agregarOriginal">Agregar Original</button>`;
        formulario.append(familiaOriginales);

        let agregarOriginal = document.getElementById("agregarOriginal");
        agregarOriginal.addEventListener("click", agregarOriginales);
    }
}

function agregarAlternativos(){

    let alternativo = document.createElement("input");
    let alternativoLabel = document.createElement("label");
    alternativoLabel.innerText = "Introduzca el codigo o el nombre del repuesto alternativo";
    alternativo.id = "alternativo" + cantidadAlternativos;
    alternativo.type = "alternativo";
    alternativoLabel.htmlFor = alternativo.id;

    let familiaAlternativos = document.getElementById("familiaAlternativos");
    let salto = document.createElement('br');

    let borrar = document.createElement("button");
    borrar.type = "button";
    borrar.innerText = "X";
    borrar.addEventListener("click", function () {cantidadAlternativos--; return eliminarCuadro(alternativoCuadro.id);});

    let alternativoCuadro = document.createElement("div");
    alternativoCuadro.id = alternativo.id + "Cuadro";


    familiaAlternativos.append(alternativoCuadro);
    alternativoCuadro.append(alternativoLabel);
    alternativoCuadro.append(alternativo);
    alternativoCuadro.append(borrar);
    alternativoCuadro.append(salto);
    cantidadAlternativos++;

    let boton = document.getElementById("agregarAlternativo");
    familiaAlternativos.append(boton);
}

function agregarReemplazos(){

    let reemplazo = document.createElement("input");
    let reemplazoLabel = document.createElement("label");
    reemplazoLabel.innerText = "Introduzca el codigo o el nombre del repuesto al que reemplaza";
    reemplazo.id = "reemplazo" + cantidadReemplazos;
    reemplazo.type = "reemplazo";
    reemplazoLabel.htmlFor = reemplazo.id;

    let familiaReemplazos = document.getElementById("familiaReemplazos");
    let salto = document.createElement('br');
    let borrar = document.createElement("button");
    borrar.type = "button";
    borrar.innerText = "X";
    borrar.addEventListener("click", function () {cantidadReemplazos--; return eliminarCuadro(reemplazoCuadro.id);});

    let reemplazoCuadro = document.createElement("div");
    reemplazoCuadro.id = reemplazo.id + "Cuadro";

    familiaReemplazos.append(reemplazoCuadro);
    reemplazoCuadro.append(reemplazoLabel);
    reemplazoCuadro.append(reemplazo);
    reemplazoCuadro.append(borrar);
    reemplazoCuadro.append(salto);
    cantidadReemplazos++;
    
    let boton = document.getElementById("agregarReemplazo");
    familiaReemplazos.append(boton);
}

function agregarEquipos(){

    let equipo = document.createElement("input");
    let equipoLabel = document.createElement("label");
    equipoLabel.innerText = "Introduzca el codigo o el nombre del equipo en el cual va puesto";
    equipo.id = "equipo" + cantidadEquipos;
    equipo.type = "equipo";
    equipoLabel.htmlFor = equipo.id;

    let familiaEquipos = document.getElementById("familiaEquipos");
    let salto = document.createElement('br');

    let borrar = document.createElement("button");
    borrar.type = "button";
    borrar.innerText = "X";
    borrar.addEventListener("click", function () {cantidadEquipos--; return eliminarCuadro(equipoCuadro.id);});

    let equipoCuadro = document.createElement("div");
    equipoCuadro.id = equipo.id + "Cuadro";

    familiaEquipos.append(equipoCuadro);
    equipoCuadro.append(equipoLabel);
    equipoCuadro.append(equipo);
    equipoCuadro.append(borrar);
    equipoCuadro.append(salto);
    cantidadEquipos++;
    
    let boton = document.getElementById("agregarEquipo");
    familiaEquipos.append(boton);
}

function agregarReps(){
    let rep = document.createElement("input");
    let repLabel = document.createElement("label");
    repLabel.innerText = "Introduzca el codigo del repuesto";
    rep.id = "rep" + cantidadReps;
    rep.type = "rep";
    repLabel.htmlFor = rep.id;
    
    let familiaReps = document.getElementById("familiaReps");
    let salto = document.createElement("br");
    
    let borrar = document.createElement("button");
    borrar.type = "button";
    borrar.innerText = "X";
    borrar.addEventListener("click", function () {cantidadReps--; return eliminarCuadro(repCuadro.id);});

    let repCuadro = document.createElement("div");
    repCuadro.id = rep.id + "Cuadro";

    familiaReps.append(repCuadro);
    repCuadro.append(repLabel);
    repCuadro.append(rep);
    repCuadro.append(borrar);
    repCuadro.append(salto);
    cantidadReps++;
    
    let boton = document.getElementById("agregarRep");
    familiaReps.append(boton);
}

function eliminarCuadro(cuadro){
    let box = document.getElementById(cuadro);
    box.remove();
}

function generarFormulario(){
    if (tipo.value == "Repuesto"){
        formulario.innerHTML = `<div id="cabeza">
        <div class="bloqueForm"><label for="codigo" id="codigoLabel">Codigo del repuesto*</label>
        <input type="codigo" id="codigo"></div>
        <div class="bloqueForm"><label for="nombre" id="nombreLabel">Nombre del repuesto*</label>
        <input type="nombre" id="nombre"></div>
        <div class="bloqueForm"><label for="fabricante">Fabricante del repuesto</label>
        <input type="fabricante" id="fabricante"></div>
        <div class="bloqueForm"><label for="esOriginal"> Es original </label>
        <select name="esOriginal" id="esOriginal" form="formulario">
            <option value="Si"> Si </option>
            <option value="No"> No </option>
        </select></div></div>`;

        cantidadAlternativos = 0;
        cantidadReemplazos = 0;
        cantidadEquipos = 0;
        
        familiaOriginalCopias();
        document.getElementById("esOriginal").addEventListener("change", familiaOriginalCopias);

        let familiaAlternativos = document.createElement("fieldset");
        familiaAlternativos.id = "familiaAlternativos";
        familiaAlternativos.innerHTML = `<button type="button" id="agregarAlternativo">Agregar alternativo</button>`;
        formulario.append(familiaAlternativos);

        let agregarAlternativo = document.getElementById("agregarAlternativo");
        agregarAlternativo.addEventListener("click", agregarAlternativos);

        
        let familiaReemplazos = document.createElement("fieldset");
        familiaReemplazos.id = "familiaReemplazos";
        familiaReemplazos.innerHTML = `<button type="button" id="agregarReemplazo">Agregar reemplazo</button>`;
        formulario.append(familiaReemplazos);

        let agregarReemplazo = document.getElementById("agregarReemplazo");
        agregarReemplazo.addEventListener("click", agregarReemplazos);
        
        let familiaEquipos = document.createElement("fieldset");
        familiaEquipos.id = "familiaEquipos";
        familiaEquipos.innerHTML = `<button type="button" id="agregarEquipo">Agregar equipo</button>`;
        formulario.append(familiaEquipos);

        let agregarEquipo = document.getElementById("agregarEquipo");
        agregarEquipo.addEventListener("click", agregarEquipos);

    }
    else {
        formulario.innerHTML = `<div class="bloqueForm"><label for="codigo" id="codigoLabel">Codigo</label>
        <input type="codigo" id="codigo"></div>
        <div class="bloqueForm"><label for="nombre">Nombre*</label>
        <input type="nombre" id="nombre"></div>
        <div class="bloqueForm"><label for="fabrica">Fabrica</label>
        <input type="fabrica" id="fabrica"></div>
        <div class="bloqueForm"><label for="marca">Marca</label>
        <input type="marca" id="marca"></div>
        `;
        
        cantidadReps = 0;

        let familiaReps = document.createElement("fieldset");
        familiaReps.id = "familiaReps";
        familiaReps.innerHTML = `<button type="button" id="agregarRep">Agregar repuesto</button>`;
        formulario.append(familiaReps);

        let agregarRep = document.getElementById("agregarRep");
        agregarRep.addEventListener("click", agregarReps);
    }
}

let guardarBoton = document.getElementById("guardar");

guardarBoton.addEventListener("click", guardarSession);

function validarGuardar(){
    let flag = 0;
    if(document.getElementById("nombre") == null){
        document.getElementById("nombreLabel").style.textDecoration = "red underline overline";
        flag = 1;
    }
    if(tipo.value == "Repuesto"){
        if(document.getElementById("codigo") == null){
            document.getElementById("codigoLabel").style.textDecoration = "red underline overline";
            flag = 1;
        }
    }
    
    if(flag){
        Swal.fire({
            text:`Debe completar los campos que posean un '*'.
            Complete los campos subrayados en rojo para proseguir.`});
    }
}

function guardarSession(){
    if(tipo.value == "Repuesto"){
        let rep = guardarRepuesto();
        sessionStorage.setItem(rep.codigo, JSON.stringify(rep));
        arregloRepuestos = arregloRepuestos.concat(rep);
        cuadroRepuestos(rep);
    }
    else{
        let eqp = guardarEquipo();
        sessionStorage.setItem(eqp.nombre, JSON.stringify(eqp));
        arregloEquipos = arregloEquipos.concat(eqp);
        cuadroEquipos(eqp);
    }

    let local = document.getElementById("guardarLocal");
    local.addEventListener("click", guardarLocal);
    local.style.visibility = "visible";
}

function guardarLocal(){
    let total = sessionStorage.length;

    for(let i = 0; i < total; i++){
        localStorage.setItem(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)));
    }
}

function guardarRepuesto(){
    let nombre = document.getElementById("nombre").value;
    let fabricante = document.getElementById("fabricante").value;
    let codigo = document.getElementById("codigo").value;
    let original = document.getElementById("esOriginal").value;
    let alternativos = [];
    let reemplazos = [];
    let equipos = [];
    let copias = [];
    let originales = [];

    if(original == "Si"){
        for(let i = 0; i < cantidadCopias; i++){
            copias[i] = document.getElementById("copia" + i).value;
        }
    }
    else{
        for(let i = 0; i < cantidadOriginales; i++){
            originales[i] = document.getElementById("original" + i).value;
        }
    }

    for(let i = 0; i < cantidadAlternativos; i++){
        alternativos[i] = document.getElementById("alternativo" + i).value;
    }

    for(let i = 0; i < cantidadReemplazos; i++){
        reemplazos[i] = document.getElementById("reemplazo" + i).value;
    }
    
    for(let i = 0; i < cantidadEquipos; i++){
        equipos[i] = document.getElementById("equipo" + i).value;
    }

    return new Repuesto(nombre, fabricante, codigo, original, originales, copias, alternativos, reemplazos, equipos);
}

function guardarEquipo(){
    let nombre = document.getElementById("nombre").value;
    let fabrica = document.getElementById("fabrica").value;
    let codigo = document.getElementById("codigo").value;
    let marca = document.getElementById("marca").value;
    let reps = [];

    for(let i = 0; i < cantidadReps; i++){
        reps[i] = document.getElementById("rep" + i).value;
    }

    return new Equipo(codigo, nombre, marca, fabrica, reps);
}

function cuadroRepuestos(cod) {
    let cuad = document.createElement("p");
    cuad.className = "cuadroArt";
    cuad.append("Nombre: " + cod.nombre);
    cuad.append(document.createElement("br"));
    cuad.append("Fabricante: " + cod.fabricante);
    cuad.append(document.createElement("br"));
    cuad.append("Codigo: " + cod.codigo);
    cuad.append(document.createElement("br"));
    cuad.append("Original: " + cod.esOriginal);
    cuad.append(document.createElement("br"));
    if(cod.esOriginal == "Si"){
        cuad.append("Copias: ");
        cuad.append(document.createElement("br")); 
        cod.copias.forEach(function(rep){
            cuad.append('.'.repeat(30) + rep);
            cuad.append(document.createElement("br"));
        });
    }
    else{
        cuad.append("Originales: ");
        cuad.append(document.createElement("br")); 
        cod.originales.forEach(function(rep){
            cuad.append(".".repeat(30) + rep);
            cuad.append(document.createElement("br"));
        });
    }
    
    cuad.append("Alternativos: ");
    cuad.append(document.createElement("br")); 
    cod.alternativos.forEach(function(rep){
        cuad.append(".".repeat(30) + rep);
        cuad.append(document.createElement("br"));
    });
    
    cuad.append("Reemplazos: ");
    cuad.append(document.createElement("br")); 
    cod.reemplazos.forEach(function(rep){
        cuad.append(".".repeat(30) + rep);
        cuad.append(document.createElement("br"));
    });
    
    cuad.append("Equipos: ");
    cuad.append(document.createElement("br")); 
    cod.equipos.forEach(function(eqp){
        cuad.append(".".repeat(30) + eqp);
        cuad.append(document.createElement("br"));
    });

    document.getElementById("repuestos").append(cuad);
}

function cuadroEquipos(nom) {
    let cuad = document.createElement("p");
    cuad.className = "cuadroArt";
    cuad.append("Codigo: " + nom.codigo);
    cuad.append(document.createElement("br"));
    cuad.append("Nombre: " + nom.nombre);
    cuad.append(document.createElement("br"));
    cuad.append("Marca: " + nom.marca);
    cuad.append(document.createElement("br"));
    cuad.append("Fabricante: " + nom.fabrica);
    cuad.append(document.createElement("br"));
    
    cuad.append("Repuestos: ");
    cuad.append(document.createElement("br")); 
    nom.repuestos.forEach(function(rep){
        cuad.append(".".repeat(30) + rep);
        cuad.append(document.createElement("br"));
    });
    
    document.getElementById("equipos").append(cuad);
}

generarFormulario();
tipo.addEventListener("change", generarFormulario);