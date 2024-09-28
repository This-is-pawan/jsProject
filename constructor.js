// let oops = {
//     nm: 'there is program',
//     class: 'there is a class text',
// };

// let p = {
//     run: () => {
//         console.log('target the protoType');
//     },
// };

// Set the prototype of oops to p
// Object.setPrototypeOf(oops, p);
// oops.__proto__= p
// Now call the run method
// oops.run();

//######### fist case #######
// let A = document.querySelector('.animal-name1 h3');
// let B = document.querySelector('.animal-name2 h3');
// let C = document.querySelector('.animal-name3 h3');
// console.log(A);
// console.log(B);
// console.log(C);

// class Animal {
//     constructor(ba,am){

//         this.ba1=ba;
//         this.am1=am;
//         B.innerHTML=`default set Animal:${ba} ${am}`

//     }
// Monkey(){
// A.innerHTML=`this is a Monkey`
// }
// Cow(){
// B.innerHTML=`this is a cow`
// }
// MonkeyEating(){

//    C.innerHTML=`This is eating and also overriding`
// }

// }

// class Eating extends Animal{
//     constructor(ba,am){

//         super(ba,am)// super use before this.bal1 due to protect from throw error
// this.ba1=ba;
// this.am1=am;
// B.innerHTML=`default set Animal:${ba} ${am}
//     `

//     }

// MonkeyEating(){
//     super.MonkeyEating()
// super('this is override ')
//  for override use this syntax when same methods use above
// C.innerHTML=`This is eating and also overriding`
// }

// }
// let mo=new Animal('grass','10Kg');
// let Ea=new Eating('banana','2Kg');
// mo.Monkey()
// mo.Cow()
// mo.Cow()
// Ea.MonkeyEating()
// mo.MonkeyEating() There will not use  but following use also
// Ea.Monkey()
// Ea.Monkey()
// top body of modules use await
let btn = document.querySelector(".btn");
let span = document.querySelector("span");
let text = document.querySelector("h1");

let arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let joining = "#";

let randomColor = () => {
  joining = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * arr.length);
    joining += arr[random];
  }
  return joining;
};

class BackgroundCL {
  constructor(Fun) {
    this.Fun = Fun;
  }
}

class BackgroundOutPut extends BackgroundCL {
  constructor(Fun) {
    super(Fun);
    btn.addEventListener("click", () => {
      span.innerText = `background shades: ${randomColor()}`;
      text.style.color = `${randomColor()}`;
      document.body.style.background = `${randomColor()}`;
    });
  }
}

let bColor = new BackgroundOutPut();

let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hey I'm resolve");
    }, 2000);
  });
};

// (async () => {
//   let b = await a();
//   console.log(b);

//   let c = await a();
//   console.log(c);
// })();
// var b1='oop'
  (async () => {
    var b = await a();
    console.log(b);
  
    let c = await a();
    console.log(c);
    // console.log(b1);
  })();
  // console.log(b1);
