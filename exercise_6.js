// 5.6 Циклы
// Задание 6.

const arr = [1, 1, 1, 1, 1, 1, 2];
lengthArr = arr.length;
result = true;
for (let i = 1; i < lengthArr; i++) {
   if (arr[0] !== arr[i]) {
     result = false
     break
   } else {
     result = true
   }
 }
console.log(result)