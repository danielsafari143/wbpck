document.addEventListener('keyup', (event) => {
  if (event.target.className === 'paragraph2') {
    const chlid = document.getElementById(event.target.id).parentElement.childNodes[1].id;
    const dataList = JSON.parse(localStorage.getItem('dataList'));
    dataList[chlid] = document.getElementById(event.target.id).textContent;
    localStorage.setItem('dataList', JSON.stringify(dataList));
  }
});