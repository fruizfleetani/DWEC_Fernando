//Write a Person class whose constructor initializes name and age from arguments.

class Person{
    //All instances of Person should also initialize with an empty stomach array.
    
    constructor(name, age){
        this.name = name
        this.age = age
        this.stomach = []
    }

    eat(someFood){
        //Give instances of Person the ability to .eat("someFood"):
        //When eating an edible, it should be pushed into the stomach.
        //The eat method should have no effect if there are 10 items in the stomach.

        if (this.stomach.length < 10)
            this.stomach.push(someFood)
    
    }

    poop(){
        //Give instances of Person the ability to .poop():
        //When an instance poops, its stomach should empty.

        this.stomach.splice(0,this.stomach.length)
    }

    toString(){

        //Give instances of Person a method .toString():
        //It should return a string with name and age. Example: "Mary, 50"
        
        return `${this.name}, ${this.age}`
    }

}









