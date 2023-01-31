let participantes = 6;
let campoJuego = document.getElementById("campoJuego");
let botonIniciar = document.getElementById("botonIniciar");

/*
do {
    participantes = prompt("Introduce el número de participantes (entre 2 y 6):");
} while (participantes < 2 || participantes > 6);
*/

for (let i = 0; i < participantes; i++) {
    campoJuego.innerHTML += `
        <div class="border-2 w-full p-4 border-black bg-gray-300 flex items-center">     
            <span class=text-4xl font-bold>${i+1}</span><img src="./assets/rata_corriendo.gif" class="w-50 h-20 relative rata" id=rata${i}>
            <img src="./assets/queso.png" class="w-20 h-30 ml-auto" id=queso${i}>
        </div>
        `;
}

function carrera(){
    let ratas = document.getElementsByClassName("rata");
    console.log(ratas)
    for (let i = 0; i < ratas.length; i++) {
        ratas[i].style.left = Math.floor(Math.random() * 100) + "%";
        ratas[i].style.right = Math.floor(Math.random() * 100) + "%";
    }
}

function iniciarCarrera(){
    carrera();
    setInterval(carrera, 1000);
}

botonIniciar.addEventListener("click", iniciarCarrera);

