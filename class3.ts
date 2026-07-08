class House {
    constructor(public room:number,public bathroom:number,public area:number ,public price : number,public bedroom: number){

    }
    show():void{
        console.log(`House =: ${this.room}, bathroom :${this.bathroom}, area : ${this.area},price : ${this.price},bedroom: ${this.bedroom} `);
    }
    chgprice(newprice: number):void{
        this.price=newprice; 
        console.log("price change to : ",this.price);}
}
const house1 = new House (4,2,200,20000000,3);
house1.show();
house1.chgprice(50000000);
house1.show();