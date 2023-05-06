import { Vector } from 'js-sdsl';

const v = new Vector([1, 2, 3]);
console.log(v.size());    // 0
console.log(v.empty());   // true

v.forEach((e, i) => {
  console.log('e:', e, ' i:', i);
});
