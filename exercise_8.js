//5.7 Ассоциативные массивы
//Задание 8.

let myMap = new Map();
let key = [];
let element = [];

myMap.set('one', 'string');
myMap.set(123, 456);
myMap.set(987, 'Hello');

let i = 0;
for (let name of myMap.keys()) {
  key[i] = name;
  i ++;
}

let index = 0;
for (let values of myMap.values()) {
  element[index] = values;
  index ++;
}

for (let n = 0; n < myMap.size; n++) {
  console.log(`Ключ - ${key[n]} Значение - ${element[n]}`)
}
  
  
