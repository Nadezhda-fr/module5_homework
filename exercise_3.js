// 5.4 Строки. Числа
// Задание 3. .reverse почему-то не работал :( 

    let str = "Hello";
    let result = "";
    let i = 0;
    
    while (i < str.length) {
      result = str[i] + result;
      i++
    }
    console.log(result)