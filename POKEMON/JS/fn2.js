let tiradaMasAlta1 = 1
let tiradaMasAlta2 = 1
let dado = 1
let tiradas1 = 0
let tiradas2 = 0



document.getElementById('dado1').addEventListener('click', function tirarDados(){

    if (tiradas1<3){
        tiradas1++
        dadoA = Math.floor(Math.random()  * (6 - 1 + 1) + 1)
        dadoB = Math.floor(Math.random()  * (6 - 1 + 1) + 1)
        let sumaDados = dadoA + dadoB
        console.log(dado)
        if ((dadoA+dadoB)>=tiradaMasAlta1){
            tiradaMasAlta1 = dadoA+dadoB
        }
    console.log(tiradas1)
    }   
    if (tiradas1===3){
        document.getElementById("dado1").disabled = true
    }
     if (tiradas1+tiradas2==6){
    document.getElementById("pelea").disabled = false
}

    document.getElementById('tiradas1').innerHTML = `
    <div>

        <div class="tiradas">
            <p>Dado A: ${dadoA}</p>
            <p>Dado B: ${dadoB}</p>
            
            <h4>Suma de dados mas alta: ${tiradaMasAlta1}</h4>
        </div>

    </div>`

})

document.getElementById('dado2').addEventListener('click', function tirarDados(){

    if (tiradas2<3){
        tiradas2++
        dadoA = Math.floor(Math.random()  * (6 - 1 + 1) + 1)
        dadoB = Math.floor(Math.random()  * (6 - 1 + 1) + 1)
        console.log(dado)

    if ((dadoA+dadoB)>=tiradaMasAlta2){
            tiradaMasAlta2 = dadoA+dadoB
        }
    console.log(tiradas2)
    }
    if (tiradas2===3){
        document.getElementById("dado2").disabled = true
    }

    if (tiradas1+tiradas2==6){
    document.getElementById("pelea").disabled = false

}
    document.getElementById('tiradas2').innerHTML = `
    <div>

        <div class="tiradas">
            <p>Dado A: ${dadoA}</p>
            <p>Dado B: ${dadoB}</p>
            
            <h4>Suma de dados mas alta: ${tiradaMasAlta2}</h4>
        </div>

    </div>`

})







