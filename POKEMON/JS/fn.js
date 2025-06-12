/* Variables para generar los numeros de pokemones aleatorios */
let pokemon = []

/* Variable para llamar a la api y traer pokemones */

/* Variables para hacer luchar pokemones */
let pAttack = []
let pDefense = []

let ganador = []
let ganadorAtack = []
let ganadorImg = []

let puntosRestantesDefense = 0
let tipoVictoria = ""




document.getElementById('scrollbutton').addEventListener('click', function scrollToForm() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' })})



/* Genero 6 numeros de pokemon de manera aleatoria */
pokemonesRandom()
function pokemonesRandom(){
     for (var i = 0; i < 6; i++){
        let min = 1
        let max = 1010
        pokemon[i] =  Math.floor(Math.random() * (max - min + 1) + min)

        console.log(`Pokemon ${i+1}: ` + pokemon[i])
  } 
    getPersonaje(pokemon) 
 }


/* Llamo a la API con un for asi consulto todos los personajes con menos lineas de codigo */
async function getPersonaje(p){
    
    for (var i=0; i<6; i++){
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${p[i]}/`)
    p[i] =  await response.json()

    console.log(`Personaje ${i+1}: ` + p[i].name)

/* 2 arrays con los valores de defensa y ataque de todos los pokemones */
    pAttack[i] = p[i].stats[1].base_stat
    pDefense[i] = p[i].stats[2].base_stat

    

    console.log(pAttack[i])
    console.log(pDefense[i])
} 
insertarPersonajes(p)
}
let e1Attack = pAttack[0]+pAttack[1]+pAttack[2]
let e1Defense = pDefense[0]+pDefense[1]+pDefense[2]
        

function insertarPersonajes(p){

    let e1Attack = pAttack[0]+pAttack[1]+pAttack[2]
    let e1Defense = pDefense[0]+pDefense[1]+pDefense[2]

    let e2Attack = pAttack[3]+pAttack[4]+pAttack[5]
    let e2Defense = pDefense[3]+pDefense[4]+pDefense[5]

    document.getElementById("participantes").innerHTML = `
    <div class="resultado1">
        <div class="e-card" style="background-color: rgb(151, 91, 255);">
            <div class="e">
                <div class="card">
                    <h3>${p[0].name}</h3>
                    <img src=${p[0].sprites.front_default}>
                    <p>Puntos de ataque: ${pAttack[0]}</p>
                    <p>Puntos de defensa: ${pDefense[0]}</p>

                    
                </div>

                <div class="card">
                    <h3>${p[1].name}</h3>
                    <img src=${p[1].sprites.front_default}>
                    <p>Puntos de ataque: ${pAttack[1]}</p>
                    <p>Puntos de defensa: ${pDefense[1]}</p>

                </div>

                <div class="card">
                    <h3>${p[2].name}</h3>
                    <img src=${p[2].sprites.front_default}>
                    <p>Puntos de ataque: ${pAttack[2]}</p>
                    <p>Puntos de defensa: ${pDefense[2]}</p>
                </div>

            </div>
                <p>Puntos de ataque ${e1Attack}</p>
                <p>Puntos de defensa ${e1Defense}</p>

        </div>

        <h2>VS</h2>

        <div class="e-card" style="background-color: rgb(201, 110, 204);">
            <div class="e">
            
                <div class="card">
                        <h3>${p[3].name}</h3>
                        <img src=${p[3].sprites.front_default}>
                        <p>Puntos de ataque: ${pAttack[3]}</p>
                        <p>Puntos de defensa: ${pDefense[3]}</p>
                    </div>

                    <div class="card">
                        <h3>${p[4].name}</h3>
                        <img src=${p[4].sprites.front_default}>
                        <p>Puntos de ataque: ${pAttack[4]}</p>
                        <p>Puntos de defensa: ${pDefense[4]}</p>
                    </div>

                    <div class="card">
                        <h3>${p[5].name}</h3>
                        <img src=${p[5].sprites.front_default}>
                        <p>Puntos de ataque: ${pAttack[5]}</p>
                        <p>Puntos de defensa: ${pDefense[5]}</p>
                    </div>
            </div>
            <p>Puntos de ataque ${e2Attack}</p>
            <p>Puntos de defensa ${e2Defense}</p>
        </div>

    </div>
            
    
    `


    document.getElementById("pelea").addEventListener("click", pelea(p));
    

}   

/* -------------------------------------------------------------------------- */
/* Reemplazo */
    function pelea(p){

        console.log(p)

        let e1Attack = pAttack[0]+pAttack[1]+pAttack[2]
        let e1Defense = pDefense[0]+pDefense[1]+pDefense[2]
        
        let e2Attack = pAttack[3]+pAttack[4]+pAttack[5]
        let e2Defense = pDefense[3]+pDefense[4]+pDefense[5]


        let indice = -1
        if ((e1Defense - e2Attack) > (e2Defense - e1Attack)) {
            indice = 0
            puntosRestantesDefense = e1Defense - e2Attack
            tipoVictoria = "Batalla"


            puntosRestantesDefense = e1Defense - e2Attack
        } else if ((e1Defense - e2Attack) < (e2Defense - e1Attack)) {
            indice = 3
            puntosRestantesDefense = e2Defense - e1Attack
            tipoVictoria = "Batalla"
        }
        else if ((e1Defense - e2Attack) == (e2Defense - e1Attack)){
            if (tiradaMasAlta1>tiradaMasAlta2){
                indice = 0
                puntosRestantesDefense = e1Defense - e2Attack
                tipoVictoria = "Desempate por dados"
            }
            else if (tiradaMasAlta1<tiradaMasAlta2){
                indice = 0
                puntosRestantesDefense = e2Defense - e1Attack
                tipoVictoria = "Desempate por dados"
            }
            }
                console.log(tiradaMasAlta1)
                console.log(tipoVictoria)

        

        if (indice !== -1) {
            for (let i = 0; i < 3; i++) {
                ganador[i] = p[indice + i].name
                ganadorAtack[i] = pAttack[indice + i]
                ganadorImg[i] = p[indice + i].sprites.front_default
            }
        }
    }

    
function mostrarResultados(ganador, ganadorAtack, ganadorImg){
    document.getElementById("resultado").innerHTML = `
       
        
        <p>El equipo ganador es</P>
      
        <div class="contenedor-ganador">
            <div class="ganador">
                    <h3>${ganador[0]}</h3>
                    <img src = ${ganadorImg[0]}>
                    <p>con ${ganadorAtack[0]} puntos de ataque</p>
                </div>
                
                <div class="ganador">
                    <h3>${ganador[1]}</h3>
                    <img src = ${ganadorImg[1]}>
                    <p>con ${ganadorAtack[1]} puntos de ataque</p>
                </div>

                <div class="ganador">
                    <h3>${ganador[2]}</h3>
                    <img src = ${ganadorImg[2]}>
                    <p>con ${ganadorAtack[2]} puntos de ataque</p>
                </div>
                
        </div>
        <p>Le quedaron <strong>${puntosRestantesDefense}</strong> puntos de defensa</p>
        <p>Tipo de victoria: <strong>${tipoVictoria}</strong></p>

        `
    }