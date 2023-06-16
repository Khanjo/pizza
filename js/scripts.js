//Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0
}

Pizza.prototype.sizeCost = function () {
    if (this.size === "small") {
        this.price += 10;
    } else if (this.size === "medium") {
        this.price += 13;
    } else if (this.size === "large") {
        this.price += 16;
    }
    return this.price;
}