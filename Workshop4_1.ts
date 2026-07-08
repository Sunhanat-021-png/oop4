class Animal {
    species : string ;
    sound : string ;

    constructor(s: string, t: string){
        this.species = s;
        this.sound = t;
    }
    show():void{
        console.log(`Animal species: ${this.species}, sound :${this.sound}`)}
}
let animal1 = new Animal("dog","brak");
let animal2= new Animal("cat","meow");
animal1.show();
animal2.show();