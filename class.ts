class Computer {
    brand:  string;
    cpu:  string;
    ram:  number;
    price: number;

    constructor(b:string, c:string, r:number, p:number){
         this.brand = b;
         this.cpu = c;
         this.ram = r;
         this.price = p;
    }
    show():void{
        console.log("Computer brand ",this.brand,"CPU: ",this.cpu,"RAM: ",this.ram," Price: ",this.price," บาท ")
    }
}
const Computer1 = new Computer("Dell","Intel",64,24500);
const Computer2 = new Computer("HP","AMD",32,12250);
Computer1.show();
Computer2.show();