class Goods {
    constructor(name, amount, image, count) {
        this.name = name
        this.amount = amount
        this.image = image
        this.count = count
    }

    draw (div) {
        document.querySelector(div).innerHTML =
        `<img src="${this.image}">
        <h1>${this.name}</h1>
        <h3>${this.count}</h3>`
    }
}

