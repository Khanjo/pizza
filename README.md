# _Pepperoni Hug Spot_

#### _A Pizza Restaurant, 06/16/2023_

#### By _**Joshua Khan**_

## Description

_This webpage will allow a user to build their own pizza and give them the cost._

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/Khanjo/pizza.git`
2. Navigate into the `/pizza/` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`

#### Go here to see it on Github Pages! [https://khanjo.github.io/pizza/](https://khanjo.github.io/pizza/)

## Project Specifications

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

## Known Bugs

_No known bugs_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VSCode_

### License

[MIT License.](https://opensource.org/license/mit/)

Copyright (c) 2023 **_Joshua Khan_**
