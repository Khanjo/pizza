// Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = 0
}

Pizza.prototype.sizeCost = function () {
    if (this.size === "Small") {
        this.price += 10;
    } else if (this.size === "Medium") {
        this.price += 13;
    } else if (this.size === "Large") {
        this.price += 16;
    }
    return this.price;
};

Pizza.prototype.vegCost = function () {
    const veggie = ["Onion", "Bell pepper", "Mushroom", "Garlic", "Olive", "Jalapeno", "Pineapple"];
    for (let i = 0; this.toppings.length > i; ++i) {
        if (veggie.includes(this.toppings[i])) {
            this.price += 1;
        }
    }
    return this.price;
};

Pizza.prototype.meatCost = function () {
    const meat = ["Pepperoni", "Salami", "Sausage", "Ham", "Bacon", "Chicken", "Beef"];
    for (let i = 0; this.toppings.length > i; ++i) {
        if (meat.includes(this.toppings[i])) {
            this.price += 2;
        }
    }
    return this.price;
};

// UI Logic

window.addEventListener("load", function () {
    let form = document.getElementById("makePizza");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let sizeInput = document.getElementById("size").value;
        let toppingInput = [];
        let toppingChoice = document.querySelectorAll("input[name=pizzaToppings]:checked");

        toppingChoice.forEach(function (value) {
            toppingInput.push(value);
        });
        let pizza = new Pizza(sizeInput, toppingInput);
        pizza.sizeCost();
        pizza.vegCost();
        pizza.meatCost();
        console.log(pizza);
    });
});