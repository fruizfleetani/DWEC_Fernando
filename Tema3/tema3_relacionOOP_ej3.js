


//Write a Lambdasian class.

class Lambdasian{
    constructor(objDatos){
        this.name = objDatos.name
        this.age = objDatos.age
        this.location = objDatos.location

    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

//Its constructor takes a single argument - an object with the following keys:
//name
//age
//location

//Its constructor should initialize name, age and location properties on the instance.


//Instances of Lambdasian should be able to .speak():
//Speaking should return a phrase Hello my name is {name}, I am from {location}.
//{name} and {location} of course come from the instance's own properties.

datos= {
    name: "Fernando",
    age: 19,
    location: "Mi casa"
}
var milamb = new Lambdasian(datos)
