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
    constructor(nombre, fabricante, codigo, esOriginal, originales, copias, alternativos, alternativoDe, equipos){
        this.nombre = nombre;
        this.fabricante = fabricante;
        this.codigo = codigo;
        this.esOriginal = esOriginal;
        this.originales = originales;
        this.copias = copias;
        this.alternativos = alternativos;
        this.alternativoDe = alternativoDe;
        this.equipos = equipos;
    }
}

let listaRepuestos = [];
let listaEquipos = [];

function imprimir(texto){
    if(interface == 1){
        console.log(String(texto));
    }
    else if (interface == 2){
        alert(texto);
    }
}
/*
function familiaRepuestos (){
    let flag = 1;
    let i = 0;
    let repuestos = [];
    while (flag == 1) {
        repuestos[i] = prompt("Ingrese el NOMBRE o el CODIGO del repuesto");
        do{
            flag = prompt("_Ingrese 1 si desea ingresar otro repuesto.\n_Ingrese 2 si desea terminar.");
            if(flag != 1 && flag != 2){
                imprimir("Ingreso no valido: " + flag);
            }
        } while (flag != 1 && flag != 2);
        i++;
    }
    return repuestos;
}

function familiaEquipos (){
    let i = 0;
    let equipos = [];
    let flag = 1;
    while (flag == 1) {
        equipos[i] = prompt("Ingrese el NOMBRE o el CODIGO del equipo");
        do{
            flag = prompt("_Ingrese 1 si desea ingresar otro equipo.\n_Ingrese 2 si desea terminar.");
            if(flag != 1 && flag != 2){
                imprimir("Ingreso no valido.");
            }
        } while (flag != 1 && flag != 2);
        i++;
    }
    return equipos;
}
*/
function crearEquipo(){
    this.nombre = prompt("Nombre");
    this.marca = prompt("Marca");
    this.fabrica = prompt("Fabrica");
    
    let reps = prompt("Ingrese 1 si desea ingresar repuestos para este equipo o ingrese cualquier cosa en caso contrario.");
    if(reps == 1){
        this.repuestos = familiaRepuestos();
    }
    else{
        this.repuestos = [];
    }
    
    let ingresado = prompt("Si ya posee el equipo ingresado, puede agregar el codigo del mismo. Ingrese 1 para ingresar el codigo del mismo o cualquier otra cosa para no hacerlo.");
    if (ingresado == 1){
        this.codigo = prompt("Ingrese el codigo");
    }
    else{
        this.codigo = "Sin Codigo";
    }

    return new Equipo(codigo, nombre, marca, fabrica, repuestos);
}

function crearRepuesto(){
    let llamarIngreso = 0;
    this.codigo = prompt("Ingrese el CODIGO del articulo");
    this.nombre = prompt("Ingrese el NOMBRE del articulo");
    this.esOriginal = prompt("Es original: \n1_Sí \n2_No");
    if(esOriginal == 2){
        llamarIngreso = prompt("Si desea indicar los repuestos originales, ingrese 1. En caso contrario, ingrese cualquier cosa.");
        if(llamarIngreso == 1){
            this.originales = familiaRepuestos();
            llamarIngreso = 0;
        }
        else{
            this.originales = [];
        }
        this.copias = [];
    }
    else if(esOriginal == 1){
        llamarIngreso = prompt("Si desea indicar los repuestos copia, ingrese 1. En caso contrario, ingrese cualquier cosa.");
        if(llamarIngreso == 1){
            this.copias = familiaRepuestos();
            llamarIngreso = 0;
        }
        else{
            this.copias = [];
        }
        this.originales = [];
    }
    
    llamarIngreso = prompt("Si desea indicar los repuestos alternativos, ingrese 1. En caso contrario, ingrese cualquier cosa.");
    if(llamarIngreso == 1){
        this.alternativos = familiaRepuestos();
        llamarIngreso = 0;
    }
    else{
        this.alternativos = [];
    }
    
    llamarIngreso = prompt("Si desea indicar los repuestos para los cuales es un alternativo o puede reemplazar, ingrese 1. En caso contrario, ingrese cualquier cosa.");
    if(llamarIngreso == 1){
        this.alternativoDe = familiaRepuestos();
        llamarIngreso = 0;
    }
    else{
        this.alternativoDe = [];
    }
    
    llamarIngreso = prompt("Si desea indicar los equipos donde va o puede ir colocado, ingrese 1. En caso contrario, ingrese cualquier cosa.");
    if(llamarIngreso == 1){
        this.equipos = familiaEquipos();
        llamarIngreso = 0;
    }
    else{
        this.equipos = [];
    }
    
    
    return new Repuesto(nombre, esOriginal, originales, copias, alternativos, alternativoDe, equipos, codigo);
}

function concatenarArticulos (articulos){

    let resp = "";

    let i = articulos.length - 1;

    while(i >= 0){
        resp = resp.concat(articulos[i]);
        i--;
        if(i >= 0){
            resp = resp.concat(", ");
        }
    }
    return resp;
}

function imprimirRepuesto(repuesto){
    imprimir("Codigo: " + repuesto.codigo);
    imprimir("Nombre: " + repuesto.nombre);

    let alternativos = repuesto.alternativos.join(", ");
    imprimir("Alternativos: " + alternativos);
    
    let alternativoDe = repuesto.alternativoDe.join(", ");
    imprimir("Alternativo de: " + alternativoDe);
    
    let equipos = repuesto.equipos.join(", ");
    imprimir("Equipos en los que va colocado: " + equipos);

    if(repuesto.esOriginal == 1){
        imprimir("Original: Si");
        let copias = repuesto.copias.join(", ");
        imprimir("Copias: " + copias);
    }
    else if(repuesto.esOriginal == 2){
        imprimir("Original: No");
        let originales = repuesto.originales.join(", ");
        imprimir("Originales: " + originales);
    }
}

function imprimirEquipos(equipo){
    imprimir("Codigo: " + equipo.codigo);
    imprimir("Nombre: " + equipo.nombre);
    imprimir("Marca: " + equipo.marca);
    imprimir("Fabrica: " + equipo.fabrica);

    let repuestos = equipo.repuestos.join(", ");
    imprimir("Repuestos: " + repuestos);
}

//let flag = prompt("Ingrese 1 si desea ingresar un articulo o cualquier cosa en caso contrario")
let interface = 1; //prompt("Ingrese cómo desea continuar: \n_Ingrese 1 para continuar por consola\n_Ingrese 2 para continuar por cuadros de diálogo.");

if (interface == 1) {
    imprimir("Ha elegido proceder por consola");
} else if (interface == 2){
    imprimir("Ha elegido continuar por cuadros de diálogo");
} else {
    alert("Ingreso no válido");
}

let contadorRepuestos = 0;
let contadorEquipos = 0;


/*
while(flag == 1){
    let clase = prompt("Ingrese qué tipo de artículo desea ingresar: \n1_Equipo \n2_Repuesto");

    if (clase == 2){
        listaRepuestos.push(crearRepuesto());
        contadorRepuestos++;
    }
    else if (clase == 1){
        listaEquipos.push(crearEquipo());
        contadorEquipos++;
    }
    else imprimir("Ingreso no valido")

    flag = prompt("Ingrese 1 si desea continuar o cualquier otra cosa para terminar.")
}
*/

let formulario = document.getElementById('formulario');

let tipo = document.getElementById("tipoArticulo");

let cantidadCopias = 0;
let cantidadOriginales = 0;
let cantidadAlternativos = 0;
let cantidadReemplazos = 0;
let cantidadEquipos = 0;

function agregarCopias(){
    let copia = document.createElement("input");
    let copiaLabel = document.createElement("label");
    copiaLabel.innerText = "Introduzca el codigo o el nombre de la copia";
    copia.id = "copia" + cantidadCopias;
    copia.type = "copia";
    copiaLabel.htmlFor = copia.id;
    let familiaCopia = document.getElementById("familiaCopia");
    let salto = document.createElement('br');

    familiaCopia.append(copiaLabel);
    familiaCopia.append(copia);
    familiaCopia.append(salto);
    cantidadCopias++;
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

    familiaOriginales.append(originalLabel);
    familiaOriginales.append(original);
    familiaOriginales.append(salto);
    cantidadOriginales++;
}

function familiaOriginalCopias(){
    let existeFamiliaCopia = document.getElementById("familiaCopia");
    let existeOriginal = document.getElementById("familiaOriginales");

    if(document.getElementById("esOriginal").value == '1'){
        if(existeOriginal){
            existeOriginal.remove();
            cantidadCopias  = 0;
            cantidadOriginales = 0;
        }

        let familiaCopia = document.createElement("fieldset");
        familiaCopia.id = "familiaCopia";
        familiaCopia.innerHTML = `<button type="button" id="agregarCopia">Agregar Copia</button><br>`;
        formulario.append(familiaCopia);

        let agregarCopia = document.getElementById("agregarCopia");
        agregarCopia.addEventListener("click", agregarCopias);
    }

    else{
        if(existeFamiliaCopia){
            existeFamiliaCopia.remove();
            cantidadCopias  = 0;
            cantidadOriginales = 0;
        }
        let familiaOriginales = document.createElement("fieldset");
        familiaOriginales.id = "familiaOriginales";
        familiaOriginales.innerHTML = `<button type="button" id="agregarOriginal">Agregar Original</button><br>`;
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

    familiaAlternativos.append(alternativoLabel);
    familiaAlternativos.append(alternativo);
    familiaAlternativos.append(salto);
    cantidadAlternativos++;
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

    familiaReemplazos.append(reemplazoLabel);
    familiaReemplazos.append(reemplazo);
    familiaReemplazos.append(salto);
    cantidadReemplazos++;
}

function agregarEquipos(){

    let equipo = document.createElement("input");
    let equipoLabel = document.createElement("label");
    equipoLabel.innerText = "Introduzca el codigo o el nombre del equipo en el cual va puesto";
    equipo.id = "reemplazo" + cantidadReemplazos;
    equipo.type = "reemplazo";
    equipoLabel.htmlFor = equipo.id;

    let familiaEquipos = document.getElementById("familiaEquipos");
    let salto = document.createElement('br');

    familiaEquipos.append(equipoLabel);
    familiaEquipos.append(equipo);
    familiaEquipos.append(salto);
    cantidadEquipos++;
}

function generarFormulario(){
    if (tipo.value == "Repuesto"){
        formulario.innerHTML = `<label for="nombre">Nombre del repuesto</label>
        <input type="nombre" id="nombre"><br>
        <label for="fabricante">Fabricante del repuesto</label>
        <input type="fabricante" id="fabricante"><br>
        <label for="codigo">Codigo del repuesto</label>
        <input type="codigo" id="codigo"><br>
        <label for="esOriginal"> Es original </label>
        <select name="esOriginal" id="esOriginal" form="formulario">
            <option value=1> Si </option>
            <option value=0> No </option>
        </select><br>`;
        
        familiaOriginalCopias();
        document.getElementById("esOriginal").addEventListener("change", familiaOriginalCopias);

        let familiaAlternativos = document.createElement("fieldset");
        familiaAlternativos.id = "familiaAlternativos";
        familiaAlternativos.innerHTML = `<button type="button" id="agregarAlternativo">Agregar alternativo</button><br>`;
        formulario.append(familiaAlternativos);

        let agregarAlternativo = document.getElementById("agregarAlternativo");
        agregarAlternativo.addEventListener("click", agregarAlternativos);

        
        let familiaReemplazos = document.createElement("fieldset");
        familiaReemplazos.id = "familiaReemplazos";
        familiaReemplazos.innerHTML = `<button type="button" id="agregarReemplazo">Agregar reemplazo</button><br>`;
        formulario.append(familiaReemplazos);

        let agregarReemplazo = document.getElementById("agregarReemplazo");
        agregarReemplazo.addEventListener("click", agregarReemplazos);
        
        let familiaEquipos = document.createElement("fieldset");
        familiaEquipos.id = "familiaEquipos";
        familiaEquipos.innerHTML = `<button type="button" id="agregarEquipo">Agregar equipo</button><br>`;
        formulario.append(familiaEquipos);

        let agregarEquipo = document.getElementById("agregarEquipo");
        agregarEquipo.addEventListener("click", agregarEquipos);

    }
    else {
        formulario.innerHTML = `<label for="nombre">Nombre del electrodomestico</label><input type="nombre" id="nombre">`;
    }
}

generarFormulario();
tipo.addEventListener("change", generarFormulario);

/*
if(contadorRepuestos == 0){
    imprimir("No se han ingresado repuestos.");
}
else{
    imprimir("Se han ingresado " + contadorRepuestos + " repuestos:");
    listaRepuestos.forEach(repuesto => imprimirRepuesto(repuesto));
}

if(contadorEquipos == 0){
    imprimir("No se han ingresado equipos.");
}
else{
    imprimir("Se han ingresado " + contadorEquipos + " equipos:");
    listaEquipos.forEach(equipo => imprimirEquipos(equipo));
}
*/