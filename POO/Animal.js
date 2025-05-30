class Animal {
    Nombre;
    Raza;
    Color;
    Edad;
    
    constructor(Nombre, Raza, Color, Edad) {
        this.Nombre=Nombre
        this.Raza=Raza
        this.Color=Color
        this.Edad=Edad
    }

    hablar(){
        return 'guau';
    }
}

let jazmin = new Animal("Jazmin", "Perro", "Marron", "15")

console.log(jazmin.hablar())
console.log(jazmin.Nombre)