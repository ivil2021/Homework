// Task4

/*
- В последовательности записаны целые числа от 1 до N в произвольном порядке,
но одно из чисел пропущено (остальные встречаются ровно по одному разу).
N заранее неизвестно. Определить пропущенное число
*/
 
function findNumber(arr) {
    let max = 0;
    let sum = 0;
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        sum = sum + arr[i];
    }

    x = max / 2 * (max + 1) - sum;

    return x;
}

// Тесты
console.assert(findNumber([4, 2, 5, 3]) === 1 , 'NO!')
console.assert(findNumber([1, 4, 3, 5]) === 2 , 'NO!')
console.assert(findNumber([1, 4, 2, 5]) === 3 , 'NO!')