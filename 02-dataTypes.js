// primitive non primitive data type
const pra=document.querySelector('p');

let data={
'string':'This is a string',
'boolean':false,
'boolean':true,
"number":783,
 "undefined":undefined,
 
}


// document.write(data['boolean']);
// console.log(data['boolean']);

for( let t in data){
    document.write(`<br>${t}`);

}
// ##########
let obj=[{
    name:'Happy singh',
    salary:900000,
    work:'Web Development',
    
},
{
    name:'mohan singh',
    salary:800000,
    work:'App Development',
    
}
]
  let rt=obj.map((item)=>{
      const {name,salary,work}=item
       return `<h2>Name: ${name}<br> Salary: ${salary}<br> Work: ${work} </h2>`

    console.log(item);
}).join('')
// document.write(rt)
    pra.innerHTML=rt



