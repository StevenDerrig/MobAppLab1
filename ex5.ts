function count_with_spaces(value: string):number{
    return  value.length;
}
let count = count_with_spaces("XFA-33 Fenrir");
console.log(count);


function count_with_no_spaces(value2: string):number{
   
    return  value2.replace(" ","").length;
}
console.log(count_with_no_spaces("XFA-33 Fenrir"));
console.log("\n");

function count_both(value3:string, spaces?:boolean):number{//can add or remove the ? for bool, check test 1 without the true above the false
    let count3: number = 0;
    if(spaces){
        count3 = value3.length;
    }
    else{
        count3 = value3.replace(" ","").length;
    }
    return count3;      
}

console.log(count_both("Test 1"));
console.log(count_both("Test 1", false));