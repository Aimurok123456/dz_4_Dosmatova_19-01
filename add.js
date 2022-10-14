// Задача №1.
// напишите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута)
function buttonClick() {
    let input = document.getElementById('input');
    alert(input.value);
}




// Задача №2.
// Выведите на экран текущий месяц словом, по-русски


let months = [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
    'июль', 'август', 'сениябрь', 'октябрь', 'ноябрь', 'декабрь'
];

let date = new Date();
let month = date.getMonth();
alert(months [month]);

// Задача №3
// Повторите поведение кнопки по нажатию на нее
// (она осуществляет обмен содержимым между двумя инпутами,
// можете понажимать на нее несколько раз
// или вручную сменить содержимое инпутов)
function buttonClick() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input1Value = input1.value;
    let input2Value = input2.value;
    input1.value = input2Value;
    input2.value = input1Value;
}
