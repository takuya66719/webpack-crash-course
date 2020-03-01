import _ from 'lodash';
import './style.css';

function component() {
  const elem = document.createElement('div');
  const array = ['Hello', 'webpack', 'test'];
  elem.innerHTML = _.join(array, '-');
  return elem;
}

document.body.appendChild(component());
document.body.classList.add('haikei');
