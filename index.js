/* let titulito = document.getElementById("titulo");
let accionDelMouse = "keyup";
titulito.addEventListener (accionDelMouse, () => {alert("has hecho click")})
let buscador = document.getElementById ("input");
buscador.addEventListener ("keyup", (e) => {
    if (e.key === "Enter") {
        alert(`Has elegido el ${iphone10.nombreDelIphone1} \n Cámara: ${iphone10.megaPixelesCam1} \n Año:${iphone10.anio1} \n Colores:  ${iphone10.color1}`);
    }
}) */
//EVENTOS

let formulario = document.getElementById("saludoDos");
formulario.addEventListener("submit",(e) => {
e.preventDefault()
alert("Hola "+ e.target.children[1].value + " su consulta ha quedado registrada, pronto le enviaremos un mail a "
 + e.target.children[3].value);
});

let consulta1 = document.getElementById("consultaArea");
consulta1.addEventListener("mousedown", () => {
    alert("El área de consultas es un espacio que te brinda Celulares ON para sacarte todas las dudas que tengas acerca de nuestros productos y servicios.")
});

let redmi1 = document.getElementById ("redmi1");
redmi1.addEventListener("click", () => {
    alert("DISPONIBLE")
});

let redmi2 = document.getElementById ("redmi2");
redmi2.addEventListener("click", () => {
    alert("DISPONIBLE");
});
let redmi3 = document.getElementById ("redmi3");
redmi3.addEventListener("click", () => {
    alert("NO DISPONIBLE");
});
let iphone9Dom = document.getElementById ("iphone9Dom");
iphone9Dom.addEventListener("click", () => {
    alert("DISPONIBLE")
});
let iphone9Plus = document.getElementById ("iphone9plus");
iphone9Plus.addEventListener("click", () => {
    alert("NO DISPONIBLE")
});
let iphone10Dom = document.getElementById ("iphone10Dom");
iphone10Dom.addEventListener("click", () => {
    alert("DISPONIBLE")
});

//PROYECTO CELULARESON
const nombreYPais = (nombre,pais) => nombre + pais;
alert("Hola bienvenid@s a CelularesOn, el mejor lugar para comprar tu celular");
let nombre = prompt("Hola ¿Cúal es tu nombre?");
let pais = prompt("¿De qué país eres?");

nombreYPais (nombre,pais); 
while ((nombre === "") || (pais === "")) {
    alert("Por favor introduzca correctamente los datos solicitados");
    nombre = prompt("¿Cúal es tu nombre?");
    pais = prompt("¿De qué país eres?");
}
//FUNCION IVA
const iva = a => a *1.21;

//FIND
let listaNombres = prompt(`Hola ${nombre}, introducí el modelo de celular que estás buscando para saber si se encuentra en stock. `);
while (listaNombres === "") {
    alert("Por favor escribí el nombre del modelo de celular.");
    listaNombres = prompt (`Hola ${nombre}, introducí el modelo de celular que estás buscando para saber si se encuentra en stock.`);
}
const listaDeCelulares = [
    {nombre: "Redmi 1", precio: 30000},
    {nombre: "Redmi 2", precio: 40000},
    {nombre: "Iphone 9", precio:70000},
    {nombre: "Iphone 10", precio:120000}
  ]

let resultado1 = listaDeCelulares.find (elem => elem.nombre === listaNombres);

//No pude hacer andar ese while
alert(`El ${resultado1.nombre} si se encuentra en stock`);
while (resultado1 =! "Redmi 1" || "Redmi 2" || "Iphone 9") {
    alert("flayaste rey");
    listaNombres = prompt(`Hola ${nombre}, introducí el modelo de celular que estás buscando para saber si se encuentra en stock. `);
}
//Pregunta MARCA
let preguntaMarcaCelular = prompt(`${nombre} ¿Por cuál marca de celular te has decidido, Xiaomi o Apple?`);
while (preguntaMarcaCelular === "") {
    alert("Por favor coloque bien los datos.")
    preguntaMarcaCelular = prompt(`${nombre} ¿Por cuál marca de celular te has decidido, Xiaomi o Apple?`);
}
//XIAOMI SECCION

if (preguntaMarcaCelular === "Xiaomi") {
    class ModelosDeXiaomi {
        constructor(nombreDelXiaomi, megaPixelesCam, anio, color, precio) {
            this.nombreDelXiaomi = nombreDelXiaomi;
            this.megaPixelesCam = megaPixelesCam;
            this.anio = anio;
            this.color = color;
            this.precio = precio;
        }
    }
    const xiaomiRedmi1 = new ModelosDeXiaomi ("Redmi 1", "25 Mgpx", "2019", {colores: "rojo, verde o azul"},30000);
    const xiaomiRedmi2 = new ModelosDeXiaomi ("Redmi 2", "30 Mgpx", "2020", {colores: "azul"}, 40000);

    let queModelosQueresXiaomi = prompt("¿Qué modelos estás buscando? \nEstos son los modelos que nos quedaron en stock: \nRedmi 1 \nRedmi 2");
    while (queModelosQueresXiaomi === "") {
        alert("Por favor escriba el modelo de celular")
        queModelosQueresXiaomi = prompt("¿Qué modelos estás buscando? \nEstos son los modelos que nos quedaron en stock: \nRedmi 1 \nRedmi 2");
    }
    if (queModelosQueresXiaomi === "Redmi 1") {
        alert("Has elegido el " + xiaomiRedmi1.nombreDelXiaomi + "\nCámara: " + xiaomiRedmi1.megaPixelesCam + "\nAño: " + xiaomiRedmi1.anio + "\nColores: " + xiaomiRedmi1["colores"]);
        let deseaComprarlo = prompt("¿Desea comprarlo?");
        while (deseaComprarlo === "") {
            alert("Por favor escribir Si o No");
            deseaComprarlo = prompt("¿Desea comprarlo?");
        }
        if (deseaComprarlo === "Si") {
            alert(`El precio del ${xiaomiRedmi1.nombreDelXiaomi} es de ${xiaomiRedmi1.precio} pesos (sin IVA).`);
            let cuantosLleva = parseInt (prompt("¿Cúantos desea llevar?"));
            while (cuantosLleva === "") {
                alert("Por favor escribir lo que se le indica");
                parseInt (prompt("¿Cúantos desea llevar?"));
            }
            let cantidadQueLleva = (a, b) => (a * b);
            alert (`Has elegido ${cuantosLleva}.\nTotal a pagar: ${iva (cantidadQueLleva (xiaomiRedmi1.precio,cuantosLleva))} pesos (Incluye el IVA)`);
            const suma = (a,b,c) => a + b + c;
            let fundaVidrioTempladoXiaomi = {funda: 1500, vidrioTemplado:700 };  
            let fundaPrompt = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoXiaomi.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoXiaomi.vidrioTemplado} (pesos)?`);
            while (fundaPrompt === "") {
                alert("Por favor escribir lo que se indica.")
                prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoXiaomi.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoXiaomi.vidrioTemplado} (pesos)?`);

            }
            if (fundaPrompt === "Si") {
                alert(`Perfecto, su total a pagar es de ${suma (iva (cantidadQueLleva (xiaomiRedmi1.precio,cuantosLleva)),
                fundaVidrioTempladoXiaomi.funda,fundaVidrioTempladoXiaomi.vidrioTemplado )} pesos \n(Incluye: funda, vidrio templado e IVA)`);
                alert ("¡Gracias por su compra, lo esperamos pronto!");
            }else if (fundaPrompt === "No") {
                alert(`Tu total a pagar es de: ${iva (cantidadQueLleva (xiaomiRedmi1.precio,cuantosLleva))}`);
                alert ("¡Gracias por su compra, lo esperamos pronto!");
            }else { 
                alert ("¡Gracias por su compra, lo esperamos pronto!");
            }
            
        } else if (deseaComprarlo === "No") {
            alert("¡Lo esperamos pronto, hasta luego!")
        }else {
            alert("Error");

         }

    }else if (queModelosQueresXiaomi === "Redmi 2") {
        alert("Has elegido el " + xiaomiRedmi2.nombreDelXiaomi + "\n Cámara: " + xiaomiRedmi2.megaPixelesCam + "\n Año: " + xiaomiRedmi2.anio + "\n Colores: " + xiaomiRedmi2["colores"]);
        let deseaComprarlo1 = prompt("¿Desea comprarlo?");
        while (deseaComprarlo1 === "") {
            alert("Escribir lo que se indica");
            deseaComprarlo1 = prompt("¿Desea comprarlo?");
        }
        if (deseaComprarlo1 ==="Si") {
            alert(`El precio del ${xiaomiRedmi2.nombreDelXiaomi} es de ${xiaomiRedmi2.precio} pesos (sin IVA).`);
            let cuantosLleva1 = parseInt (prompt("¿Cúantos desea llevar?"));
            while (cuantosLleva1 === "") {
                alert("Escribir lo que se indica");
                parseInt (prompt("¿Cúantos desea llevar?"));
            }
            let cantidadQueLleva1 = (a, b) => (a * b);
            alert (`Has elegido ${cuantosLleva1}.\nTotal a pagar: ${iva (cantidadQueLleva1 (xiaomiRedmi2.precio,cuantosLleva1))} pesos (Incluye el IVA)`);
            const suma1 = (a,b,c) => a + b + c;
            let fundaVidrioTempladoXiaomi1 = {funda: 1500, vidrioTemplado:700 };  
            let fundaPrompt1 = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoXiaomi1.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoXiaomi1.vidrioTemplado} (pesos)?`);
            while (fundaPrompt1 === "") {
                alert("Escribir lo que se indica");
                prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoXiaomi1.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoXiaomi1.vidrioTemplado} (pesos)?`);
            }
            if (fundaPrompt1 === "Si") {
                alert(`Perfecto, su total a pagar es de ${suma1 (iva (cantidadQueLleva1 (xiaomiRedmi2.precio,cuantosLleva1)),
                fundaVidrioTempladoXiaomi1.funda,fundaVidrioTempladoXiaomi1.vidrioTemplado )} pesos \n(Incluye: funda, vidrio templado e IVA)`);
            }else if (fundaPrompt1 === "No") {
                alert(`Tu total a pagar es de: ${iva (cantidadQueLleva1 (xiaomiRedmi2.precio,cuantosLleva1))}`);
                alert ("¡Gracias por su compra, lo esperamos pronto!");
            }else {
                 alert ("¡Gracias por su compra, lo esperamos pronto!");
            }

        }else if (deseaComprarlo1==="No") {
            alert("¡Lo esperamos pronto, hasta luego!");
        }else{
            alert("Error.")
        } 

 }else {
    alert("Algo sucedió de manera indebida");
 }}

//IPHONE SECCION

 else if (preguntaMarcaCelular === "Apple")  {
    class Iphone {
        constructor(nombreDelIphone1, megaPixelesCam1, anio1, color1, precio1) {
            this.nombreDelIphone1 = nombreDelIphone1;
            this.megaPixelesCam1 = megaPixelesCam1;
            this.anio1 = anio1;
            this.color1 = color1;
            this.precio1 = precio1;
        }
    } 
    const iphone10 = new Iphone ("Iphone 10", "33 Mgpx", "2020", "rojo, verde, azul",75000);
    const iphone11 = new Iphone ("Iphone 11", "41 Mgpx", "2021", "azul, rojo, blanco", 120000);

    let queModelosQueresIphone = prompt("¿Qué modelos estás buscando? \nEstos son los modelos que nos quedaron en stock: \nIphone 10 \nIphone 11");
    while (queModelosQueresIphone === "") {
        alert("Por favor escriba lo que se le indica");
        prompt("¿Qué modelos estás buscando? \nEstos son los modelos que nos quedaron en stock: \nIphone 10 \nIphone 11");
    }
    //IPHONE 10
    if (queModelosQueresIphone === "Iphone 10") {
        alert(`Has elegido el ${iphone10.nombreDelIphone1} \n Cámara: ${iphone10.megaPixelesCam1} \n Año:${iphone10.anio1} \n Colores:  ${iphone10.color1}`);
        let deseaComprarlo10 = prompt("¿Desea comprarlo?");
        while (deseaComprarlo10 === "") {
            alert("Por favor escriba lo que se le indica");
            prompt("¿Desea comprarlo?");
        }
        if (deseaComprarlo10 ==="Si") {
            let cuantosLleva10 = parseInt(prompt("¿Cúantos desea llevar?"));
            while (cuantosLleva10 === "") {
                alert("Por favor escriba lo que se le indica");
                parseInt(prompt("¿Cúantos desea llevar?"));}
            let cantidadQueLleva10 = (a, b) => (a * b);
            alert (`Has elegido ${cuantosLleva10}.\nTotal a pagar: ${iva (cantidadQueLleva10 (iphone10.precio1,cuantosLleva10))} pesos (Incluye el IVA)`);
            const suma10 = (a,b,c) => a + b + c;
            let fundaVidrioTempladoIphone = {funda: 1500, vidrioTemplado:700};  
            let fundaPrompt10 = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoIphone.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoIphone.vidrioTemplado} (pesos)?`);
            while (fundaPrompt10 === "") {
                alert("Por favor escriba lo que se le indica");
                prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoIphone.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoIphone.vidrioTemplado} (pesos)?`);
            }
            if (fundaPrompt10 === "Si") {
                alert(`Perfecto, su total a pagar es de ${suma10 (iva (cantidadQueLleva10 (iphone10.precio1,cuantosLleva10)),
                fundaVidrioTempladoIphone.funda,fundaVidrioTempladoIphone.vidrioTemplado)} pesos \n(Incluye: funda, vidrio templado e IVA)`);
            }else if (fundaPrompt10 === "No") {
                alert(`Tu total a pagar es de: ${iva (cantidadQueLleva10 (iphone10.precio1,cuantosLleva10))}`);
                alert ("¡Gracias por su compra, lo esperamos pronto!");
            }else {
                alert ("Algo no anduvo bien, vuelve a introducir los datos solicitados");
            }
        }else if (deseaComprarlo10 === "No") {
            alert("Lo esperamos pronto");
        }else {
            alert("Algo no anduvo bien");
        }
    
    //IPHONE 11
    }else if (queModelosQueresIphone === "Iphone 11") {
        alert("Has elegido el " + iphone11.nombreDelIphone + "\n Cámara: " + iphone11.megaPixelesCam1 + "\n Año: " + iphone11.anio1 + "\n Colores: " + iphone11.color1);
        let deseaComprarlo2 = prompt("¿Desea comprarlo?");
        while (deseaComprarlo2 === "") {
            alert("Por favor escriba lo que se le indica");
            prompt("¿Desea comprarlo?");
        }
        if (deseaComprarlo2 ==="Si") {
        let cuantosLleva11 = parseInt (prompt("¿Cúantos desea llevar?"));
        while (cuantosLleva11 === "") {
            alert("Por favor escriba lo que se le indica");
            parseInt (prompt("¿Cúantos desea llevar?"));
        }
        let cantidadQueLleva11 = (a, b) => (a * b);
        alert (`Has elegido ${cuantosLleva11}.\nTotal a pagar: ${iva (cantidadQueLleva11 (iphone11.precio1,cuantosLleva11))} pesos (Incluye el IVA)`);
        const suma11 = (a,b,c) => a + b + c;
        let fundaVidrioTempladoIphone = {funda: 1500, vidrioTemplado:700 };  
        let fundaPrompt11 = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoIphone.funda} (pesos) + 
        un vidrio templado a ${fundaVidrioTempladoIphone.vidrioTemplado} (pesos)?`);
        while (fundaPrompt11 === "") {
            alert("Por favor escriba lo que se le indica");
            prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoIphone.funda} (pesos) + 
        un vidrio templado a ${fundaVidrioTempladoIphone.vidrioTemplado} (pesos)?`);
        }
        if (fundaPrompt11 === "Si") {
            alert(`Perfecto, su total a pagar es de ${suma11 (iva (cantidadQueLleva11 (iphone11.precio1,cuantosLleva11)),
            fundaVidrioTempladoIphone.funda,fundaVidrioTempladoIphone.vidrioTemplado)} pesos \n(Incluye: funda, vidrio templado e IVA)`);
        }else if (fundaPrompt11 === "No") {
            alert(`Tu total a pagar es de: ${iva (cantidadQueLleva11 (iphone11.precio1,cuantosLleva11))}`);
            alert ("¡Gracias por su compra, lo esperamos pronto!");
        }else {
            alert("Algo no salió bien, vuelve a intentarlo");
        }}
        else if (deseaComprarlo2 === "No") {
            alert("Lo esperamos pronto");
        }
        
    }else {
        alert("Hemos detectado un problema");
    }}

    //ULTIMO ELSE
else {
    }
    while (preguntaMarcaCelular === "") {
        alert("Algo no anduvo bien");
        preguntaMarcaCelular = prompt(`${nombre} ¿Por cuál marca de celular te has decidido, Xiaomi o Apple?`); }

