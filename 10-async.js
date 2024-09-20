let high = async () => {
  let dW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("delhi Whether ");
    }, 2000);
  });
  let bW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bengaluru Whether ");
    }, 5000);
  });
  let b = await dW;
  let c = await bW;

  //  console.log(`Check result of b :${b}`);
  //  console.log(`Check result of c :${c}`);
};
let a = high();
// console.log(a);
// console.log('Please wait...');

// try catch

setTimeout(() => {
  // console.log('john');
}, 1000);

// try {
//     setTimeout(() => {
//         console.log(sham);
//     }, 2000);

// console.log(you);
// } catch (error) {
// console.log('goto next  steps');
//     console.log('');

// }

// try {

//     setTimeout(() => {
//         try {

// console.log(sham);s
//         } catch (error) {
// console.log('balla balla');
//         }
//     }, 2000);

// console.log(you);
// } catch (error) {
// console.log('goto next  steps');
//     console.log('');

// }

// setTimeout(() => {
//     console.log('sham');
// }, 2000);

// setTimeout(() => {
//     console.log('ram');
// }, 3000);

// #### Error objects $ custom Error

// try{
//     javascript
//     throw new Error("harry");

//     }catch(error){
//    console.log(error.name)
//         console.log(error.message)
//         console.log(error.stack)
//     }
// finally{
//     console.log('jk');

// }
// ######## when both have any error try and catch also run return
try {
  // console.log(num)
} catch (error) {
  //    console.log(error.name)
  //         console.log(error.message)
  //         console.log(error.stack)
  //         console.log(local)
} finally {
  // console.log('js is run');
}
// ######### API (Ajax)
// let load =async (src) => {
//     this.src=src
//     console.log(this.src);

// }
// load('https//:www.google.com')

// let option ={
//     method:"POST",//GET
//     headers:{
//         "Context-type":"application"
//     },
//     body:JSON.stringify({
//         title:'foo',
//         body:'bar',
//         userId:1,
//     })
// }

// fetch('https://jsonplacholder.typicode.com/posts',option)
// .then((response)=>{console.log(response.json());
// })
// .then((json)=>{console.log(json);
// })

// use with async########

let post = async () => {
  let option = {
    method: "POST",
    body: JSON.stringify({
      id: 101,
      title: "YOUR",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  let API = await fetch("https://jsonplaceholder.typicode.com/posts", option);
  let ap = await API.json();
  return ap;
};
let getting = async () => {
  let a = await post();
  console.log(a);
};
// getting();

// ##################
//    let joke= fetch('https://goweather.herokuapp.com/weather/Ny',option)
//  joke.then((val1)=>{
//     return val1.json()
//  }).then((val2)=>{
//     return val2;
//      }).then((val3)=>{
// console.log(val3);

//      })



