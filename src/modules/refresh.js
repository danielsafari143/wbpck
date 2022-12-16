document.addEventListener('click', (event) => {
  if (event.target.classList[0] === 'tester') {
    let storeData = JSON.parse(localStorage.getItem('dataList'));
    const currentNode = document.getElementById(event.target.id).parentElement.id;
    const cont = document.getElementById(currentNode).parentElement;
    const text = document.getElementById(cont.childNodes[1].id).childNodes[0];
    document.getElementById(cont.id).remove();
    const rem = storeData.filter((letter) => letter.description !== text.textContent);
    storeData = rem;
    for (let i = 0; i < storeData.length; i += 1) {
      storeData[i].index = i;
      if (storeData[i] !== null) {
        localStorage.setItem('dataList', JSON.stringify(storeData));
      }
    }
  }
});
