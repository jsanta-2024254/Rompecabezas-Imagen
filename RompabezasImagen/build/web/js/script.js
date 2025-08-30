let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");
let timeDisplay = document.getElementById("time");

let piezas = [
    "split-1.jpeg", "split-2.jpeg", "split-3.jpeg", "split-4.jpeg",
    "split-5.jpeg", "split-6.jpeg", "split-7.jpeg", "split-8.jpeg",
    "split-9.jpeg", "split-10.jpeg", "split-11.jpeg", "split-12.jpeg",
    "split-13.jpeg", "split-14.jpeg", "split-15.jpeg", ""
];
let estado = [];
let timer;
let timeLeft = 596; // 9 minutes 56 seconds

function mezclar(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function dibujar() {
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        if (valor === "") {
            celda.classList.add("vacio");
        } else {
            celda.style.backgroundImage = `url('Image/${valor}')`;
            celda.addEventListener("click", () => mover(i));
        }
        puzzleContainer.appendChild(celda);
    });
}

function mover(indice) {
    let vacio = estado.indexOf("");
    let filas = 4;
    let col = indice % filas;
    let fila = Math.floor(indice / filas);
    let colVacio = vacio % filas;
    let filaVacio = Math.floor(vacio / filas);

    if (
        (Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
        (Math.abs(fila - filaVacio) === 1 && col === colVacio)
    ) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}

function verificar() {
    if (JSON.stringify(estado) === JSON.stringify(piezas)) {
        clearInterval(timer);
        mensaje.innerText = "¡Felicidades! Completaste el rompecabezas.";
        alert("¡Felicidades! Has completado el rompecabezas.");
    }
}

function iniciarTemporizador() {
    clearInterval(timer);
    timeLeft = 596; // Reset to 9:56
    timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timeDisplay.innerText = `Tiempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            mensaje.innerText = "¡Tiempo agotado! Juego terminado.";
            alert("¡Tiempo agotado! Juego terminado.");
        } else {
            timeLeft--;
        }
    }, 1000);
}

function reiniciar() {
    clearInterval(timer);
    estado = mezclar(piezas);
    mensaje.innerText = "";
    dibujar();
    iniciarTemporizador();
}

reiniciar();