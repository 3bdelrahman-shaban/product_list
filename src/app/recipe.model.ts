export class Recipe{
    public fname:string;
    public lname:string;
    public price:number ;
    numoforder:number;
    public imgpath:string;
    constructor(fname:string,lname:string,price:number ,imgpath:string,numoforder:number){
        this.fname=fname
        this.lname=lname
        this.price=price
        this.imgpath=imgpath
        this.numoforder=numoforder

    }
}