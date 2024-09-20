
function you() {
   
    // return 'this is a function ';
    return [20,30,50]
}



let promise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('res the promise');
        // reject('catch the error'); 
     resolve(you())
    //    you()
    }, 1000);
})
promise2.then((value) => {
//    let t= value.concat('concat this function')
    value.forEach(element => {
    
       console.log(element);
   });

    
})
.then(()=>{
     return new Promise((resolve, reject) => {
        resolve(`${konHai(1,2,4)}` )
        function konHai(y,o,u) {
        //   let o= [90,78,97] 
        return y+o+u
          console.log(o);
          
        }
        // konHai()
     })
}).then((value)=>{
    let val=Number.parseInt(value)
    console.log(val);
    
})
.catch((err)=> {
    console.log(err);
    
});
// let allPromise1=all[p1+p2+p3]
// let allPromise2=allSelected  [p1+p2+p3]
// let allPromise3=any[p1+p2+p3]
// let allPromise4=race[p1+p2+p3]

// console.log(allPromise1);
// console.log(allPromise2);
// console.log(allPromise3);
// console.log(allPromise4);






