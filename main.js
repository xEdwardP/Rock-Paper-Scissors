//Creacion de variables para contar
    let player = 0,
        machine = 0;

// Metodo que de manera aleatoria elige piedra, pepel o tijera
const getComputerChoice = () =>{
    let arms = ["piedra", "papel", "tijera"];
    let randomArm = arms[Math.floor(Math.random() * arms.length)];
    return randomArm;
};

// Variables que contiene la eleccion de la computadora
let computerSelection = getComputerChoice();

// Reproduce una ronda del juego
const playRound = (playerSelection, computerSelection) =>{
    // Convierte la cadena a minusculas
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    console.log(computerSelection)

    if(ps === "piedra" && cs === "piedra" || ps === "papel" && cs === "papel" || ps === "tijera" && cs === "tijera"){
        alert("Empate")
    }

    // Player
    else if(ps === "piedra" && cs === "tijera"){
        alert("Has ganado la ronda");
        player++;
    }
    else if(ps == "papel" && cs === "piedra"){
        alert("Has gando la ronda");
        player++;
    }
    else if(ps == "tijera" && cs === "papel"){
        alert("Has gando la ronda");
        player++;
    }

    // Machine
    else if(ps === "tijera" && cs === "piedra"){
        alert("Has perdido la ronda");
        machine++;
    }
    else if(ps == "piedra" && cs === "papel"){
        alert("Has perdido la ronda")
        machine++;
    }
    else if(ps == "papel" && cs === "tijera"){
        alert("Has perdido la ronda")
        machine++;
    }

    else{
        alert("Hubo un error, quizas escribiste mal tu eleccion, vuelve a intentarlo");
    }
}

const playGame = () =>{
    for(let i = 1; i <= 5; i++){
        alert("Ronda " + i)

        let playerSelection = prompt("Piedra papel o tijera", " ");
        playRound(playerSelection,computerSelection);

        if(i === 5){
            if(player > machine){
                alert("El jugador Gano el juego");
            }
            else if(machine === player){
                alert("Juego empatado");
            }
            else{
                alert("La maquina Gano el juego");
            }
        }
    }
}

playGame();