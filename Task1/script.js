// Task1

/*
- В футбол играет 2 команды. Некто ставит ставку на счет в матче, например 1:2.
Если человек угадывает точный счет, то получает большой приз.
Если угадывает исход матча (выигрыш той или иной команды или ничью),
то получает маленький приз. Если не угадывает, то не получает ничего.
    Написать функцию, которая принимает на вход предсказанный счет
и реальный счет (например, массив вида [“1 : 2”, “3 : 2”]) и возвращает 
0 - не получает ничего
1 - маленький приз
2 - большой приз
    Примеры:
[“1 : 2”, “3 : 2”] => 0
[“2 : 1”, “1 : 2”] => 0
[“5 : 4”, “1 : 1”] => 0

[“1 : 2”, “2 : 3”] => 1
[“3 : 2”, “5 : 2”] => 1
[“2 : 2”, “3 : 3”] => 1

[“2 : 2”, “2 : 2”] => 2
[“3 : 2”, “3 : 2”] => 2
*/

function footballBet(betScore, actScore) {
    var res = 7;

    // проверка на точный счет
    if (betScore === actScore) {
    res = 2;

    // проверка на ничью
    } else if ((betScore[0] / betScore[4]) === (actScore[0] / actScore[4])) {
    res = 1;

    // проверка на выигрыш 1 команды
    } else if ((betScore[0] > betScore[4]) && (actScore[0] > actScore[4])) {
    res = 1;

    // проверка на выигрыш 2 команды
    } else if ((betScore[0] < betScore[4]) && (actScore[0] < actScore[4])) {
    res = 1;

    // не угадали
    } else {
    res = 0;
    }
    return res;
}

// Тесты
console.assert(footballBet('1 : 2', '3 : 2') === 0, 'Actual result: %s', 0);
console.assert(footballBet('2 : 1', '1 : 2') === 0, 'Actual result: %s', 0);
console.assert(footballBet('5 : 4', '1 : 1') === 0, 'Actual result: %s', 0);

console.assert(footballBet('1 : 2', '2 : 3') === 1, 'Actual result: %s', 1);
console.assert(footballBet('3 : 2', '5 : 2') === 1, 'Actual result: %s', 1);
console.assert(footballBet('2 : 2', '3 : 3') === 1, 'Actual result: %s', 1);

console.assert(footballBet('2 : 2', '2 : 2') === 2, 'Actual result: %s', 2);
console.assert(footballBet('3 : 2', '3 : 2') === 2, 'Actual result: %s', 2);