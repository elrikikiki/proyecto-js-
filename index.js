alert("Hola bienvenid@s a CelularesOn, el mejor lugar para comprar tu celular");

const nombreYPais = (nombre,pais) => nombre + pais;

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

const preguntaMarcaCelular = prompt(`Hola ${nombre}¿Qué marca de celular estás buscando, Xiaomi o Apple?`);

//XIAOMI SECCION

if (preguntaMarcaCelular === "Xiaomi") {
    const queModelosQueresXiaomi = prompt("¿Qué modelos estás buscando? \nEstos son los modelos que nos quedaron en stock: \nRedmi 1 \nRedmi 2");
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
    if (queModelosQueresXiaomi === "Redmi 1") {
        alert("Has elegido el " + xiaomiRedmi1.nombreDelXiaomi + "\nCámara: " + xiaomiRedmi1.megaPixelesCam + "\nAño: " + xiaomiRedmi1.anio + "\nColores: " + xiaomiRedmi1["colores"]);
        let deseaComprarlo = prompt("¿Desea comprarlo?");
        if (deseaComprarlo === "Si") {
            alert(`El precio del ${xiaomiRedmi1.nombreDelXiaomi} es de ${xiaomiRedmi1.precio} pesos (sin IVA).`);
            let cuantosLleva = parseInt (prompt("¿Cúantos desea llevar?"));
            let cantidadQueLleva = (a, b) => (a * b);
            alert (`Has elegido ${cuantosLleva}.\nTotal a pagar: ${iva (cantidadQueLleva (xiaomiRedmi1.precio,cuantosLleva))} pesos (Incluye el IVA)`);
            const suma = (a,b,c) => a + b + c;
            let fundaVidrioTempladoXiaomi = {funda: 1500, vidrioTemplado:700 };  
            const fundaPrompt = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoXiaomi.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoXiaomi.vidrioTemplado} (pesos)?`);
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
            while (deseaComprarlo !="Si" || "No") {
                deseaComprarlo = prompt("¿Desea comprarlo?");
            }
         }

    }else if (queModelosQueresXiaomi === "Redmi 2") {
        alert("Has elegido el " + xiaomiRedmi2.nombreDelXiaomi + "\n Cámara: " + xiaomiRedmi2.megaPixelesCam + "\n Año: " + xiaomiRedmi2.anio + "\n Colores: " + xiaomiRedmi2["colores"]);
        let deseaComprarlo1 = prompt("¿Desea comprarlo?");
        if (deseaComprarlo1 ==="Si") {
            alert(`El precio del ${xiaomiRedmi2.nombreDelXiaomi} es de ${xiaomiRedmi2.precio} pesos (sin IVA).`);
            let cuantosLleva1 = parseInt (prompt("¿Cúantos desea llevar?"));
            let cantidadQueLleva1 = (a, b) => (a * b);
            alert (`Has elegido ${cuantosLleva1}.\nTotal a pagar: ${iva (cantidadQueLleva1 (xiaomiRedmi2.precio,cuantosLleva1))} pesos (Incluye el IVA)`);
            const suma1 = (a,b,c) => a + b + c;
            let fundaVidrioTempladoXiaomi1 = {funda: 1500, vidrioTemplado:700 };  
            const fundaPrompt1 = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoXiaomi1.funda} (pesos) + 
            un vidrio templado a ${fundaVidrioTempladoXiaomi1.vidrioTemplado} (pesos)?`);
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
            
        } 

 }else {
    alert("Algo no paso bueno");
 }}

//IPHONE SECCION

 else if (preguntaMarcaCelular === "Apple")  {
    let queModelosQueresIphone = prompt("¿Qué modelos estás buscando? \nEstos son los modelos que nos quedaron en stock: \nIphone 10 \nIphone 11");
    class ModelosDeIphone {
        constructor(nombreDelIphone, megaPixelesCam, anio, color, precio) {
            this.nombreDelIphone = nombreDelIphone;
            this.megaPixelesCam = megaPixelesCam;
            this.anio = anio;
            this.color = color;
            this.precio = precio;
        } 
    }
    const iphone10 = new ModelosDeIphone ("Iphone 10", "33 Mgpx", "2020", {rojo, verde, azul},75000);
    const iphone11 = new ModelosDeIphone ("Iphone 11", "41 Mgpx", "2021", {azul, rojo, blanco}, 120000);
    if (queModelosQueresIphone == "Iphone 10") {
        alert("Has elegido el " + iphone10.nombreDelIphone + "\n Cámara: " + iphone10.megaPixelesCam + "\n Año: " + iphone10.anio + "\n Colores: " + iphone10.color/* VERR */);
        let cuantosLleva10 = parseInt(prompt("¿Cúantos desea llevar?"));
        let cantidadQueLleva10 = (a, b) => (a * b);
        alert (`Has elegido ${cuantosLleva10}.\nTotal a pagar: ${iva (cantidadQueLleva10 (iphone10.precio,cuantosLleva10))} pesos (Incluye el IVA)`);
        const suma10 = (a,b,c) => a + b + c;
        let fundaVidrioTempladoIphone = {funda: 1500, vidrioTemplado:700};  
        const fundaPrompt10 = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoIphone.funda} (pesos) + 
        un vidrio templado a ${fundaVidrioTempladoIphone.vidrioTemplado} (pesos)?`);
        if (fundaPrompt10 === "Si") {
            alert(`Perfecto, su total a pagar es de ${suma10 (iva (cantidadQueLleva10 (iphone10.precio,cuantosLleva10)),
            fundaVidrioTempladoIphone.funda,fundaVidrioTempladoIphone.vidrioTemplado)} pesos \n(Incluye: funda, vidrio templado e IVA)`);
        }else if (fundaPrompt10 === "No") {
            alert(`Tu total a pagar es de: ${iva (cantidadQueLleva10 (iphone10.precio,cuantosLleva10))}`);
            alert ("¡Gracias por su compra, lo esperamos pronto!");
        }else {
            alert ("Algo no anduvo bien, vuelve a introducir los datos solicitados");
        }
    }else if (queModelosQueresIphone === "Iphone 11") {
        alert("Has elegido el " + iphone11.nombreDelIphone + "\n Cámara: " + iphone11.megaPixelesCam + "\n Año: " + iphone11.anio + "\n Colores: " + iphone11.color/* VERR */);
        let cuantosLleva11 = parseInt (prompt("¿Cúantos desea llevar?"));
        let cantidadQueLleva11 = (a, b) => (a * b);
        alert (`Has elegido ${cuantosLleva11}.\nTotal a pagar: ${iva (cantidadQueLleva11 (iphone11.precio,cuantosLleva11))} pesos (Incluye el IVA)`);
        const suma11 = (a,b,c) => a + b + c;
        let fundaVidrioTempladoIphone = {funda: 1500, vidrioTemplado:700 };  
        const fundaPrompt11 = prompt(`¿Desea agregar a su compra una funda a ${fundaVidrioTempladoIphone.funda} (pesos) + 
        un vidrio templado a ${fundaVidrioTempladoIphone.vidrioTemplado} (pesos)?`);
        if (fundaPrompt11 === "Si") {
            alert(`Perfecto, su total a pagar es de ${suma11 (iva (cantidadQueLleva11 (iphone11.precio,cuantosLleva11)),
            fundaVidrioTempladoIphone.funda,fundaVidrioTempladoIphone.vidrioTemplado)} pesos \n(Incluye: funda, vidrio templado e IVA)`);
        }else if (fundaPrompt11 === "No") {
            alert(`Tu total a pagar es de: ${iva (cantidadQueLleva11 (iphone12.precio,cuantosLleva11))}`);
            alert ("¡Gracias por su compra, lo esperamos pronto!");
        }else {
            alert("Algo no salió bien, vuelve a intentarlo");
        }
    }else {
        alert("que pacho");
    }
}
else {
    alert("no nene");

}