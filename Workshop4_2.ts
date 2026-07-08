class Rectangle {
    constructor(
    public  height : number ,
    public  width : number 
    ){}

    area(): number{
        return this.height * this.width;
    }
    
}
let rectangle = new Rectangle (200,50);
console.log(`Area of rectangle : ${rectangle.area()}`);