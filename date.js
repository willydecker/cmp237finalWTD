//william dekcer
//number 5
//

var a = new Date(2015, 4, 06).getTime();
var date = new Date(a);
console.log("this is May 6th in number: " + a);
console.log("this is May 6th in date form: " + date);

console.log("this is a with a month added" + (a + 2592000000));
date = (a + 2592000000);
console.log(date);

var b = new Date(2015, 5, 05).getTime();
console.log("for comparison" + b);

