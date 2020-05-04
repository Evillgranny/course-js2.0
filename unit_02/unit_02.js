// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7,
    b = 9

console.log( a * b)


// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7,
    d = 9

document.querySelector('.out-2').textContent = (c / d)

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3,
    f = 5

document.querySelector('.out-3').textContent = (e + f)

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3',
    f1 = 5

document.querySelector('.out-4').textContent = (e1 + f1)
// Конкатенация строк. f1 стала строкой.


// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3,
    f2 = 0

document.querySelector('.out-5').textContent = (e2 / f2)


// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3,
    f3 = 'hello'

document.querySelector('.out-6').textContent = (e3 + f3)

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3,
    f4 = 'hello'
document.querySelector('.out-7').textContent = (e4 * f4)

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let btn8 = document.querySelector('.b-8'),
    input8 = document.querySelector('.input-8')

btn8.onclick = t8

function t8() {
    console.log( input8.value )
}


// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let btn9 = document.querySelector('.b-9'),
    input9 = document.querySelector('.i-9'),
    out9 = document.querySelector('.out-9')

btn9.onclick = t9

function t9() {
    out9.textContent = input9.value
    input9.value = ''
}



// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let btn10 = document.querySelector('.b-10'),
    input10 = document.querySelector('.i-10'),
    out10 = document.querySelector('.out-10')

btn10.onclick = t10

function t10() {
    out10.textContent = ( +input10.value * 10 )
}

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let btn11 = document.querySelector('.b-11'),
    input11 = document.querySelector('.i-11'),
    out11 = document.querySelector('.out-11')

btn11.onclick = t11

function t11() {
    out11.textContent = ( +input11.value + 10 )
}

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let btn12 = document.querySelector('.b-12'),
    input121 = document.querySelector('.i-12_1'),
    input122 = document.querySelector('.i-12_2'),
    out12 = document.querySelector('.out-12')

btn12.onclick = t12

function t12() {
    out12.textContent = `Hello ${input121.value} ${input122.value}`
}



// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.
let btn13 = document.querySelector('.b-13'),
    input131 = document.querySelector('.i-13_1'),
    input132 = document.querySelector('.i-13_2'),
    out13 = document.querySelector('.out-13')

btn13.onclick  = t13

function t13() {
    out13.textContent = +input131.value + +input132.value
}

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

document.querySelector('.i-14').value = 'Hello'

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15')
y.style.border = '2px solid red'

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
let btn16 = document.querySelector('.b-16'),
    input161 = document.querySelector('.i-16_1'),
    input162 = document.querySelector('.i-16_2'),
    out16 = document.querySelector('.out-16')

btn16.onclick  = t16

function t16() {
    out16.textContent = +input161.value + +input162.value
}


// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let input17 = document.querySelector('.i-17'),
    btn17 = document.querySelector('.b-17'),
    out17 = document.querySelector('.out-17')

btn17.onclick = t17

function t17() {
    let t = input17.value
    out17.textContent = parseInt(t)
}



// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let input18 = document.querySelector('.i-18'),
    btn18 = document.querySelector('.b-18')


btn18.onclick = t18

function t18() {
    let t = input18.value
    console.log(parseFloat(t))
}


// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let input191 = document.querySelector('.i-19_1'),
    input192 = document.querySelector('.i-19_2'),
    btn19 = document.querySelector('.b-19'),
    out19 = document.querySelector('.out-19')

btn19.onclick = t19

function t19() {
    out19.textContent = (+input191.value + +input192.value)
}


// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let input201 = document.querySelector('.i-20_1'),
    input202 = document.querySelector('.i-20_2'),
    input203 = document.querySelector('.i-20_3'),
    input204 = document.querySelector('.i-20_4'),
    btn20 = document.querySelector('.b-20'),
    out20 = document.querySelector('.out-20')

btn20.onclick = t20

function t20() {
    out20.textContent = `Уважаемый ${input201.value}, ${input202.value}, ваш возраст ${input203.value} года, по професси вы ${input204.value}`
}

