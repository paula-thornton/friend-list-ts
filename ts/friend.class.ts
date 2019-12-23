export class Friend {
    id: number;
    fullName: string
    age: number;
    email: string;
    bestFriend: boolean;

    // can only define constructor once, BUT can set default values for the class 
    // variables
    constructor(id:number=0, fullName:string="", age:number =0, email:string="", 
      bestFriend:boolean=true){
        this.id = id;
        this.fullName = fullName;
        this.age = age;
        this.email = email;
        this.bestFriend = bestFriend;
    }
}