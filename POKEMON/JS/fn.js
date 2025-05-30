/* Variables para generar los numeros de pokemones aleatorios */
let pokemon = []

/* Variable para llamar a la api y traer pokemones */
let p = []

/* Variables para hacer luchar pokemones */
let pAttack = []
let pDefense = []



document.getElementById('scrollbutton').addEventListener('click', function scrollToForm() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' })})


/* function pokemonesRandom(min, max) {
   

    for (var i = 0; i < 6; i++){
        pokemon[i] =  Math.floor(Math.random() * (max - min + 1) + min)

        console.log(`Pokemon ${i}: ` + pokemon[i])
  } 
    getPersonaje(pokemon) 
 } */

 /* document.getElementById('boton').addEventListener('click',  */
 function pokemonesRandom(){
     for (var i = 0; i < 6; i++){
        let min = 1
        let max = 1010
        pokemon[i] =  Math.floor(Math.random() * (max - min + 1) + min)

        console.log(`Pokemon ${i+1}: ` + pokemon[i])
  } 
    getPersonaje(pokemon) 
 }
/* ) */

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
        document.getElementById("participantes").innerHTML = `
        <div class="resultado1">
            <div class="e1">
                
                <div class="card">
                    <h3>${p[0].name}</h3>
                    <p>Puntos de ataque: ${pAttack[0]}</p>
                    <img src=${p[0].sprites.front_default}>
                </div>

                <div class="card">
                    <h3>${p[1].name}</h3>
                    <p>Puntos de ataque: ${pAttack[1]}</p>
                    <img src=${p[1].sprites.front_default}>
                </div>

                <div class="card">
                    <h3>${p[2].name}</h3>
                    <p>Puntos de ataque: ${pAttack[2]}</p>
                    <img src=${p[2].sprites.front_default}>
                </div>
            </div>

            <h2>VS</h2>

            <div class="e2">
                
                <div class="card">
                    <h3>${p[3].name}</h3>
                    <p>Puntos de ataque: ${pAttack[3]}</p>
                    <img src=${p[3].sprites.front_default}>
                </div>

                <div class="card">
                    <h3>${p[4].name}</h3>
                    <p>Puntos de ataque: ${pAttack[4]}</p>
                    <img src=${p[4].sprites.front_default}>
                </div>

                <div class="card">
                    <h3>${p[5].name}</h3>
                    <p>Puntos de ataque: ${pAttack[5]}</p>
                    <img src=${p[5].sprites.front_default}>
                </div>
            </div>

        </div>`
        pelea(pAttack, pDefense, p)
}
        
function pelea(pAttack, pDefense, p){

        
        let ganador = []
        let ganadoratack = []
        let ganadorimg = []

        let e1Attack = pAttack[0]+pAttack[1]+pAttack[2]
        let e1Defense = pDefense[0]+pDefense[1]+pDefense[2]
        
        
        let e2Attack = pAttack[3]+pAttack[4]+pAttack[5]
        let e2Defense = pDefense[3]+pDefense[4]+pDefense[5]

        
        if ((e1Defense - e2Attack) > (e2Defense - e1Attack)) {
            ganador[0] = p[0].name 
            ganador[1] = p[1].name 
            ganador[2] = p[2].name 
            
            ganadoratack[0] = pAttack[0]
            ganadoratack[1] = pAttack[1]
            ganadoratack[2] = pAttack[2]

            ganadorimg [0]= p[0].sprites.front_default
            ganadorimg[1] = p[1].sprites.front_default
            ganadorimg[2] = p[2].sprites.front_default

        } else if ((e1Defense - e2Attack) < (e2Defense - e1Attack)) {
            ganador[0] = p[3].name 
            ganador[1] = p[4].name 
            ganador[2] = p[5].name 
            
            ganadoratack[0] = pAttack[3]
            ganadoratack[1] = pAttack[4]
            ganadoratack[2] = pAttack[5]

            ganadorimg[0] = p[3].sprites.front_default
            ganadorimg[1] = p[4].sprites.front_default
            ganadorimg[2] = p[5].sprites.front_default

        }
        
    

    /* Reemplazo */

    
        document.getElementById("resultado").innerHTML = `
       
        
        <p>El equipo ganador es</P>
      
        <div class="contenedor-ganador">
            <div class="ganador">
                    <h3>${ganador[0]}</h3>
                    <img src = ${ganadorimg[0]}>
                    <p>con ${ganadoratack[0]} puntos de ataque</p>
                </div>
                
                <div class="ganador">
                    <h3>${ganador[1]}</h3>
                    <img src = ${ganadorimg[1]}>
                    <p>con ${ganadoratack[1]} puntos de ataque</p>
                </div>

                <div class="ganador">
                    <h3>${ganador[2]}</h3>
                    <img src = ${ganadorimg[2]}>
                    <p>con ${ganadoratack[2]} puntos de ataque</p>
                </div>
        </div>
        `

    }  
    
