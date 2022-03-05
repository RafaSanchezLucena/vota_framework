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

    // Nos permite repintar la pantalla después de cada puntuación.
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            if (puntuacionOrdenada[0].nombre === "angular" & puntuacionOrdenada[1].nombre === "react" & puntuacionOrdenada[2].nombre === "svelte" & puntuacionOrdenada[3].nombre === "vue") {
                uno.className = "element uno";
                dos.className = "element dos";
                tres.className = "element tres";
                cuatro.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "react" & puntuacionOrdenada[1].nombre === "angular" & puntuacionOrdenada[2].nombre === "svelte" & puntuacionOrdenada[3].nombre === "vue") {
                dos.className = "element uno";
                uno.className = "element dos";
                tres.className = "element tres";
                cuatro.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "react" & puntuacionOrdenada[1].nombre === "svelte" & puntuacionOrdenada[2].nombre === "angular" & puntuacionOrdenada[3].nombre === "vue") {
                dos.className = "element uno";
                tres.className = "element dos";
                uno.className = "element tres";
                cuatro.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "react" & puntuacionOrdenada[1].nombre === "svelte" & puntuacionOrdenada[2].nombre === "vue" & puntuacionOrdenada[3].nombre === "angular") {
                dos.className = "element uno";
                tres.className = "element dos";
                cuatro.className = "element tres";
                uno.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "angular" & puntuacionOrdenada[1].nombre === "svelte" & puntuacionOrdenada[2].nombre === "react" & puntuacionOrdenada[3].nombre === "vue") {
                uno.className = "element uno";
                tres.className = "element dos";
                dos.className = "element tres";
                cuatro.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "angular" & puntuacionOrdenada[1].nombre === "svelte" & puntuacionOrdenada[2].nombre === "vue" & puntuacionOrdenada[3].nombre === "react") {
                uno.className = "element uno";
                tres.className = "element dos";
                cuatro.className = "element tres";
                dos.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "angular" & puntuacionOrdenada[1].nombre === "react" & puntuacionOrdenada[2].nombre === "vue" & puntuacionOrdenada[3].nombre === "svelte") {
                uno.className = "element uno";
                dos.className = "element dos";
                cuatro.className = "element tres";
                tres.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "svelte" & puntuacionOrdenada[1].nombre === "angular" & puntuacionOrdenada[2].nombre === "react" & puntuacionOrdenada[3].nombre === "vue") {
                tres.className = "element uno";
                uno.className = "element dos";
                dos.className = "element tres";
                cuatro.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "svelte" & puntuacionOrdenada[1].nombre === "react" & puntuacionOrdenada[2].nombre === "angular" & puntuacionOrdenada[3].nombre === "vue") {
                tres.className = "element uno";
                dos.className = "element dos";
                uno.className = "element tres";
                cuatro.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "svelte" & puntuacionOrdenada[1].nombre === "react" & puntuacionOrdenada[2].nombre === "vue" & puntuacionOrdenada[3].nombre === "angular") {
                tres.className = "element uno";
                dos.className = "element dos";
                cuatro.className = "element tres";
                uno.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "svelte" & puntuacionOrdenada[1].nombre === "angular" & puntuacionOrdenada[2].nombre === "vue" & puntuacionOrdenada[3].nombre === "react") {
                tres.className = "element uno";
                uno.className = "element dos";
                cuatro.className = "element tres";
                dos.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "svelte" & puntuacionOrdenada[1].nombre === "vue" & puntuacionOrdenada[2].nombre === "angular" & puntuacionOrdenada[3].nombre === "react") {
                tres.className = "element uno";
                cuatro.className = "element dos";
                uno.className = "element tres";
                dos.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "svelte" & puntuacionOrdenada[1].nombre === "vue" & puntuacionOrdenada[2].nombre === "react" & puntuacionOrdenada[3].nombre === "angular") {
                tres.className = "element uno";
                cuatro.className = "element dos";
                dos.className = "element tres";
                uno.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "angular" & puntuacionOrdenada[1].nombre === "vue" & puntuacionOrdenada[2].nombre === "react" & puntuacionOrdenada[3].nombre === "svelte") {
                uno.className = "element uno";
                cuatro.className = "element dos";
                dos.className = "element tres";
                tres.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "angular" & puntuacionOrdenada[1].nombre === "vue" & puntuacionOrdenada[2].nombre === "svelte" & puntuacionOrdenada[3].nombre === "react") {
                uno.className = "element uno";
                cuatro.className = "element dos";
                tres.className = "element tres";
                dos.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "vue" & puntuacionOrdenada[1].nombre === "angular" & puntuacionOrdenada[2].nombre === "react" & puntuacionOrdenada[3].nombre === "svelte") {
                cuatro.className = "element uno";
                uno.className = "element dos";
                dos.className = "element tres";
                tres.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "vue" & puntuacionOrdenada[1].nombre === "react" & puntuacionOrdenada[2].nombre === "angular" & puntuacionOrdenada[3].nombre === "svelte") {
                cuatro.className = "element uno";
                dos.className = "element dos";
                uno.className = "element tres";
                tres.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "vue" & puntuacionOrdenada[1].nombre === "react" & puntuacionOrdenada[2].nombre === "svelte" & puntuacionOrdenada[3].nombre === "angular") {
                cuatro.className = "element uno";
                dos.className = "element dos";
                tres.className = "element tres";
                uno.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "vue" & puntuacionOrdenada[1].nombre === "angular" & puntuacionOrdenada[2].nombre === "svelte" & puntuacionOrdenada[3].nombre === "react") {
                cuatro.className = "element uno";
                uno.className = "element dos";
                tres.className = "element tres";
                dos.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "vue" & puntuacionOrdenada[1].nombre === "svelte" & puntuacionOrdenada[2].nombre === "angular" & puntuacionOrdenada[3].nombre === "react") {
                cuatro.className = "element uno";
                tres.className = "element dos";
                uno.className = "element tres";
                dos.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "vue" & puntuacionOrdenada[1].nombre === "svelte" & puntuacionOrdenada[2].nombre === "react" & puntuacionOrdenada[3].nombre === "angular") {
                cuatro.className = "element uno";
                tres.className = "element dos";
                dos.className = "element tres";
                uno.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "react" & puntuacionOrdenada[1].nombre === "angular" & puntuacionOrdenada[2].nombre === "vue" & puntuacionOrdenada[3].nombre === "svelte") {
                dos.className = "element uno";
                uno.className = "element dos";
                cuatro.className = "element tres";
                tres.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "react" & puntuacionOrdenada[1].nombre === "vue" & puntuacionOrdenada[2].nombre === "angular" & puntuacionOrdenada[3].nombre === "svelte") {
                dos.className = "element uno";
                cuatro.className = "element dos";
                uno.className = "element tres";
                tres.className = "element cuatro";
            };
            if (puntuacionOrdenada[0].nombre === "react" & puntuacionOrdenada[1].nombre === "vue" & puntuacionOrdenada[2].nombre === "svelte" & puntuacionOrdenada[3].nombre === "angular") {
                dos.className = "element uno";
                cuatro.className = "element dos";
                tres.className = "element tres";
                uno.className = "element cuatro";
            };
        });
    });

};
