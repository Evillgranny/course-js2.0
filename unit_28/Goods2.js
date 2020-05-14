class Goods2 extends Goods{
    constructor(name, amount, image, count) {
        super(name, amount, image, count);
    }

    sale (status) {
        return status
    }

    draw(div) {
        document.querySelector(div).innerHTML = `Скидка!!!!`
    }
}