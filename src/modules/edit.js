document.addEventListener('keyup',(event) =>{
    if(event.target.className === 'paragraph2'){
        let dataList = JSON.parse(localStorage.getItem('dataList'));
        dataList[document.getElementById(event.target.id).parentElement.childNodes[1].id] = document.getElementById(event.target.id).textContent;
        localStorage.setItem('dataList' , JSON.stringify(dataList));
    }
    
 });