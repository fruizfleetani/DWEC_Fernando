//Write an Instructor class extending Lambdasian.



class Lambdasian{
   constructor(objDatos){
       this.nombre = objDatos.name
       this.age = objDatos.age
       this.location = objDatos.location

   }

   speak(){
       return `Hello my name is ${this.name}, I am from ${this.location}`
   }
}


class Instructor extends Lambdasian{
   constructor(objDatos){
       //Its constructor takes a single argument
       //- an object with the following keys:
       //All the keys used to initialize instances of Lambdasian.
       //specialty: what the instance of Instructor is good at, i.e. 'redux'
       //favLanguage: i.e. 'JavaScript, Python, Elm etc.'
       //catchPhrase: i.e. Don't forget the homies.

       //The constructor calls the parent constructor passing it what it needs.

       //The constructor should also initialize specialty, favLanguage and catchPhrase properties on the instance.
       super(nombre, age, location)
       this.specialty = objDatos.specialty
       this.favlanguage = objDatos.favlanguage
       this.catchPhrase = objDatos.catchPhrase
   }
   //Instructor instances have the following methods:

   demo(subject){
       //demo receives a subject string as an argument and returns the phrase
       //'Today we are learning about {subject}' where subject is the param passed in.
        return `Today we are learning about ${subject}`
   }
   grade(student, subject){
       //grade receives a student object and a subject string as arguments and returns '{student.name} receives a perfect score on {subject}'
       return `${student.name} receives a perfect score on ${subject}`
   }
}







datos = {
   name: "Fernando",
   age: 19,
   location: "Mi casa",
   specialty: "Redux",
   favlanguage: "JavaScript",
   catchPhrase: `Don't forget the homies`
}
alumno = {
   name: `Kylian`,
   surname: 'Mbappe'

}
var miIns = new Instructor(datos) Enviado desde mi iPhone