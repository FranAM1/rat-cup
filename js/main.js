let participantes = 0;
let campoJuego = document.getElementById("campoJuego");
let botonIniciar = document.getElementById("botonIniciar");
let formParticipantes = document.getElementById("formParticipantes");

/*
do {
    participantes = prompt("Introduce el número de participantes (entre 2 y 6):");
} while (participantes < 2 || participantes > 6);
*/

function crearRatas() {
    for (let i = 0; i < participantes; i++) {
        campoJuego.innerHTML += `
            <div class="border-2 w-full p-4 border-black bg-gray-300 flex items-center">     
                <span class=text-4xl font-bold>${i+1}</span><img src="./assets/rata_corriendo.gif" class="w-50 h-20 relative rata" id=rata${i}>
                <img src="./assets/queso.png" class="w-20 h-30 ml-auto" id=queso${i}>
            </div>
            `;
    }
}

function montarJuego(){
    campoJuego.innerHTML = "";
    formParticipantes.classList.toggle("hidden");
    botonIniciar.classList.toggle("hidden");
    participantes = document.getElementById("participantes").value;
    
    crearRatas();
}

function carrera(){
    let ratas = document.getElementsByClassName("rata");
    for (let i = 0; i < ratas.length; i++) {
        let posicion = ratas[i].offsetLeft;
        let posicionQueso = document.getElementById(`queso${i}`).offsetLeft - 180;
        let random = Math.floor(Math.random() * 60) - 30;

        ratas[i].style.left = posicion + random + "px";

        console.log(ratas[i].offsetLeft, posicionQueso, "Rata: " + i)
        console.log(ratas[i].offsetLeft >= posicionQueso)

        if (ratas[i].offsetLeft >= posicionQueso) {
            alert("La rata " + (i+1) + " ha ganado");
        }

    }
}

function iniciarCarrera(){
    setInterval(carrera, 50);
}

botonIniciar.addEventListener("click", iniciarCarrera);

