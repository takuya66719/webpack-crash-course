import _ from 'lodash';
import Lion from './uitilities';

// console.log(uitilities.NiJou(7));
console.log(Lion.say());

function component() {
  const elem = document.createElement('div');
  const array = ['Hello', 'webpack', 'test'];
  elem.innerHTML = _.join(array, '-');
  return elem;
}

document.body.appendChild(component());
