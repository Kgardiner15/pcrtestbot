class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
        aReturn.push("Welcome to Planet Poutine.");
        aReturn.push("What size of poutine would you like to order?");
        return aReturn;
      },
      SIZE: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.OPTIONS;
        aReturn.push("What kind of poutine would you like?");
        aReturn.push("We have Classic and Chicken.");
        return aReturn;
      },
      OPTIONS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.TOPPINGS;
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('cl')) {
            this.Poutine = "classic"
            aReturn.push("Thank you for selecting the classic poutine.");
            aReturn.push("Would you like any extra toppings? We have bacon and extra gravy as options.");
        } else if (sInput.toLowerCase().startsWith('ch')) {
            this.Poutine = "chicken"
            aReturn.push("Thank you for selecting the chicken poutine.");
            aReturn.push("Would you like any extra toppings? We have bacon and extra gravy as options.");
        } else {
          aReturn.push("Sorry that is not an option.");
          aReturn.push("Your selection will be a classic poutine.")
        }
        return aReturn;
      },
      TOPPINGS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.DRINKS;
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('ex')) {
            this.Topping = "extra gravy"
            aReturn.push("Extra gravy has been added to your poutine.");
        } else if (sInput.toLowerCase().startsWith('ba')) {
            this.Topping = "bacon"
            aReturn.push("Bacon has been added to your poutine.");
        } else {
            this.Topping = "no topping"
            aReturn.push("Your poutine will not have any extra toppings on it");
        }
        aReturn.push("Would you like to add a drink to your order?");
        return aReturn;
      },
      DRINKS: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.FINAL;
        this.isDone = true;
        if (sInput.toLowerCase().startsWith("y")) {
            this.Drink = true;
        }
        if (this.Drink) {
            aReturn.push (`Your order of a ${this.Poutine} poutine with ${this.Topping} and a drink has been confirmed.`);
        }
        else {
          aReturn.push (`Your order of a ${this.Poutine} poutine with ${this.Topping} has been confirmed.`);
        }
        } 
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
    this.Poutine = "classic";
    this.Topping = "no topping";
    this.Drink = false; 
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }