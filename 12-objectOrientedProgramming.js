// let a ={
    //     name:'happy'
    // }
    // let p={
    //     run:()=>{
    //         alert('run')
    //     }
    // }
    // console.log(a) // not run get error
    // a.__prototype__= p // its run
    
    // ##########
    // let a ={
    //     name2:'happy',
    //     Lan:'js',
    //     run:()=>{
    //         alert(' self run') 
    //     }
    // }
    // console.log(a);
    
    // let p={
    //     run:()=>{
    //         alert('run')
    //     }
    // }
    // // console.log(a) 
    // p.__prototype__={
    //     name:"jackie"
    // }
    // a.__prototype__= p 
    // a.run()
    // console.log(a.name);
    // ######### classes & objects
    // ####NOTE i'm looking at this class as a form
    // class Name {
    
    // constructor(yu) {
    //     // this.yu = yu; 
    //     console.log('form is blank');
        
    // }
    
    // dog() {
    //     alert(this.yu + ' pet dogs');
    // }
    
    // goat(y) {
    //     this.yu = y;
    //     console.log(this.yu + ' pet goat');
    // }
    // }
    
    // let goat1 = new Name('germ'); 
    // let dog2 = new Name('doggy');  
    
    // goat1.goat('petter'); 
    // dog2.dog(); 
// ####### without block of code values filling in it

class Name {
    
    constructor(yu) {
        // this.yu = yu; 
        console.log('form is blank');
        
    }
    
    dog() {
        alert(this.yu + ' pet dogs');
    }
    
    goat() {
        this.yu = y;
        console.log(this.yu + ' pet goat');
    }
    }
    
    // let goat1 = new Name(); 
    // let dog2 = new Name();  
    
    // goat1.goat(); 
    // dog2.dog(); 
    // ######## without internal block using
    class Name2 {
    
        constructor(y,u) {
            this.yu = y; 
            this.uy = u; 
            console.log( y + " " + u +  " " +'form is blank');
            // document.write( y + " " + u +  " " +'form is blank')
        }
        
        
        }
        
        // let goat1 = new Name2('toy','689')



// ####
    // if you leave the form blank , the constructor keeps calling you as many times as the block off code is in it.
    // #######
    // ####$$$$$$/ inheritance & extends keyword changes in second class use extends

    class Animal{
        constructor(name,color){
            this.name=name;
            this.color=color;
        }
        run(){
            console.log(this.name+'is running');
            
        }
        shout(){
            console.log(this.name+'is     shouting');
            
        }
    }
    // class child extends parent
    class Monkey extends Animal{
        eatBanana(){
            console.log(this.name+'is eating banana');
            
        }
        eat(){
            console.log(this.name+'is eating ');
            
        }
    }

let ani= new Animal("bruno","white")
let mon= new Monkey("chimp","orange")

// ani.shout()
// mon.eatBanana()
// mon.eat()
// ani.eat() this keyword not use in it throw error
// ####### METHOD OVERRIDING
// ####### parent class overriding with the help of child class 

class Employee{
    login(){
        console.log(`Employee has logged in`);
        
    }
    logout(){
        console.log(`Employee has logged out`);
        
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);// change in the block scope change in to child( due to super keyword )
    }
}
class Programmer extends Employee{
    requestCoffee(){
        console.log(`Employee has requested ${x}coffee`);
    }
    requestLeaves(leaves){
        super.requestLeaves(3)
        // console.log(`Employee has requested ${leaves+1} leaves(one extra)`); // override but use the super keyword 
    }
}


// let e= new Programmer()
// e.login()
// e.requestLeaves(3)
// e.requestLeaves() // not require any argument due to super keyword

// ######### how does a  constructors react to method  overriding   ?


class Employees{
    constructor(name){
        console.log(`${name}:-Employee's constructor is here`);//here the name is run by super constructor blow
        this.name=name

    }
    login(){
        console.log(`Employee has logged in`);
        
    }
    logout(){
        console.log(`Employee has logged out`);
        
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);// change in the block scope change in to child( due to super keyword )
    }
}
class Programmers extends Employees{
    // constructor(name){
    //     super(name)
    //     this.name=name
    //     console.log(`${name}:Programmer's constructor is here. This is a newly written constructor`);
        // this keyword is use after  the super() because of error

    // }
    // if super constructor is not call in child or not intrusted it make  own  constructor 
    requestCoffee(){
        console.log(`Employee has requested ${x}coffee`);
    }
    requestLeaves(leaves){
        super.requestLeaves(3)
        // console.log(`Employee has requested ${leaves+1} leaves(one extra)`); // override but use the super keyword 
    }
}


// let es= new Programmers('harry')
// es.login()
// e.requestLeaves(3)
// es.requestLeaves() 
//  note that js engine is automatically set constructor(...arg){
// super(...arg)
// }



// ######### STATIC METHOD  let's see how one becomes one who works like a class
// static method belongs to the entire class not to a particular objects.




// class Animals {
//     constructor(Name) {
//         this.Name = Animals.capitalize(Name);//not use this.capitalize(Name)
//     }

    // walk() {
    //     console.log(`Animal ${this.Name} is walking`);
    // }

//     static capitalize(Name) {
//         return Name.charAt(0).toUpperCase() + Name.substr(1);// i want that jack first letter be capitalized make block  (i want to make static this block is use in future   )
//     }
// }

// let j = new Animals('jack');// also use new Animals(Animals.capitalize(('jack')) 
// j.walk();
// j.capitalize(); not use this doses'nt work  

// ######## Get Set and Instance of operator
//use for management of objects and classes




class Animals {
    constructor(name) {
        this._name = name;
        //also use this this._kame = "some value"; d
    }

    fly() {
        console.log(`is walking`);  
    }

    get kame() {
        return this._name;   //use _ this sign underscore use as same
    }
    set kame(newName) {
        this._name=newName;   //use _ this sign underscore use as same
    }
}
class Rabbit extends Animals{
    eatCarrot(){
console.log('eating carrot');

    }
}






let ooh = new Rabbit("game");
// let ooh = new Animals("game");
ooh.fly(); 
console.log(ooh.kame); 
ooh.kame='joni'
console.log(ooh.kame); 
// console.log(ooh instanceof Animals);
console.log(ooh instanceof Rabbit);
let t=90;
console.log(t instanceof Animals);// it returns true if obj belongs to the class or any other class inheriting from it


