// Task3

/*
- Написать функцию, которая принимает на вход 2 строки и проверяет
являются ли входные строки анаграммами
    Примеры:
isAnagram('friend', 'Finder'); //true
isAnagram('hello', 'bye'); //false
*/

function isAnagram(str1, str2) {
    var res = 7;

    // Для 1 строки
    str1 = str1.toLowerCase().split('');  // нижний регистр, разделение
    str1 = str1.sort().join('');          // сортировка, соединение

    // Для 2 строки
    str2 = str2.toLowerCase().split('');  // нижний регистр, разделение
    str2 = str2.sort().join('');          // сортировка, соединение

    res = (str1 === str2) ? true : false; // при равенстве анаграмма, иначе не анаграмма

    return res;
}

// Тесты
console.assert(isAnagram('friend', 'Finder') === true, 'Actual result: %s', true);
console.assert(isAnagram('hello', 'bye') === false, 'Actual result: %s', false);