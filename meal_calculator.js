// A diner object with:
// Name
// list of dishes (what they ate, and how much it cost)
// A method to add the total of the dishes
// A method to calculate tax for this diner //
// A method to calculate the tip for this diner //


// A bill object with:
// list of diners
// method to total and print the total of all diners, including tax//
// method to total and print diners tips
// method to print a breakdown for each diner including their name, total, tax and tip
// Dummy data that creates:
// 1 bill
// 3 diners that are on the same bill
// 2 dishes for each diner
// Print the total for the bill
// Print the total tip for the waitress
// Print a breakdown for each person

//Creating a variable for DINER (diner)
var diner = function (name, dishes){
	this.name = name;
	this.dishes = dishes;
};
//Creating a variable for DISHES (dish)
var dish = function(name, price) {
	this.name = name;
	this.price = price;
};

var Steak = new dish('Steak', 15);
var Fish = new dish('Fish', 10);
var Pasta = new dish('Pasta', 9);
var Ceviche = new dish('Ceviche', 13);
var Cheese = new dish('Cheese', 8);
var Calamari = new dish('Calamari', 10);


var Hieu = new diner('Jon', [Steak, Calamari]);
var Hanh = new diner('Jhon', [Fish, Ceviche]);
var Hong = new diner('Jonny', [Cheese, Pasta]);


var meal = function(tax,tip,diners){
 this.diners = diners;
 this.tip = tip;
 this.tax = tax;
 this.total = 0;
 this.subtotal = 0;
 var self = this;
 this.calculatePrice = function(){
   this.diners.map(function(diner){
     diner.dishes.map(function(dish){
       self.subtotal += dish.price;
     });
   });
   this.total = this.subtotal + (this.subtotal * this.tip) + (this.subtotal * this.tax);
 };
};
meal = new meal(0.6,0.20,[Jon,Jhon,Jonny]);
meal.calculatePrice();
console.log('Subtotal:',meal.subtotal, '($) dollars');
console.log('Tax:',meal.tax, 'percent');
console.log('Tip:',meal.tip, 'percent');
console.log('Total:',meal.total, '($) dollars');