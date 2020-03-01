import _ from 'lodash';
import './style.css';
import logo from './unnamed.png';

function component() {
  const elem = document.createElement('div');
  const array = ['Hello', 'webpack', 'test'];
  elem.innerHTML = _.join(array, '-');
  return elem;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = logo;
document.body.appendChild(image);
