// // let oops = {
// //     nm: 'there is program',
// //     class: 'there is a class text',
// // };

// // let p = {
// //     run: () => {
// //         console.log('target the protoType');
// //     },
// // };

// // Set the prototype of oops to p
// // Object.setPrototypeOf(oops, p);
// // oops.__proto__= p
// // Now call the run method
// // oops.run();

// //######### fist case #######
// // let A = document.querySelector('.animal-name1 h3');
// // let B = document.querySelector('.animal-name2 h3');
// // let C = document.querySelector('.animal-name3 h3');
// // console.log(A);
// // console.log(B);
// // console.log(C);

// // class Animal {
// //     constructor(ba,am){

// //         this.ba1=ba;
// //         this.am1=am;
// //         B.innerHTML=`default set Animal:${ba} ${am}`

// //     }
// // Monkey(){
// // A.innerHTML=`this is a Monkey`
// // }
// // Cow(){
// // B.innerHTML=`this is a cow`
// // }
// // MonkeyEating(){

// //    C.innerHTML=`This is eating and also overriding`
// // }

// // }

// // class Eating extends Animal{
// //     constructor(ba,am){

// //         super(ba,am)// super use before this.bal1 due to protect from throw error
// // this.ba1=ba;
// // this.am1=am;
// // B.innerHTML=`default set Animal:${ba} ${am}
// //     `

// //     }

// // MonkeyEating(){
// //     super.MonkeyEating()
// // super('this is override ')
// //  for override use this syntax when same methods use above
// // C.innerHTML=`This is eating and also overriding`
// // }

// // }
// // let mo=new Animal('grass','10Kg');
// // let Ea=new Eating('banana','2Kg');
// // mo.Monkey()
// // mo.Cow()
// // mo.Cow()
// // Ea.MonkeyEating()
// // mo.MonkeyEating() There will not use  but following use also
// // Ea.Monkey()
// // Ea.Monkey()
// // top body of modules use await
// let btn = document.querySelector(".btn");
// let span = document.querySelector("span");
// let text = document.querySelector("h1");

// // let arr = [
// //   "A",
// //   "B",
// //   "C",
// //   "D",
// //   "E",
// //   "F",
// //   "0",
// //   "1",
// //   "2",
// //   "3",
// //   "4",
// //   "5",
// //   "6",
// //   "7",
// //   "8",
// //   "9",
// // ];
// // let joining = "#";

// // let randomColor = () => {
// //   joining = "#";
// //   for (let i = 0; i < 6; i++) {
// //     let random = Math.floor(Math.random() * arr.length);
// //     joining += arr[random];
// //   }
// //   return joining;
// // };

// // class BackgroundCL {
// //   constructor(Fun) {
// //     this.Fun = Fun;
// //   }
// // }

// // class BackgroundOutPut extends BackgroundCL {
// //   constructor(Fun) {
// //     super(Fun);
// //     btn.addEventListener("click", () => {
// //       span.innerText = `background shades: ${randomColor()}`;
// //       text.style.color = `${randomColor()}`;
// //       document.body.style.background = `${randomColor()}`;
// //     });
// //   }
// // }

// // let bColor = new BackgroundOutPut();

// // let a = () => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("hey I'm resolve");
// //     }, 2000);
// //   });
// // };

// // (async () => {
// //   let b = await a();
// //   console.log(b);

// //   let c = await a();
// //   console.log(c);
// // })();
// // var b1='oop'
// // (async () => {
// //   var b = await a();
// //   console.log(b);

// //   let c = await a();
// //   console.log(c);
// //   // console.log(b1);
// // })();
// // console.log(b1);
// // f() class and function expression is not use in it

// // let f=function name(params) {
// //   console.log('there is hosting or not');

// // }
// // f()
// // let c=9; // variable shadowing
// // function name() {
// //   var c=0;
// //   console.log(c);

// // }
// // name()
// // console.log(window.c);
// // console.log(c);
// // pass of value it is use in primitive data  and pass  reference it is use in no-primitive data

// // let passOFValue1='The world';
// // let passOFValue2 =passOFValue1;// it store different memory
// // passOFValue2='There is change'
// // console.log(passOFValue2);

// // let passOFReference1={
// //   Name:'happy',
// //   class:'34',
// // };
// // let passOFReference2 =passOFReference1; // it store same memory
// // passOFReference2.Name='harry';
// // console.log(passOFReference2);

// // for (let index = 1; index <=5; index++) {
// //   setTimeout(() => {

// //     const element = index;
// //     console.log(element);
// //   },index*200);

// // }
// // for (var i = 1; i <=5; i++) {
// //   function name(x) {

// //   setTimeout(function(){
// //     console.log(x);
// //   },x*300);
// // }
// //   name(i)
// // }

// // for( var f=1; f<=5; f++ ){
// // console.log(f);

// // }
// // console.log(f);
// // console.log(f);
// // In the var loop, the variable i is available even outside the loop. If you log i after the loop, it will be 6 (because that's when the loop ends).
// // for( let i=1; i<=5; i++ ){
// //   console.log(i);

// //   }
// // console.log(i); In the let loop, the variable i is scoped to the block of the loop, and it's not accessible outside of it.
// //   function recursiveFunction(counter) {
// //     console.log('Counter:', counter);
// //     if (counter < 5) {
// //         recursiveFunction(counter + 1); // Function calls itself
// //     }
// // }

// // recursiveFunction(1); // Start the recursive calls
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // IMPORTANT POINTS REGARDING FUNCTIONS
// // 1)Inner function called inside outer function: Outer starts, inner runs, outer finishes.
// //2) Inner function defined but not called: Outer executes fully, inner remains idle.
// //3) Inner function returned and executed later: Outer completes, inner is called later.
// //4) Inner function immediately invoked (IIFE): Both outer and inner execute immediately.
// //5) Asynchronous inner function: Outer finishes first, inner runs later (asynchronously).
// //6)Recursion: Function calls itself in a loop until a condition is met.

// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // let y= function name() {
// //   console.log(name);

// // }
// // // name();

// // console.log('start');

// // setTimeout(() => {
// //   console.log('callback');

// // }, 4000);

// // let start=new Date().getTime();
// // let end=start;
// // // end<start+1000;
// // console.log(end<start+1000,end);

// // while (end<start+1000) {

// //   end=new Date().getTime();
// //   // console.log(end);

// // }

// // console.log('end');

// // let ra = [2, 3, 4, 5];

// // let Area = function (r) {
// //   let areas = [];
// //   for (let i = 0; i < r.length; i++) {
// //     let calArea = Math.PI * r[i] * r[i];
// //     areas.push(calArea);
// //   }
// //   return areas;
// // };

// // let t = Area(ra);
// // console.log(t);

// // higher orders
// // let radius = [2, 3, 4, 5];

// // let area = function (pr) {
// //   return Math.PI * pr * pr;

// // };
// // let cal = function (r, logic) {
// //   const output = [];
// //   for (let i = 0; i < r.length; i++) {
// //     // let rm=r[i];
// //     // output.push(logic(rm));
// //     output.push(logic(r[i]));
// //     // console.log('first');
// //   }
// //   return output;
// // };
// // let print=cal(radius, area);
// // console.log( print);
// let obj=[{name:'ram',age:8,sal:80000,},{name2:'ram',age:8,sal:80000,}]
// // let arr= [4,5,6,7,3];
// // let arr=['first','second','third','fourth','fifth',]
// let sum =obj.reduce((acc,curr)=>{
// return  curr[acc];
// // return ;
// },)

// console.log(sum);

// let p= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This my promise')
//     }, 2000);
// })
// let a= async () => {
//     let aw = await p;
//     console.log('There is print');
//     console.log(aw);

// }
// console.log('outer is print');
// a()

//  let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
// try {
//     console.log(o);

// } catch (error) {
//     console.log(error);

// }

//         resolve('This promise is resolve in one second')
//     }, 3000);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This promise is resolve in two second')
//     }, 1000);
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This promise is resolve in three second')
//     }, 4000);
// });

// let promise4 = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         resolve('This promise is resolve in four second')
//     }, 400);
// });

// ############ call , apply , bind ########

// normal use without this keyword
// let obj1 = {
//   Name: "john smith",
//   age: 34,
//   txt: function (you,applys) {
//     console.log(`1) your name: ${obj1.Name} 2) txt: ${you} 3) applyTxt:  ${applys}`);
//   },
// };

// let obj2 = {
//   Name: "Era smith",
//   age: 30,
//   txt: "this is text",
// };
// obj1.txt.call(obj2, "your name or not");
// obj1.txt.apply(obj2, ["this is text",'this is apply']);
//  let store= obj1.txt.bind(obj2, "this is text",'this is apply');
// store()


// ####### use with this keyword
let obj1 = {
    Name: "john smith",
    age: 34,
    txt:function(you,applys) {
      console.log(`1) your name: ${this.age} 2) txt: ${you} 3) applyTxt:  ${applys}`);
    //    console.log(`1) your name: ${this.Name} 2) txt: ${this.you} 3) applyTxt:  ${this.applys}`); not use This syntax and arrow function not use this keyword it refers to the outer context obj1
    },
  };
  
  let obj2 = {
    Name: "Era smith",
    age: 30,
    // txt: "this is text",
  };
  // obj1.txt.call(obj2, "your name or not");
  // obj1.txt.apply(obj2, ["this is text",'this is apply']);
   let store= obj1.txt.bind(obj2, "this is text",'this is apply');
  store()
  
   