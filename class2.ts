class Car{
    brand: string;
    model: string;
    type : string;
    door : number;
    engine: number ;

    constructor(b: string, m: string, t: string, d: number, e: number ){
        this.brand = b;
        this.model = m;
        this.type = t ;
        this.door = d ;
        this.engine = e ;
    }

    show():void{
        console.log(`Car Brand: ${this.brand}, model :${this.model}, type : ${this.type},door : ${this.door},engine: ${this.engine} `);
    }
    chgengine(newengine: number):void{
        this.engine=newengine; 
        console.log(this.brand,this.model,"engine change to : ",this.engine);
    }
}
const  car1 = new Car("Toyota","camry","Sedan",4,300000);
car1.show();
const  car2 = new Car("Isuzu","Mux","Truck",5,255550);
car2.show();
car1.chgengine(300000);
car1.show();
car2.chgengine(255550);
car2.show();