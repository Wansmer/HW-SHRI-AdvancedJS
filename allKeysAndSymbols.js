// Написать функцию, которая принимает объект и возвращает все свойства и символы как в самом объекте, так и во всей его цепочке прототипов.

const symbol = Symbol('123123');
const symbol2 = Symbol('123123');

const object = {
  1: 1,
  2: 2,
  [symbol]: 123
}

const arr = [1, 2, 3];

const func = () => {
  return 1;
}

const allKeysAndSymbols = (object) => {

  const res = [];

  if (!object) return res;

  const ownSymbols = Object.getOwnPropertySymbols(object)
  const ownNames = Object.getOwnPropertyNames(object);
  
  res.push(...ownNames, ...ownSymbols);

  const prototype = Object.getPrototypeOf(object);

  if (prototype) {
    const prototypeSymbols = Object.getOwnPropertySymbols(prototype);
    const prototypeNames = Object.getOwnPropertyNames(prototype);
    
    const proto = Object.getPrototypeOf(prototype);
    res.push(...prototypeNames, ...prototypeSymbols, ...allKeysAndSymbols(proto));
  }
  
  return res;
}

console.log(allKeysAndSymbols(object));
console.log(allKeysAndSymbols({}));
console.log(allKeysAndSymbols(func));
console.log(allKeysAndSymbols(arr));
console.log(allKeysAndSymbols(Error()));
console.log(allKeysAndSymbols(2));
// ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", ... ]