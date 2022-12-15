document.addEventListener('click',(event) =>{
    if(event.target.className === 'inpt'){
        document.getElementById(event.target.id).parentElement.childNodes[1].style.textDecoration = 'line-through';
    }
 });