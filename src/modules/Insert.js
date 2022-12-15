class Insert {
  constructor() {
    this.containerId = document.getElementById('sub-container');
    this.btnInsertId = document.getElementById('insertBtn');
    this.InptValue = document.getElementById('textin');
    this.listItems = document.getElementById('list-item');
    this.storeData = [{task:'wash the dishes', completed :false} , {task:'wash the dishes', completed :false}];
  }
    display = () => {
        const localData = this.storeData;
        for (let i = 0; i < localData.length; i += 1) {
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
          const paragraph = document.createElement('div');
          const paragraph2 = document.createElement('p');
          const texte = document.createTextNode(localData[i].task);
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
          this.InptValue.value = '';
      } 
    }
}
const insertNew = new Insert();
insertNew.display();