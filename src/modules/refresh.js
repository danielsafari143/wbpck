const svg = (id) => {
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let path =  document.createElementNS('http://www.w3.org/2000/svg','path');
  svg.classList.add('bi');
  svg.classList.add('bi-three-dots-vertical');
  svg.classList.add('img');
  svg.id = id;
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('width', '16');
  svg.setAttribute('height','16');
  path.setAttribute('d','M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z')
  svg.appendChild(path);
  return svg
}
