let interface = prompt("Ingrese cómo desea continuar: \n_Ingrese 1 para continuar por consola\n_Ingrese 2 para continuar por cuadros de diálogo.");

class Equipo{
    constructor(nombre, marca, fabrica, repuestos){
        this.nombre = nombre;
        this.marca = marca;
        this.fabrica = fabrica;
        this.repuestos = repuestos;
    }
}

class Repuesto{
    constructor(nombre, esOriginal, originales, copias, alternativos, alternativoDe, equipos){
        this.nombre = nombre;
        this.esOriginal = esOriginal;
        this.originales = originales;
        this.copias = copias;
        this.alternativos = alternativos;
        this.alternativoDe = alternativoDe;
        this.equipos = equipos;
    }
}

function imprimir(texto){
    if(interface == 1){
        console.log(texto);
    }
    else if (interface == 2){
        alert(texto);
    }
}

if (interface == 1) {
    imprimir("Ha elegido proceder por consola");
} else if (interface == 2){
    imprimir("Ha elegido continuar por cuadros de diálogo");
} else {
    alert("Ingreso no válido");
}

let clase = prompt("Ingrese qué tipo de artículo desea ingresar: \n1_Equipo \n2_Repuesto");

if (clase == 2){
    let repuesto = crearRepuesto();
    imprimir(repuesto.nombre);
}
else if (clase == 1){
    crearEquipo();
}
else imprimir("Ingreso no valido")

function familiaRepuestos (){
    let cantidad = prompt("Cuantos repuestos va a ingresar?");
    let i = 0;
    let repuestos = [];
    while (cantidad > i) {
        repuestos[i] = prompt("Ingrese el nombre del repuesto");
        i++;
    }
    return repuestos;
}

function familiaEquipos (){
    let cantidad = prompt("Cuantos equipos va a ingresar?");
    let i = 0;
    let equipos = [];
    while (cantidad > i) {
        equipos[i] = prompt("Ingrese el nombre del equipo");
        i++;
    }
    return equipos;
}

function crearEquipo(){
    this.nombre = prompt("Nombre");
    this.marca = prompt("Marca");
    this.fabrica = prompt("Fabrica");
    this.repuestos = familiaRepuestos();
    return new Equipo(nombre, marca, fabrica, repuestos);
}

function crearRepuesto(){
    this.nombre = prompt("Nombre");
    this.esOriginal = prompt("Es original: \n1_Sí \n2_No");
    if(esOriginal == 2){
        imprimir("Ingresara los repuestos originales");
        this.originales = familiaRepuestos();
        this.copias = [];
    }
    else if(esOriginal == 1){
        imprimir("Ingresara los repuestos copias");
        this.copias = familiaRepuestos();
        this.originales = [];
    }
    
    imprimir("Ingresara los repuestos alternativos compatibles con este modelo");
    this.alternativos = familiaRepuestos();
    
    imprimir("Ingresara los repuestos a los cuales puede reemplazar");
    this.alternativoDe = familiaRepuestos();
    
    imprimir("Ingresara los equipos en donde va colocado");
    this.equipos = familiaEquipos();
    return new Repuesto(nombre, esOriginal, originales, copias, alternativos, alternativoDe, equipos);
}