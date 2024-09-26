let bar=document.querySelector('.fa-chart-bar');
let barList=document.querySelector('.barList');
let dataTypes=document.querySelector('.dataTypes');
let dataTypes2=document.querySelector('.dataTypes-2');
let caretUp=document.querySelectorAll('.fa-square-caret-up');
// console.log(bar);
bar.addEventListener('click',()=>{
    barList.classList.toggle('barListShow')
    bar.classList.toggle('barAnimate')
})
let tr='upRotate';
caretUp.forEach((e)=>{
    // let transfer=es
e.addEventListener('click',(value)=>{

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