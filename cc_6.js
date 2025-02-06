//Task 1 - Business Profit Calculation
    //function calculateProfit 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; //defining profit / formula for calculating profit
    console.log(`Total Profit: $${profit}`);    //logged profit
}
    //logged "Task 1" and total profit
console.log("Task 1");
calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"

//Task 2 - Sales Tax Computation
    //function calculateSalesTax
function calculateSalesTax(amount, taxRate) {
    let salesTax = (amount * taxRate) //formula for calculating sales tax
    console.log(`Sales Tax: $${salesTax}`)
}
    //logged "Task 2" and sales Tax
console.log("Task 2");
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

//Task 3 - Employee Bonus Calculation
    //arrow function for calculateBonus
const calculateBonus = (salary, performanceRating) => {
    if (performanceRating == "Excellent") {      //Excellent = Bonus: 20%  of salary returned
         bonus = 0.20 * salary
    }
    else if (performanceRating == "Good") {           //Good = Bonus: 10% of salary returned
         bonus = 0.10 * salary 
    }
    else if (performanceRating == "Average")          //Average = Bonus: 5% of salary returned
         bonus = 0.05 * salary

        console.log(`Bonus:$${bonus}`)      //logged bonus
};

//Logged "Task 3" and Bonus
console.log("Task 3");
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"

//Task 4 - Subscription Pricing Mode
function calculateSubscriptionCost(plan, months, discount = 0) { //Function calculateSubscriptionCost
    let planPricing = {        //Defining basic, premium, and enterprise
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    }
    let totalCost = (planPricing[plan] * months) - discount;    //defining totalCost calculation
    console.log(`Total Cost: $${totalCost}`);   //logged totalCost
}
    //Logged "Task 4", and costs
console.log("Task 4");
calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"

//Task 5 - Currency Conversion
function convertCurrency(amount, exchangeRate) { //Function convertCurrency
    let convertedAmount =  amount * exchangeRate    //defined convertedAmount calculation
    console.log(`Converted Amount: $${convertedAmount}`) //logged convertedAmount
};
    //Logged "Task 5" and currency
console.log("Task 5");
convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"

//Task 6 - Higher-Order Function for Bulk Orders
let orders = [200, 600, 1200, 250, 800]; // Declare array orders
function applyBulkDiscount(orders, discountFunction) {  //Higher-order function applyBulkDiscount
    return orders.map(discountFunction)     //Return discountFunction
};
let discount10Percent = (amount) => amount > 500  ? amount * 0.9: amount; //Declaring discount10Percent so > 500 = 0.10 discount.
    //Logged "Task 6" and Discount Purchases
console.log("Task 6");
console.log(`Discount Purchases: ${applyBulkDiscount(orders, discount10Percent)}`);

//Task 7 - Business Expense Tracker
function createExpenseTracker() {     //Function createExpenseTracker d
    let totalExpenses = 0 //Defining total expenses
    return function(amount) { // Returns another function(amount)
    totalExpenses += amount   
    return (`Expense Tracker: $${totalExpenses}`)   //Returns totalExpenses
}
};
let tracker = createExpenseTracker(); //defining tracker as createExpenseTracker

console.log("Task 7");
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"


//Task 8 - Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {     // Recursive function calculateYearsToPromotion
        if (employeeLevel >= 10) {      // If statement defining level >=10 then its 0 years to promotion
        return 0;
    }
    return 2+calculateYearsToPromotion(employeeLevel + 1) //Returns promotion every 2 years + employee level + 1
};
//Logged "Task 8" and Years to Level 10 
console.log("Task 8");
console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`);
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`);