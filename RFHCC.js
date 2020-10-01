/**
 *   @author Withey, Anna (witheya@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary River Falls Homes Construction Company
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedroomPrice, bathroomPrice, garagePrice;
let grandTotal;
const baseHomePrice = 50000, pricePerBedroom = 17000, pricePerBathroom = 12500, pricePerCar = 6000;

function main() {
    findLotNumber();
    calcBedroomPrice();
    calcBathroomPrice();
    calcGaragePrice();
    calcHomeTotal();
    console.log(`\nYour grand total for lot number ${lotNumber} is: ${grandTotal}`);
}

main();

function findLotNumber() {
    lotNumber = PROMPT.question(`\nPlease enter your lot number: `);
    if (typeof lotNumber != 'number') {
        lotNumber = PROMPT.question('Please enter a valid lot number: ');
    }
    return lotNumber;
}

function calcBedroomPrice() {
    let numBedroom;
    numBedroom = PROMPT.question(`\nPlease enter the desired number of bedrooms: `);
    if (typeof numBedroom != 'number') {
        numBedroom = PROMPT.question('Please enter a valid number of bedrooms: ');
    }
    bedroomPrice = numBedroom * pricePerBedroom;
    return bedroomPrice;
}

function calcBathroomPrice() {
    let numBathroom;
    numBathroom = PROMPT.question(`\nPlease enter the desired number of bathrooms: `);
    if (typeof numBathroom != 'number') {
        numBathroom = PROMPT.question('Please enter a valid number of bathrooms: ');
    }
    bathroomPrice = numBathroom * pricePerBathroom;
    return bathroomPrice;
}

function calcGaragePrice() {
    let numCar;
    numCar = PROMPT.question('\nPlease enter the size of your garage up to 3 cars: ');
    if (typeof numCar != 'number'&& numCar > 4) {
        numCar = PROMPT.question('Please enter a valid number of cars: ');
    }
    garagePrice = numCar * pricePerCar;
    return garagePrice;
}

function calcHomeTotal() {
    grandTotal = bedroomPrice + bathroomPrice + garagePrice + baseHomePrice;
    return grandTotal;
}