//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//string
var nameJet = "Fenrir";
console.log("Value assigned to nameJet is: " + nameJet);
//number
var num1 = 33;
console.log("Value assigned to num1 is: " + num1);
//arrays
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value of item " + (i + 1) + " is " + myArray[i]);
}
//Other way of doing an array.
var myArray2 = [1, 2, 3];
myArray.forEach(function (item) {
    console.log("The value is " + item);
});
/*
myArray.forEach((item) =>{
    console.log("The value is "+item);
})
*/
//any
var freeThing = 4;
//freeThing = "ADF-01 Falken";
//freeThing = false;
console.log("Value assinged to freeThing is: " + freeThing);
