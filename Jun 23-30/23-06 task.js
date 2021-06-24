//change the code

let i = 3;
while (i) {
  console.log( i-- );
}
// ----------------
let numb = 1;
for( let i = numb; i<11; i++) {
  console.log(i);
}
// ----------------
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}
// ----------------
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped '+gifts[i]+' and added a bow!');
}
// ----------------
let countdown = 100;
while (countdown < 0) {
  countdown--;
  if(countdown == 0)
  {   console.log("bomb triggered");  }
}
// ----------------

//write a code

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i=0; i<11; i++) {
    new_string += numsArr[i]+" ";
}
console.log(new_string.trim());
// ---------------
var new_string1 = "";
new_string1 = numsArr.join();
console.log(new_string1);
// ---------------
var new_string2 = "";
for (var i=0; i<11; i++) {
    new_string2 += numsArr[i]+" ";
}
console.log(new_string2.trim());
// ---------------
for (var i = 0; i <=10; i++) {
    if(numsArr[i]%2 === 0 )
    {        numsArr[i] = "even";
    } }
console.log(numsArr);
// ---------------
for (var i = 0; i <=10; i++) {
    if(numsArr[i]%2 !== 0 )
    {    numsArr[i] = "even";
    } }
console.log(numsArr);
// ---------------
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i=0; i<numsArr.length; i++) {
    sum = sum + numsArr[i];
} console.log(sum);
// ---------------
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i=1; i<numsArr.length; i=i+2) {
    if(numsArr[i]%2==0);
    sum += numsArr[i];
}
console.log(sum);
// ---------------
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i=0; i<numsArr.length; i++) {
    if(numsArr[i]%2==0)
        { sum += numsArr[i]; }
    else
        { sum -= numsArr[i]; }
}
console.log(sum);
// ---------------
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i=0; i<numsArr.length; i++)
    { console.log(numsArr[i]); }
// ---------------
