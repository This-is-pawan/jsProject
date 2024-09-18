function getting () {
    console.log('function is work');
    
}
getting()

let sum= (a,b,c)=> {
    return (a+b+c)
    
}
   const ex=  sum (40,90,89)
console.log(ex);

let arr= ()=> 'This is one ';
console.log(arr());

function Person(name) {
    this.name = name;
  }
  const person = new Person('John');
  console.log(person.name);
  // it make object

  async function fetchData() {
    let data = await fetch('https://www.google.com');
    return data.json();
  }
  fetchData().then(data => console.log(data)).catch((err)=>{
console.log(err);

  });

  