
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его.
Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    document.querySelector('.out-1').textContent = this.value
    return this.value
}
document.querySelector('.i-1').onkeyup = t1
//

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').textContent = e.code
    return e.code
}
document.querySelector('.i-2').onkeyup = t2


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true
если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
    if (e.keyCode > 47 && e.keyCode < 58)
        document.querySelector('.out-3').textContent = 'false'
    else
        document.querySelector('.out-3').textContent = 'true'
}

document.querySelector('.i-3').onkeyup = t3


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы
 в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(e) {
    document.querySelector('.out-4').innerHTML += e.key.toLowerCase()
}

document.querySelector('.i-4').onkeypress = t4

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5
 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
    document.querySelector('.out-5').innerHTML += e.key.toUpperCase()
}

document.querySelector('.i-5').onkeypress = t5
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(e) {
    if (e.charCode > 47 && e.charCode < 58 || e.charCode > 96 && e.charCode < 123) {
        document.querySelector('.out-6').innerHTML += e.key
    }
}
document.querySelector('.i-6').onkeypress = t6


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7
случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['hi', 'ho', 'ha'];
    document.querySelector('.out-7').textContent = a7[Math.floor(Math.random() * Math.floor(a7.length ))]
}

document.querySelector('.i-7').onkeypress = t7

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст,
 но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
    let out = document.querySelector('.out-8')

    if (e.charCode === 101)
        out.textContent += '1'
    else if (e.charCode === 111)
        out.textContent += '0'
    else if (e.charCode === 108)
        out.textContent += '7'
    else out.textContent += e.key
}

document.querySelector('.i-8').onkeypress = t8

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let counter = 0
function t9(e) {
    if (e.keyCode === 40) {
        counter++
        document.querySelector('.out-9').textContent = counter
    }
}

document.querySelector('.i-9').onkeyup = t9


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии
клавиш стрелка вправо и стрелка влево увеличивать ширину изображения.
 Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10(e) {
    let block = document.querySelector('.div-10 img')

    if (e.keyCode === 40 || e.keyCode === 38)
        block.style.height = `${block.offsetHeight + 1}px`
    if (e.keyCode === 39 || e.keyCode === 37)
        block.style.width = `${block.offsetWidth + 1}px`
}

document.querySelector('.i-10').onkeyup = t10

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру
(можно схематически).
Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt.
 При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания -
 возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl.
  Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише
  добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение,
   которое работает до последующего отжатия клавиши. */



function t11(e) {
    let currentKey = e.key
    let currentBtn = document.querySelector(`li[data-i="${currentKey}"]`)
    currentBtn.classList.add('cl')
}
function t111(e) {
    let currentKey = e.key
    let currentBtn = document.querySelector(`li[data-i="${currentKey}"]`)
    currentBtn.classList.remove('cl')
}

document.querySelector('.i-11').onkeydown = t11
document.querySelector('.i-11').onkeyup = t111
