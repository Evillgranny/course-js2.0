
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick.
 При срабатывании события  выводите в out-1 количество срабатываний события.
  В комментариях опишите результат. */

let t1Counter = 0
function t1() {
    document.querySelector('.out-1').textContent = ++t1Counter
}
//Работает нормально
document.querySelector('.div-1').onclick = t1

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick.
 При срабатывании события  выводите в out-2 количество срабатываний события.
  В комментариях опишите результат. */
let t2Counter = 0
function t2() {
    document.querySelector('.out-2').textContent = ++t2Counter
}
// На мобиле не сработал ни разу
document.querySelector('.div-2').ondblclick = t2


// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove.
При срабатывании события выводите в out-3 количество срабатываний события.
 В комментариях опишите результат. */
let t3Counter = 0
function t3() {
    document.querySelector('.out-3').textContent = ++t3Counter
}
// На мобиле работает при клике
document.querySelector('.div-3').onmousemove = t3


// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu.
 При срабатывании события выводите в out-4 количество срабатываний события.
  В комментариях опишите результат. */
let t4Counter = 0
function t4() {
    document.querySelector('.out-4').textContent = ++t4Counter
}
// На мобиле срабатывает при удержании пальца
document.querySelector('.div-4').oncontextmenu = t4

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown.
 При срабатывании события выводите в out-5 количество срабатываний события.
 В комментариях опишите результат. */
let t5Counter = 0
function t5() {
    document.querySelector('.out-5').textContent = ++t5Counter
}
// На мобиле работает как клик
document.querySelector('.div-5').onmousedown = t5

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter.
 При срабатывании события выводите в out-6 количество срабатываний события.
  В комментариях опишите результат. */

let t6Counter = 0
function t6() {
    document.querySelector('.out-6').textContent = ++t6Counter
}
// На мобиле работает как клик, если после каждого клика кликать вне элемента
document.querySelector('.div-6').onmouseenter = t6


// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave.
 При срабатывании события выводите в out-7 количество срабатываний события.
 В комментариях опишите результат.*/
let t7Counter = 0
function t7() {
    document.querySelector('.out-7').textContent = ++t7Counter
}
// На мобиле работает при клике вне элемента, если до этого был клик по нему
document.querySelector('.div-7').onmouseleave = t7



// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout.
 При срабатывании события выводите в out-8 количество срабатываний события.
 В комментариях опишите результат.*/

let t8Counter = 0
function t8() {
    document.querySelector('.out-8').textContent = ++t8Counter
}
// На мобиле работает при клике вне элемента, если до этого был клик по нему
document.querySelector('.div-8').onmouseout = t8


// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover.
 При срабатывании события выводите в out-9 количество срабатываний события.
  В комментариях опишите результат. */
let t9Counter = 0
function t9() {
    document.querySelector('.out-9').textContent = ++t9Counter
}
// На мобиле работает как онклик, если до этого был клик вне элемента
document.querySelector('.div-9').onmouseover = t9


// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup.
 При срабатывании события выводите в out-10 количество срабатываний события.
 В комментариях опишите результат.*/
let t10Counter = 0
function t10() {
    document.querySelector('.out-10').textContent = ++t10Counter
}
// нормально работает
document.querySelector('.div-10').onmouseup = t10





