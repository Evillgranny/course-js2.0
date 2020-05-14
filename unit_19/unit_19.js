function search (block) {
    return document.querySelector(block)
}

// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1.
 Функция должна возвращать и выводить на экран содержимое блока (только текст).
 Вывод осуществляется в out-1.  */

function t1() {
    search('.out-1').textContent = search('.div-1').textContent
    return search('.out-1').textContent
}

search('.div-1').onclick = t1

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2.
 Функция должна возвращать true или false в зависимости от того,
  нажата ли клавиша alt или нет в момент клика.
  Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
    search('.out-2').textContent = e.getModifierState("Alt")
    return e.getModifierState("Alt")
}

search('.div-2').onclick = t2


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик.
При клике - увеличивайте ширину блока на 5px.
Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px.
 Ширину выводите в out-3. */

function t3() {
    let width = search('.div-3').offsetWidth += 5
    search('.div-3').style.width = width + 'px'
}

search('.div-3').onclick = t3


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4.
 Функция должна возвращать и выводить на экран содержимое блока (только текст).
 Вывод осуществляется в out-4. */

function t4() {
    search('.out-4').textContent = search('.div-4').textContent
    return search('.div-4').textContent
}

search('.div-4').ondblclick = t4

// Task 5 ============================================
/*  Дан блок .div-5.active.
 Добавьте на него событие двойной клик,
  по которому удалется класс active
  если он есть и добавляется если такого класса нет. */

function t5() {
    search('.div-5').classList.toggle('active')
}

search('.div-5').ondblclick = t5

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6
 еcли он показан и показывайте если скрыт.
 Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    search('.ul-6').classList.toggle('hide')
}

search('.div-6').ondblclick = t6


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс
 .active. При повторном клике - удаляйте. */

function t7(e) {
    e.preventDefault()
    search('.div-7').classList.toggle('active')
}

search('.div-7').oncontextmenu = t7
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором
 на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
    !this.checked ? document.oncontextmenu = () =>  false : document.oncontextmenu = () =>  true
}

search('.ch-8').onchange = t8


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png.
 При клике правой кнопкой мыши  - меняйте изображение на 2.png.
 Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    search('.div-9 img').src = 'img/2.png'
}

search('.div-9').oncontextmenu = t9


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png.
    При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    search('.div-10 img').src = 'img/2.png'
}

search('.div-10').onmouseenter = t10

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png.
 При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
    search('.div-11 img').src = 'img/2.png'
}
function t111() {
    search('.div-11 img').src = 'img/1.png'
}
search('.div-11').onmouseenter = t11
search('.div-11').onmouseleave = t111

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

function t12 () {
    this.classList.add('active')
}

search('.div-12').onmousedown = t12


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active.
Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

function t13 () {
    this.classList.add('active')
}

function t131 () {
    this.classList.remove('active')
}

search('.div-13').onmousedown = t13
search('.div-13').onmouseup = t131


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    search('.div-14').onclick = function () {
        this.classList.add('active')
    }
}

search('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let n15 = search('.div-15').textContent
function t15() {
    n15++
    search('.div-15').textContent = n15
}

search('.div-15').onmousemove = t15


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16() {
    let w16 = search('.div-16').offsetWidth += 1
    search('.div-16').style.width = w16 + 'px'
}
search('.div-16').onmousemove = t16

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    search('.div-16').onmousemove = t16
}
function t17Off() {
    search('.div-16').onmousemove = () => false
}
search('.b-17_on').onclick = t17On
search('.b-17_off').onclick = t17Off


// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {
    this.textContent = this.offsetWidth
}
search('.div-18').onmouseenter = t18

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
    this.textContent = this.classList
}
search('.div-19').onmouseout = t19


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {
    this.value += 1
}
search('progress').onmousemove = t20