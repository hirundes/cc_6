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
