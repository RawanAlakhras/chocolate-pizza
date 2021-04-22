"use strict";
let checkbox=document.querySelectorAll('input[type=checkbox]');
let label=document.querySelectorAll('label');
console.log(checkbox);
for (let i=0 ;i <checkbox.length;i++)
{
checkbox[i].addEventListener('change',function(event){
    let check=event.target;
    console.log('checked');
    if(checkbox[i].checked){
        label[i].style.textDecoration='line-through';
        console.log('checked');
    }
    else{
        label[i].style.textDecoration='none';
    }

});
}