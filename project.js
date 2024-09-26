let bar=document.querySelector('.fa-chart-bar');
let barList=document.querySelector('.barList');
let dataTypes=document.querySelector('.dataTypes');
let dataTypes2=document.querySelector('.dataTypes-2');
let moon=document.querySelectorAll('.fa-moon');
let dataTypesShow=document.querySelector('.dataTypesShow ul');


// console.log(moon);

let arr = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let joining = '#';

let randomColor = () => {
    joining = '#'; 
    for (let i = 0; i < 6; i++) { 
        let random = Math.floor(Math.random() * arr.length);
        joining += arr[random];
    }
    return joining;
}


moon.forEach((e) => {
    e.addEventListener('click', () => {
        let newColor = randomColor(); 
        // console.log(newColor);

        document.body.style.background = newColor; 
        e.style.color=newColor;
    });
});



let caretUp=document.querySelectorAll('.fa-square-caret-up');
// console.log(bar);
bar.addEventListener('click',()=>{
    barList.classList.toggle('barListShow');
    bar.classList.toggle('barAnimate');
})
let tr='upRotate';
caretUp.forEach((e)=>{
    // let transfer=es
    e.addEventListener('click',(value)=>{
    value.target.style.color= randomColor();
    
    
    // randomColor();
    value.target.classList.toggle('upRotate')
    if (value.currentTarget.classList.contains('one')) {
        // console.log('ok');
        dataTypes.classList.toggle('dataTypesShow');   
        
        
    } else if(value.currentTarget.classList.contains('two')) {
        dataTypes2.classList.toggle('dataTypesShow2');   
        // console.log('not ok');
    }
    
})


});