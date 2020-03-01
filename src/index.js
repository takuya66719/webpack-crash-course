import _ from 'lodash';
import Lion2 from './uitilities';

// console.log(uitilities.NiJou(7));
console.log(Lion2.say());

function component() {
  const elem = document.createElement('div');
  const array = ['Hello', 'webpack', 'test'];
  elem.innerHTML = _.join(array, '-');
  return elem;
}

document.body.appendChild(component());
