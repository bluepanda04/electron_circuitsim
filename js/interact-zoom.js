const zoomArr = [0.5, 0.75, 0.85, 0.9, 1, 1.2, 1.5];
const element = document.querySelector('.elements');

let value = element.getBoundingClientRect().width / element.offsetWidth;
let indexofArr = 4;

handleZoomChange = () => {
  let val = document.querySelector('#zoom-select').value;
  val = Number(val);
  indexofArr = zoomArr.indexOf(val);
  element.style['transform'] = `scale(${val})`;
}

document.querySelector('.zoomin').addEventListener('click', () => {
  if (indexofArr < zoomArr.length-1) {
    indexofArr += 1;
    value = zoomArr[indexofArr];
    document.querySelector('#zoom-select').value = value;
    element.style['transform'] = `scale(${value})`;
  }
});

document.querySelector('.zoomout').addEventListener('click', () => {
  if (indexofArr >0) {
    indexofArr -= 1;
    value = zoomArr[indexofArr];
    document.querySelector('#zoom-select').value = value;
    element.style['transform'] = `scale(${value})`
  }
});
