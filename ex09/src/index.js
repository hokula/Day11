function myBouncer(arr) {
    var noviArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] == false || arr[i] == " " || arr[i] == null || arr[i] == 0 || arr[i] == NaN || arr[i] == undefined) {
        } else {
            noviArr.push(arr[i]);}
    }
    return noviArr;
}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));

module.exports = myBouncer;