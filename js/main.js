let participantes = 2;
let apuesta = 2;
let campoJuego = document.getElementById("campoJuego");
let botonIniciar = document.getElementById("botonIniciar");
let formParticipantes = document.getElementById("formParticipantes");
let intervalo;
let dinero = localStorage.getItem("dinero");
//asginar dinero inicial
if (dinero == null) {
    dinero = 200;
    localStorage.setItem("dinero", dinero);
}
//mostrar dinero
document.getElementById("dinero").innerHTML += `<span class="font-normal">${dinero}</span>`;

if(dinero < 0){
    document.getElementById("ganando").classList.toggle("hidden");
    document.getElementById("perdiendo").classList.toggle("hidden");
}

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
    participantes = document.getElementById("participantes").value;
    apuesta = document.getElementById("apuesta").value;

    //Gestion para asegurar que apuestas por una rata que participa
    if(apuesta > participantes){
        alert("Has apostado por una rata que no existe, vuelve a elegir")
    }else{
        campoJuego.innerHTML = "";
        formParticipantes.classList.toggle("hidden");
        botonIniciar.classList.toggle("hidden");

        crearRatas();
    }
}

//funcion encargada de realizar los calculos para mover las ratas y ver cual gana en funcion de si su distancia es mayor o igual a la del queso
function carrera(){
    let ratas = document.getElementsByClassName("rata");
    let dineroJuego = 10 * ratas.length
    for (let i = 0; i < ratas.length; i++) {
        let posicion = ratas[i].offsetLeft;
        let posicionQueso = document.getElementById(`queso${i}`).offsetLeft - 200;
        let random = Math.floor(Math.random() * 60) - 30;

        ratas[i].style.left = posicion + random + "px";

        console.log(ratas[i].offsetLeft, posicionQueso, "Rata: " + i)
        console.log(ratas[i].offsetLeft >= posicionQueso)

        if (ratas[i].offsetLeft >= posicionQueso) {
            alert("La rata " + (i+1) + " ha ganado");
            if(apuesta == i+1){
                dinero = parseInt(dinero) + dineroJuego;
                localStorage.setItem("dinero", dinero);
            }else{
                dinero = parseInt(dinero) - dineroJuego;
                localStorage.setItem("dinero", dinero);
            }
            clearInterval(intervalo)
            window.location.reload();
        }

    }
}

function iniciarCarrera(){
    botonIniciar.classList.toggle("hidden");
    intervalo = setInterval(carrera, 50);
}

botonIniciar.addEventListener("click", iniciarCarrera);

