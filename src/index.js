import _ from 'lodash';

function component() {
  const elem = document.createElement('div');
  const array = ['Hello', 'webpack'];
  elem.innerHTML = _.join(array, '-');
  return elem;
}

document.body.appendChild(component());
