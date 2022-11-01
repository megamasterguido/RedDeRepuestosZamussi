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
    crearRepuesto();
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

function crearEquipo(){
    this.nombre = prompt("Nombre");
    this.marca = prompt("Marca");
    this.fabrica = prompt("Fabrica");
    this.repuestos = familiaRepuestos();
    return new Equipo(nombre, marca, fabrica, repuestos);
}

function crearRepuesto(){
    this.nombre = prompt("Nombre");
    this.esOriginal = prompt("Nombre");
    this.originales = prompt("Nombre");
    this.copias = prompt("Nombre");
    this.alternativos = prompt("Nombre");
    this.alternativoDe = prompt("Nombre");
    this.equipos = prompt("nombre");
    return new Repuesto(nombre, esOriginal, originales, copias, alternativos, alternativoDe, equipos);
}