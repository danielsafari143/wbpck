document.addEventListener('click', (event) => {
  if (event.target.className === 'inpt') {
    const dataList = JSON.parse(localStorage.getItem('dataList'));
    const currentElement = document.getElementById(event.target.id);
    const currentId = currentElement.parentElement.childNodes[1].childNodes[1].id;

    if (dataList[currentId].completed === false) {
      dataList[currentId].completed = true;
      localStorage.setItem('dataList', JSON.stringify(dataList));
      document.getElementById(event.target.id).parentElement.childNodes[1].style.textDecoration = 'line-through';
    } else {
      dataList[currentId].completed = false;
      localStorage.setItem('dataList', JSON.stringify(dataList));
      document.getElementById(event.target.id).parentElement.childNodes[1].style.textDecoration = 'none';
    }
  }
});