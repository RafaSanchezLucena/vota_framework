// Esta función es la encargada de ordenar el array de objetos según el valor de la propiedad "value".
export const ordenarPuntuacion = (puntuacionSinOrdenar) => {
    const puntuacionOrdenada = puntuacionSinOrdenar.sort((a, b) => {
        if (a.value < b.value) {
            return 1;
        };
        if (a.value > b.value) {
            return -1;
        }
        return 0;
    })
    return puntuacionOrdenada;
};


// Mediante esta función ordenamos las figuras en pantalla en orde descendiente según su puntuación.
export const ordenarFiguras = (puntuacionOrdenada) => {
    // Cada vez que puntuamos, situamos las figuras arriba.
    uno.className = "element";
    dos.className = "element";
    tres.className = "element";
    cuatro.className = "element";
    // Nos permite repintar la pantalla después de cada puntuación y según la puntuación obtenida, ordenamos
    // las figuras.
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            let posicionUno = puntuacionOrdenada[0].nombre;
            switch(posicionUno) {
                case "angular":
                    uno.className = "element uno";
                    break;
                case "react":
                    dos.className = "element uno";
                    break;
                case "svelte":
                    tres.className = "element uno";
                    break;
                default:
                    cuatro.className = "element uno";
            };
            let posicionDos = puntuacionOrdenada[1].nombre;
            switch (posicionDos) {
                case "angular":
                    uno.className = "element dos";
                    break;
                case "react":
                    dos.className = "element dos";
                    break;
                case "svelte":
                    tres.className = "element dos";
                    break;
                default:
                    cuatro.className = "element dos";
            };
            let posicionTres = puntuacionOrdenada[2].nombre;
            switch (posicionTres) {
                case "angular":
                    uno.className = "element tres";
                    break;
                case "react":
                    dos.className = "element tres";
                    break;
                case "svelte":
                    tres.className = "element tres";
                    break;
                default:
                    cuatro.className = "element tres";
            };
            let posicionCuatro = puntuacionOrdenada[3].nombre;
            switch (posicionCuatro) {
                case "angular":
                    uno.className = "element cuatro";
                    break;
                case "react":
                    dos.className = "element cuatro";
                    break;
                case "svelte":
                    tres.className = "element cuatro";
                    break;
                default:
                    cuatro.className = "element cuatro";
            };
        });
    });

};
