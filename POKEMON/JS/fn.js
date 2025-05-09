let div1 = document.getElementById(111) 

/* alert(div1) */
/* div1.textContent = "Tralalero tralala" */

/* div1.innerHTML = '<b>hola q tal aseré ja deje</b>' */

/* function saludar(){
    div1.innerHTML = '<b>si aparece esto es pq funciona</b>'
} */

/* bb.addEventListener("click", function(saludar){
    div1.innerHTML = '<b>si aparece esto es pq funciona</b>'
}) */

document.getElementById('scrollbutton').addEventListener('click', function scrollToForm() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' })})


document.getElementById('boton').addEventListener('click', function luchar(){
    let pk1 = document.getElementById('pokemon1').value;
    const pk2 = document.getElementById('pokemon2').value;
    


/*          console.log('Personaje 1: ' + pk1)
         console.log('Personaje 2: ' + pk2) */
         getPersonaje(pk1, pk2)
}
)

let p1 = []
let p2 = []

let p1attack = []
let p2attack = []

async function getPersonaje(p1, p2){
    const response1 = await fetch (`https://pokeapi.co/api/v2/pokemon/${p1}/`)
    p1 =  await response1.json()

    const response2 = await fetch (`https://pokeapi.co/api/v2/pokemon/${p2}/`)
        p2 =  await response2.json()
        console.log('Personaje 1: ' + p1.name)
        console.log('Personaje 2: ' + p2.name)
    
        let p1attack = p1.stats[1].base_stat
        let p2attack = p2.stats[2].base_stat
        

        let ganador
        if (p1attack > p2attack) {
            ganador = p1.name
            ganadoratack = p1attack
            ganadorimg = p1.sprites.front_default
        } else if (p1attack < p2attack) {
            ganador = p2.name
            ganadoratack = p2attack
            ganadorimg = p2.sprites.front_default
        }
        


        document.getElementById("resultado").innerHTML = `
        <div class="resultado1">
            <div class="card">
                <h3>${p1.name}</h3>
                <p>Puntos de ataque: ${p1attack}</p>
                <img src=${p1.sprites.front_default}>
            </div>

            <div class="card">
                <h3>${p2.name}</h3>
                <p>Puntos de ataque: ${p2attack}</p>
                <img src=${p2.sprites.front_default}>
            </div>
        </div>
        
        <p>El pokemon ganador es</P>
      
        <div class="contenedor-ganador">
            <div class="ganador">
                    <h3>${ganador}</h3>
                    <img src = ${ganadorimg}>
                    <p>con ${ganadoratack} puntos de ataque</p>
                </div>
        </div>
        `

         
        
    }

