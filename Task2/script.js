// Task2

/*
- Написать функцию, которая определяла бы является ли входящая строка палиндромом или нет
    Примеры:
isPalindrome(“racecar”); //true
isPalindrome(“table”); //false
isPalindrome(“А роза упала на лапу Азора”’); //true
*/

function isPalindrome(str1) {
    var res = 7;

    str1 = str1.replaceAll(' ', '').toLowerCase(); // удаление пробелов, нижний регистр

    let str2 = str1.split('').reverse().join(''); // разделение, реверс, соединение

    res = (str1 === str2) ? true : false; // при равенстве палиндром, иначе не палиндром

    return res;
}

// Тесты
console.assert(isPalindrome('racecar') === true, 'Actual value: %s', true);
console.assert(isPalindrome('table') === false, 'Actual value: %s', false);
console.assert(isPalindrome('А роза упала на лапу Азора') === true, 'Actual value: %s', true);