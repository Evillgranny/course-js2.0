
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart.
 Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').textContent += ' touch'
}

document.querySelector('.div-1').addEventListener('touchstart', t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart.
 Выведите в out-2 число срабатываний события. */
let t2Counter = 0
function t2() {
    document.querySelector('.out-2').textContent = ++t2Counter
}

document.querySelector('.div-2').addEventListener('touchstart', t2)


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
    document.querySelector('.out-3').textContent = 1
}
function t31() {
    document.querySelector('.out-3').textContent = 2
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3)
document.querySelector('.div-3_2').addEventListener('touchstart', t31)


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4.
При нажатии кнопки - добавляйте событие ontouchstart на блок div-4.
 При событии происходит вывод текста touch в out-4.  */

function t41 () {
    document.querySelector('.out-4').textContent += ' touch'
}

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', t41)
}

document.querySelector('.b-4').onclick = t4

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', t41)
}

document.querySelector('.b-5').onclick = t5

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent += " touchend"
}

document.querySelector('.div-4').addEventListener('touchend', t6)

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch,
при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    this.style.background = 'red'
}

document.querySelector('.div-7').addEventListener('touchstart', t7)

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch,
которое при срабатывании окрашивает блок случаным цветом из массива
a8=[red, green, blue, orange, pink, yellow] */
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']
function t8() {
    let rand = Math.floor(Math.random() * Math.floor(a8.length))
    this.style.background = a8[rand]
}

document.querySelector('.div-8').addEventListener('touchstart', t8)


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch.
 Выводите количество одновременных касаний в out-9. */

function t9(e) {
    document.querySelector('.out-9').textContent = e.touches.length
}

document.querySelector('.div-9').addEventListener('touchstart', t9)


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove.
При срабатывании события - увеличивайте его ширину на 1. */

function t10() {
    let width = this.offsetWidth
    this.style.width = `${width + 1}px`
}

document.querySelector('.div-10').addEventListener('touchmove', t10)

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch.
 При срабатывании выводите радиус события radiusX, radiusY. */

function t11 (e) {
    document.querySelector('.out-11').innerHTML = `X:  ${e.targetTouches[0].radiusX} <br> Y: ${e.targetTouches[0].radiusY}`
}

document.querySelector('.div-11').addEventListener('touchstart', t11)

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
 Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max.
  Если нажимается кнопка prev - то появляется изображение идущее перед текущим.
   Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.
    Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img.
     Добавьте кнопку reset для сброса состояния, когда выводится первое изображение.
      Все изображения и начальное состояние - выводится из массива
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст,
     которая будет выводиться если картинка активна.
     Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

let currentIndex = 0,
    textArr = ['text 1', 'text 2', 'text 3', 'text 4', 'text 5', 'text 6']

function t12() {
   let allMini =  document.querySelectorAll('.img-12-min')
   document.querySelector('.img-12-text').textContent = textArr[currentIndex]
   allMini.forEach((i, index) => {
       i.setAttribute('data-number', index)

       i.addEventListener('touchstart', function () {
           allMini.forEach(function (j) {
               j.classList.remove('active-img')
           })
           currentIndex = index
           this.classList.add('active-img')
           document.querySelector('.img-12-max').src = this.src
           document.querySelector('.img-12-text').textContent = textArr[currentIndex]
       })
   })

   document.querySelector('.prev').addEventListener('touchstart', function () {
       if (currentIndex === 0) {
           currentIndex = allMini.length - 1
       } else {
           currentIndex -= 1
       }
           let currentImg = allMini[currentIndex]

           allMini.forEach(function (j) {
               j.classList.remove('active-img')
           })
           currentImg.classList.add('active-img')
           document.querySelector('.img-12-max').src = currentImg.src
            document.querySelector('.img-12-text').textContent = textArr[currentIndex]
       })

    document.querySelector('.next').addEventListener('touchstart', function () {
        if (currentIndex === allMini.length - 1) {
            currentIndex = 0
        } else {
            currentIndex += 1
        }
        let currentImg = allMini[currentIndex]

        allMini.forEach(function (j) {
            j.classList.remove('active-img')
        })

        currentImg.classList.add('active-img')
        document.querySelector('.img-12-max').src = currentImg.src
        document.querySelector('.img-12-text').textContent = textArr[currentIndex]
    })

    document.querySelector('.reset').addEventListener('touchstart', function () {
        currentIndex = 0

        let currentImg = allMini[currentIndex]

        allMini.forEach(function (j) {
            j.classList.remove('active-img')
        })

        currentImg.classList.add('active-img')
        document.querySelector('.img-12-max').src = currentImg.src
        document.querySelector('.img-12-text').textContent = textArr[currentIndex]
    })
}

t12()






