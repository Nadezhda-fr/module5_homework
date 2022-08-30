// 5.3 Логический тип и ветвление
// Задание 1.

let number = +prompt("Введите число:");

if (typeof number !== 'number' || isNaN(number)) {
  console.log('Упс, кажется, вы ошиблись')
} else {
  if (number % 2 === 0) {
    console.log('Вы ввели чётное число')
  } else {
    console.log('Вы ввели нечётное число')
  }
}