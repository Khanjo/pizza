describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: 
const myPizza = new Pizza("medium", ["pepperoni", "olives"]);
Expected Output: Pizza { size: "medium", toppings: ["pepperoni", "olives"], price: 0}

describe: sizeCost()

Test: "It should change the pizza price based on the size chosen"
Code: 
const myPizza = new Pizza("small");
myPizza.sizeCost()
Expected Output: 10

describe: vegCost()
Test: "It should change the pizza price for each veggie added"
Code:
const myPizza = new Pizza("small", ["Olive", "Onion", "Garlic"]);
myPizza.vegCost()
Expected Output = 3

describe: meatCost()
Test: "It should change the pizza price for each meat added"
Code:
const myPizza = new Pizza("small", ["Pepperoni", "Sausage", "Salami"]);
myPizza.meatCost()
Expected Output = 6
