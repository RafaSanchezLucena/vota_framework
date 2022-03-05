// Importamos funciones
import { ordenarPuntuacion, ordenarFiguras } from "./ordenar.js";

// Seleccionamos los elementos: figuras, botones y párrafos.
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const botonUno = document.querySelector("#boton__uno");
const botonDos = document.querySelector("#boton__dos");
const botonTres = document.querySelector("#boton__tres");
const botonCuatro = document.querySelector("#boton__cuatro");
const parrafo1 = document.querySelector("#parrafo__uno");
const parrafo2 = document.querySelector("#parrafo__dos");
const parrafo3 = document.querySelector("#parrafo__tres");
const parrafo4 = document.querySelector("#parrafo__cuatro");

// Convertimos en números los valores de la puntuaciones.
var valor1 = Number();
var valor2 = Number();
var valor3 = Number();
var valor4 = Number();

// Inicializamos la puntuación y asignamos el valor a la propiedad "nombre".
const puntuacion = [
    { nombre: "angular", value: 0},
    { nombre: "react", value: 0},
    { nombre: "svelte", value: 0},
    { nombre: "vue", value: 0}
];

// Mediante esta función situamos las figuras en la posición inicial.
const posicionInicial = () => {
    uno.className = "element uno";
    dos.className = "element dos";
    tres.className = "element tres";
    cuatro.className = "element cuatro";
};

posicionInicial();

// Botones principales
botonUno.addEventListener("click", () => {
    valor1++
    // Buscamos el índice en el array de cada elemento y comparamos el valor.
    let indice = puntuacion.findIndex((element) => element.nombre === "angular");
    puntuacion[indice].value = valor1;
    parrafo1.innerHTML = valor1;
    let puntuacionOrdenada = ordenarPuntuacion(puntuacion);
    ordenarFiguras(puntuacionOrdenada);
});

botonDos.addEventListener("click", () => {
    valor2++;
    let indice = puntuacion.findIndex((element) => element.nombre === "react");
    puntuacion[indice].value = valor2;
    parrafo2.innerHTML = valor2;
    let puntuacionOrdenada = ordenarPuntuacion(puntuacion);
    ordenarFiguras(puntuacionOrdenada);
});

botonTres.addEventListener("click", () => {
    valor3++;
    let indice = puntuacion.findIndex((element) => element.nombre === "svelte");
    puntuacion[indice].value = valor3;
    parrafo3.innerHTML = valor3;
    let puntuacionOrdenada = ordenarPuntuacion(puntuacion);
    ordenarFiguras(puntuacionOrdenada);
});

botonCuatro.addEventListener("click", () => {
    valor4++;
    let indice = puntuacion.findIndex((element) => element.nombre === "vue");
    puntuacion[indice].value = valor4;
    parrafo4.innerHTML = valor4;
    let puntuacionOrdenada = ordenarPuntuacion(puntuacion);
    ordenarFiguras(puntuacionOrdenada);
});

