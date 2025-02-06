//Task 1 - Business Profit Calculation
    //function calculateProfit 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    return (sellingPrice - costPrice) * unitsSold; //formula for calculating profit
}
let profit = calculateProfit(20, 30, 100); //costPrice, sellingPrice, and unitsSold numbers
    //logged "Task 1" and total profit
console.log("Task 1");
console.log(`   Business Total Profit: $${profit}`);

//Task 2 - Sales Tax Computation
    //function calculateSalesTax
function calculateSalesTax(amount, taxRate) {
    return (amount * taxRate) //formula for calculating sales tax
}
let salesTax = calculateSalesTax(100, 0.07); //amount and taxRate
    //logged "Task 2" and sales Tax
console.log("Task 2");
console.log(`   Sales Tax: $${salesTax}`);

//Task 3 - Employee Bonus Calculation
    //arrow function for calculateBonus
const calculateBonus = (salary, performanceRating) => {
    if (performanceRating = "Excellent") {      //Excellent = Bonus: 20%  of salary returned
        return 0.20 * salary
    }
    if (performanceRating = "Good") {           //Good = Bonus: 10% of salary returned
        return 0.10 * salary 
    }
    if (performanceRating = "Average")          //Average = Bonus: 5% of salary returned
        return 0.05 * salary
};
let bonus = calculateBonus(5000, "Good"); //defining bonus with salary and performance rating
//Logged "Task 3" and Bonus
console.log("Task 3");
console.log(`   Bonus: $${bonus}`);;

//Task 4 - Subscription Pricing Mode
function calculateSubscriptionCost(plan, months, discount = 0) { //Function calculateSubscriptionCost
    let planPricing = {        //Defining basic, premium, and enterprise
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    }
    return (planPricing[plan] * months) - discount      //Actual calculation subscription cost
};

    //Defined plan, months, and discount
let costs = (calculateSubscriptionCost("Basic", 6, 10)); 
    //Logged "Task 4, and costs"
console.log("Task 4");
console.log(`   Subscription Costs: $${costs}`);

//Task 5 - Currency Conversion
function convertCurrency(amount, exchangeRate) { //Function convertCurrency
    return amount * exchangeRate    //Returns converted amount
};

let Currency = convertCurrency(100, 1.1);   //Defining currency and test data
//Logged "Task 5" and currency
console.log("Task 5");
console.log (`   Converted Currency: $${Currency}`);

//Task 6 - Higher-Order Function for Bulk Orders
let orders = [200, 600, 1200, 250, 800]; // Declare array orders
function applyBulkDiscount(orders, discountFunction) {  //Higher-order function applyBulkDiscount
    return orders.map(discountFunction)     //Return discountFunction
};
let discount10Percent = (amount) => amount > 500  ? amount * 0.9: amount; //Declaring discount10Percent so > 500 = 0.10 discount.
let discountPurchases = applyBulkDiscount(orders, discount10Percent);
    //Logged "Task 6" and Discount Purchases
console.log("Task 6");
console.log(`   Discount Purchases: ${discountPurchases}`);

//Task 7 - Business Expense Tracker
function createExpenseTracker(ExpenseTracker) {     //Function createExpenseTracker
    return function(amount) {   // Returns another function(amount)
    return amount * 1   //Returns amount
}
};

let tracker = createExpenseTracker(); //Defining tracker with createExpenseTracker
//Logged "Task 7" and Expense Tracker
console.log("Task 7");
console.log(`   Expense Tracker: $${tracker(200)}`);

//Task 8 - Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {     // Recursive function calculateYearsToPromotion
        if (employeeLevel >= 10) {      // If statement defining level >=10 then its 0 years to promotion
        return 0;
    }
    let yearsToPromotion = 2    //Defining yearsToPromotion = 2
    return yearsToPromotion + calculateYearsToPromotion(employeeLevel + 1); //Returning calulation
};
//Logged "Task 8" and Years to Level 10 
console.log("Task 8");
console.log(`   Years to Level 10: ${calculateYearsToPromotion(7)}`);

