// 5.5 Массивы и базовые методы работы с ними. Практикуемся с командой debugger
// Задание 5.

const arr = [3, 5, 2, 5, 7, 9, 11];
console.log(arr.length)
arr.forEach(function(item, index, array){
    console.log(item)
 })

// 2 решение

const ar = [3, 5, 2, 5, 7, 9, 11];
console.log(ar.length)
for (i = 0; i < ar.length; i++) {
  console.log(ar[i])
}