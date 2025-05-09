/* let data = ['Jorge', 'Pablo', 'Jeremias', 'Marcos']

async function getPersonaje(){
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data =  await response.json()
    console.log(data)


}
getPersonaje()

 */

let p1 = []
let p2 = []

let p1attack = []
let p2attack = []

async function getPersonaje(){
    const response1 = await fetch ('https://pokeapi.co/api/v2/pokemon/22/')
    p1 =  await response1.json()

    const response2 = await fetch ('https://pokeapi.co/api/v2/pokemon/8/')
     p2 =  await response2.json()

    console.log('Personaje 1: ' + p1.name)
    console.log('Personaje 2: ' + p2.name)

    /* p1attack = p1.stats[1].base_stat
    p2attack = p2.stats[2].base_stat
    p1attack>p2attack ? console.log(`${p1.name} es mas fuerte porque tiene ${p1attack} puntos de poder. `) : console.log(`{p2.name} es mas fuerte porque tiene ${p2attack} puntos de poder. `) */

    masFuerte()
}

getPersonaje()

/* let p1attack = []
let p2attack = [] */

function masFuerte(){
    p1attack = p1.stats[1].base_stat
    p2attack = p2.stats[2].base_stat

p1attack>p2attack ? console.log(`${p1.name} es mas fuerte porque tiene ${p1attack} puntos de poder. `) : console.log(`${p2.name} es mas fuerte porque tiene ${p2attack} puntos de poder. `)

}


