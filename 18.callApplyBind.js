// normal use without this keyword
let obj1 = {
  Name: "john smith",
  age: 34,
  txt: function (you,applys) {
    console.log(`1) your name: ${obj1.Name} 2) txt: ${you} 3) applyTxt:  ${applys}`);
  },
};

let obj2 = {
  Name: "Era smith",
  age: 30,
  txt: "this is text",
};
obj1.txt.call(obj2, "your name or not");
obj1.txt.apply(obj2, ["this is text",'this is apply']);
 let store= obj1.txt.bind(obj2, "this is text",'this is apply');
store()


// ####### use with this keyword
let Obj1 = {
    Name: "john smith",
    age: 34,
    txt:function(you,applys) {
      console.log(`1) your name: ${this.age} 2) txt: ${you} 3) applyTxt:  ${applys}`);
    //    console.log(`1) your name: ${this.Name} 2) txt: ${this.you} 3) applyTxt:  ${this.applys}`); not use This syntax and arrow function not use this keyword it refers to the outer context obj1
    },
  };
  
  let Obj2 = {
    Name: "Era smith",
    age: 30,
    // txt: "this is text",
  };
  Obj1.txt.call(Obj2, "your name or not");
  Obj1.txt.apply(Obj2, ["this is text",'this is apply']);
   let Store= Obj1.txt.bind(Obj2, "this is text",'this is apply');
  Store()
  
   