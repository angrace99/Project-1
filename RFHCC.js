/**
 *   @author Withey, Anna (witheya@student.ncmich.edu)
 *   @version 0.0.2
 *   @summary River Falls Homes Construction Company
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedroomPrice, bathroomPrice, garagePrice;
let grandTotal;
const BASE_HOME_PRICE = 50000, PRICE_PER_BEDROOM = 17000, PRICE_PER_BATHROOM = 12500, PRICE_PER_CAR = 6000;

function main() {
    findLotNumber();
    calcBedroomPrice();
    calcBathroomPrice();
    calcGaragePrice();
    calcHomeTotal();
}

main();

function findLotNumber() {
    if (! lotNumber) {
        lotNumber = Number(PROMPT.question('\nPlease enter your lot number: '));
        while (isNaN(parseInt(lotNumber))) {
            lotNumber = Number(PROMPT.question('\nPlease enter a valid lot number: '));
        }
    }
}

function calcBedroomPrice() {
    let numBedroom;
    if (! numBedroom) {
        numBedroom = Number(PROMPT.question('\nPlease enter the desired number of bedrooms: '));
        while (isNaN(parseInt(numBedroom))) {
            numBedroom = Number(PROMPT.question('\nPlease enter a valid number of bedrooms: '));
        }
    }
    bedroomPrice = numBedroom * PRICEPERBEDROOM;
}

function calcBathroomPrice() {
    let numBathroom;
    if (! numBathroom) {
        numBathroom = Number(PROMPT.question('\nPlease enter the desired number of bathrooms: '));
        while (isNaN(parseInt(numBathroom))) {
            numBathroom = Number(PROMPT.question('\nPlease enter a valid number of bathrooms: '));
        }
    }
    bathroomPrice = numBathroom * PRICEPERBATHROOM;
}

function calcGaragePrice() {
    let numCar;
    const MAX_NUM_CARS = 4;
    if (! numCar) {
        numCar = Number(PROMPT.question('\nPlease enter the size of your garage by number of cars: '));
        while (isNaN(parseInt(numCar)) || numCar > MAX_NUM_CARS) {
                numCar = Number(PROMPT.question('\nPlease enter a valid number of cars: '));
        }
    }
    garagePrice = numCar * PRICEPERCAR;
}

function calcHomeTotal() {
    grandTotal = bedroomPrice + bathroomPrice + garagePrice + BASEHOMEPRICE;
    console.log(`\nYour grand total for lot number ${lotNumber} is: ${grandTotal}`);
}
