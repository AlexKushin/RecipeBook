export class Ingredient {
    constructor(public name: string, public amount:number){} //this is typescript shortcut which does the same as the commented code below
}

// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount:number){
//         this.name = name;
//         this.amount = amount;
//     }
// }