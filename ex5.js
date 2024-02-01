function count_with_spaces(value) {
    return value.length;
}
var count = count_with_spaces("XFA-33 Fenrir");
console.log(count);
function count_with_no_spaces(value2) {
    return value2.replace(" ", "").length;
}
console.log(count_with_no_spaces("XFA-33 Fenrir"));
console.log("\n");
function count_both(value3, spaces) {
    var count3 = 0;
    if (spaces) {
        count3 = value3.length;
    }
    else {
        count3 = value3.replace(" ", "").length;
    }
    return count3;
}
console.log(count_both("Test 1"));
console.log(count_both("Test 1", false));
