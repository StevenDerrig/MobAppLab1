//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

 //string
let nameJet: string = "Fenrir";
console.log("Value assigned to nameJet is: "+nameJet);

//number
let num1: number = 33;
console.log("Value assigned to num1 is: "+num1);

//arrays
let myArray: number[] = [1,2,3];
for(let i = 0; i < myArray.length; i++)
{
    console.log("The value of item " +(i+1)+" is "+myArray[i]);
}

//Other way of doing an array.
let myArray2: Array<number> = [1,2,3];
myArray.forEach(function(item){
    console.log("The value is "+item);
})
/* 
myArray.forEach((item) =>{
    console.log("The value is "+item);
})
*/


//any
let freeThing: any = 4;
//freeThing = "ADF-01 Falken";
//freeThing = false;
console.log("Value assinged to freeThing is: "+freeThing);