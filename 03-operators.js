 // arithmetic operators
 let a = 10;
 let b = 8;
 console.log(a + b);
 console.log(a - b);
 console.log(a * b);
 console.log(a / b);
 console.log(a % b);
 let x = 2;
 let y = 4;
 console.log(x ** y);// it represent it power 

 function multi(e, c) {
     return e * c  // try all art operator
 }
 let re = multi(3, 8);
 console.log(re);

 function multi(c) {
     return c += c
 }
 let cor = multi(8);

 console.log(cor);
 function multi(com) {
     return ++com
 }
 let corn = multi(8);

 console.log(corn);

 // c2=5
 let num1 = 55
 let num2 = 52
 if (num1 >= num2) {
     console.log(
         'This is a code of js and work'
     );

 }
 if (num1 <= num2) {
     console.log(
         'This is a code of js and work'
     );

 } else {
     console.log(
         'This code are work'
     );
 }
 // logical operator
 let lo1 = 2;
 let lo2 = 3;
 console.log(lo1 < lo2 && lo1 > lo2);
 console.log(lo1 < lo2 || lo1 > lo2);
 console.log(lo1 < !lo2);
 // conditional expression 

 // let first=0;
 // let second=1;
 // if (first>second) {
 //     console.log('That condition is true');
 // } else if(first!=second) {
 //     console.log('That condition is not equal');

 // }else{
 //     console.log('Error');
 // }
 let logic1 = 2;
 let logic2 = 3;
 if (logic1 < logic2) {
     console.log('That condition is true');
 } else if (logic1 != logic2) {
     console.log('That condition is not equal');

 } else {
     console.log('Error');
 }
// ternary operator

let ter1= (logic1>logic2)? true:false;
let ter2= (logic1>logic2)? false:true;

console.log(ter1);
console.log(ter2);
