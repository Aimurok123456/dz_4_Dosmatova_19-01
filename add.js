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
