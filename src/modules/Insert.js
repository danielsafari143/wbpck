class Insert {
  constructor() {
    this.containerId = document.getElementById('sub-container');
    this.btnInsertId = document.getElementById('insertBtn');
    this.InptValue = document.getElementById('textin');
    this.listItems = document.getElementById('list-item');
    this.storeData = [{}];
  }

    insert = () => {
      if (this.InptValue.value !== '') {
        if (JSON.parse(localStorage.getItem('dataList')) === null) {
          const index = JSON.parse(localStorage.getItem('dataList')).length;
          localStorage.setItem('dataList', JSON.stringify(this.storeData));
          this.storeData = JSON.parse(localStorage.getItem('dataList'));
          this.storeData.push({ description: this.InptValue.value, completed: false, index });
          localStorage.setItem('dataList', JSON.stringify(this.storeData));
          this.refesh();
        } else {
          const index = JSON.parse(localStorage.getItem('dataList')).length;
          this.storeData = JSON.parse(localStorage.getItem('dataList'));
          this.storeData.push({ description: this.InptValue.value, completed: false, index });
          localStorage.setItem('dataList', JSON.stringify(this.storeData));
          this.refesh();
        }
      }
    }

    refesh = () => {
      const localData = JSON.parse(localStorage.getItem('dataList'));
      for (let i = localData.length - 1; i < localData.length; i += 1) {
        const li = document.createElement('li');
        const inpt = document.createElement('input');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        svg.classList.add('bi');
        svg.classList.add('bi-three-dots-vertical');
        svg.classList.add('img');
        svg.id = [i];
        inpt.id = `inp${[i]}`;
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        path.setAttribute('d', 'M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z');
        svg.appendChild(path);
        inpt.className = 'inpt';
        inpt.type = 'checkbox';
        const paragraph = document.createElement('div');
        const paragraph2 = document.createElement('p');
        const texte = document.createTextNode(localData[i].description);
        paragraph.className = 'paragraph';
        paragraph2.id = `paragraph2${[i]}`;
        paragraph2.appendChild(texte);
        paragraph2.className = 'paragraph2';
        paragraph2.setAttribute('contentEditable', 'true');
        paragraph.appendChild(paragraph2);
        paragraph.appendChild(svg);
        paragraph.id = `paragraph${[i]}`;
        li.appendChild(inpt);
        li.appendChild(paragraph);
        li.id = `list-item${[i]}`;
        li.className = 'list-item';
        this.containerId.appendChild(li);
      }
      this.InptValue.value = '';
    }

    display = () => {
      if (JSON.parse(localStorage.getItem('dataList')) === null) {
        localStorage.setItem('dataList', JSON.stringify(this.storeData));
        const localData = JSON.parse(localStorage.getItem('dataList'));
        for (let i = 0; i < localData.length; i += 1) {
          if (localData[i].description !== undefined) {
            const li = document.createElement('li');
            const inpt = document.createElement('input');
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svg.classList.add('bi');
            svg.classList.add('bi-three-dots-vertical');
            svg.classList.add('img');
            svg.id = [i];
            svg.setAttribute('fill', 'currentColor');
            svg.setAttribute('viewBox', '0 0 16 16');
            svg.setAttribute('width', '16');
            svg.setAttribute('height', '16');
            path.setAttribute('d', 'M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z');
            svg.appendChild(path);
            inpt.id = `inp${[i]}`;
            inpt.type = 'checkbox';
            inpt.className = 'inpt';
            inpt.checked = localData[i].completed;
            const paragraph = document.createElement('div');
            const paragraph2 = document.createElement('p');
            const texte = document.createTextNode(localData[i].description);
            paragraph.className = 'paragraph';
            paragraph2.appendChild(texte);
            paragraph2.className = 'paragraph2';
            paragraph2.id = `paragraph2${[i]}`;
            paragraph2.setAttribute('contentEditable', 'true');
            paragraph.appendChild(paragraph2);
            paragraph.appendChild(svg);
            paragraph.id = `paragraph${[i]}`;
            li.appendChild(inpt);
            li.appendChild(paragraph);
            li.id = `list-item${[i]}`;
            li.className = 'list-item';
            this.containerId.appendChild(li);
          }
        }
        this.InptValue.value = '';
      } else {
        const localData = JSON.parse(localStorage.getItem('dataList'));
        for (let i = 0; i < localData.length; i += 1) {
          if (localData[i].description !== undefined) {
            const li = document.createElement('li');
            const inpt = document.createElement('input');
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svg.classList.add('bi');
            svg.classList.add('bi-three-dots-vertical');
            svg.classList.add('img');
            svg.id = [i];
            svg.setAttribute('fill', 'currentColor');
            svg.setAttribute('viewBox', '0 0 16 16');
            svg.setAttribute('width', '16');
            svg.setAttribute('height', '16');
            path.setAttribute('d', 'M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z');
            svg.appendChild(path);
            inpt.id = `inp${[i]}`;
            inpt.type = 'checkbox';
            inpt.className = 'inpt';
            inpt.checked = localData[i].completed;
            const paragraph = document.createElement('div');
            const paragraph2 = document.createElement('p');
            const texte = document.createTextNode(localData[i].description);
            paragraph.className = 'paragraph';
            paragraph2.appendChild(texte);
            paragraph2.className = 'paragraph2';
            paragraph2.id = `paragraph2${[i]}`;
            paragraph2.setAttribute('contentEditable', 'true');
            paragraph.appendChild(paragraph2);
            paragraph.appendChild(svg);
            paragraph.id = `paragraph${[i]}`;
            li.appendChild(inpt);
            li.appendChild(paragraph);
            li.id = `list-item${[i]}`;
            li.className = 'list-item';
            this.containerId.appendChild(li);
          }
        }
        this.InptValue.value = '';
      }
    }

    clear = () => {
      const localData = JSON.parse(localStorage.getItem('dataList'));
      let local = [];
      for (let i = 0; i < localData.length; i += 1) {
        if (i !== null) {
          if (localData[i].completed === true) {
            const currentId = document.getElementById(i);
            const secondE = document.getElementById(currentId.parentElement.id);
            const ids = document.getElementById(currentId.parentElement.id).childNodes[0].id;
            const SecId = document.getElementById(ids).textContent;
            const rem = localData.filter((letter) => letter.description !== SecId);
            this.storeData = rem;
            document.getElementById(secondE.parentElement.id).remove();
            local = rem;
          }
        }
      }
      const rem = local.filter((letter) => letter.completed !== true);
      for (let i = 0; i < rem.length; i += 1) {
        rem[i].index = i;
        if (rem[i] !== null) {
          localStorage.setItem('dataList', JSON.stringify(rem));
        }
      }
    }

    itemColor = (event) => {
      if (event.target.className === 'paragraph2') {
        const localData = JSON.parse(localStorage.getItem('dataList'));
        for (let i = 0; i < localData.length; i += 1) {
          if (localData[i].description === document.getElementById(event.target.id).textContent) {
            const chlid = document.getElementById(event.target.id).parentElement.id;
            const parent = document.getElementById(chlid);
            const newId = localData[i].index;
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svg.classList.add('tester');
            svg.classList.add('bi');
            svg.classList.add('bi-trash');
            svg.classList.add('img');
            svg.id = newId;
            svg.setAttribute('fill', 'currentColor');
            svg.setAttribute('viewBox', '0 0 16 16');
            svg.setAttribute('width', '16');
            svg.setAttribute('height', '16');
            path.setAttribute('d', 'M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z');
            path2.setAttribute('d', 'M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z');
            path2.setAttribute('fill-rule', 'evenodd');
            svg.appendChild(path);
            svg.appendChild(path2);
            parent.replaceChild(svg, parent.childNodes[1]);
            document.getElementById(newId).style.cursor = 'pointer';
          }
        }
      }
    }
}
const insertNew = new Insert();
insertNew.display();
window.addEventListener('click', insertNew.itemColor);
document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    insertNew.insert();
  }
});
document.getElementById('clearIem').addEventListener('click', () => {
  insertNew.clear();
});
