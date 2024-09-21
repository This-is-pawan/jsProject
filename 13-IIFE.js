// (
    // let a = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(456);
    //         }, 2000);
    //     });
    // };
    
    // let f = async () => {
    //     let b = await a();
    //     console.log(b);
    
    //     let c = await a();
    //     console.log(c);
    
    //     let d = await a();
    //     console.log(d);
    // };
    
    // f();
    // #######

    let a = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(456);
            }, 2000);
        });
    };
    
    // ( async () => {
    //     let b = await a();
    //     console.log(b);
    
    //     let c = await a();
    //     console.log(c);
    
    //     let d = await a();
    //     console.log(d);
    // })(); // not globally execute 
    
    //e.g  console.log(d); it get error but not stop the execution


// ######## destructuring and  spread operator
// it is use to Arrays and obj
// let arr=[20,9,7];
// let k=arr[0]='90';
// let l=arr[1];
// console.log(arr); not use this syntax
// let arr=[20,9,7,'your name is harry',98];
// let [k,l,j,...rst]=arr;
// let [k,,,...rst]=arr;

// console.log(arr);
let data=[
    'tiger',
    89,'txt'
    ];

let arr=[...data]
// let arr =data.map((item)=>{
    // const{Author,Book,txt}= item

    // return `<div class='center'>
    // <h3>${Author}</h3>
    // <span>${Book}</span>
    //  <p>${txt}</p></div>`
// })


console.log(arr);

































