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
    constructor(nombre, esOriginal, originales, copias, alternativos, alternativoDe, equipos, codigo){
        this.nombre = nombre;
        this.esOriginal = esOriginal;
        this.originales = originales;
        this.copias = copias;
        this.alternativos = alternativos;
        this.alternativoDe = alternativoDe;
        this.equipos = equipos;
        this.codigo = codigo;
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

    let alternativos = concatenarArticulos(repuesto.alternativos);
    imprimir("Alternativos: " + alternativos);
    
    let alternativoDe = concatenarArticulos(repuesto.alternativoDe);
    imprimir("Alternativo de: " + alternativoDe);
    
    let equipos = concatenarArticulos(repuesto.equipos);
    imprimir("Equipos en los que va colocado: " + equipos);

    if(repuesto.esOriginal == 1){
        imprimir("Original: Si");
        let copias = concatenarArticulos(repuesto.copias);
        imprimir("Copias: " + copias);
    }
    else if(repuesto.esOriginal == 2){
        imprimir("Original: No");
        let originales = concatenarArticulos(repuesto.originales);
        imprimir("Originales: " + originales);
    }
}

function imprimirEquipos(equipo){
    imprimir("Codigo: " + equipo.codigo);
    imprimir("Nombre: " + equipo.nombre);
    imprimir("Marca: " + equipo.marca);
    imprimir("Fabrica: " + equipo.fabrica);

    let repuestos = concatenarArticulos(equipo.repuestos);
    imprimir("Repuestos: " + repuestos);
}

let flag = prompt("Ingrese 1 si desea ingresar un articulo o cualquier cosa en caso contrario")
let interface = prompt("Ingrese cómo desea continuar: \n_Ingrese 1 para continuar por consola\n_Ingrese 2 para continuar por cuadros de diálogo.");

if (interface == 1) {
    imprimir("Ha elegido proceder por consola");
} else if (interface == 2){
    imprimir("Ha elegido continuar por cuadros de diálogo");
} else {
    alert("Ingreso no válido");
}

let contadorRepuestos = 0;
let contadorEquipos = 0;

while(flag == 1){
    let clase = prompt("Ingrese qué tipo de artículo desea ingresar: \n1_Equipo \n2_Repuesto");

    if (clase == 2){
        listaRepuestos[contadorRepuestos] = crearRepuesto();
        contadorRepuestos++;
    }
    else if (clase == 1){
        listaEquipos[contadorEquipos] = crearEquipo();
        contadorEquipos++;
    }
    else imprimir("Ingreso no valido")

    flag = prompt("Ingrese 1 si desea continuar o cualquier otra cosa para terminar.")
}

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