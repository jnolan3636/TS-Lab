"use strict";
const mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
function findNameOfTallestMountain(mountains) {
    let tallestMountain = "";
    let tallestHeight = 0;
    for (const mountain of mountains) {
        if (mountain.height > tallestHeight) {
            tallestHeight = mountain.height;
            tallestMountain = mountain.name;
        }
    }
    return tallestMountain;
}
let nameOfTallestMountain = findNameOfTallestMountain(mountains);
console.log(nameOfTallestMountain);
const products = [
    {
        name: "mascara",
        price: 27,
    },
    {
        name: "eyeliner",
        price: 20,
    },
    {
        name: "lipstick",
        price: 22,
    },
];
function calcAverageProductPrice(products) {
    let newTotal = 0;
    for (let i = 0; i < products.length; i++) {
        newTotal += products[i].price;
    }
    let average = newTotal / products.length;
    return average;
}
let finalTotal = calcAverageProductPrice(products);
console.log(finalTotal);
let inventory = [
    {
        product: { name: "motor", price: 10 },
        quantity: 10,
    },
    {
        product: {
            name: "sensor",
            price: 12.5,
        },
        quantity: 4,
    },
    {
        product: {
            name: "LED",
            price: 1,
        },
        quantity: 20,
    },
];
function calcInventoryValue(inventory) {
    let totalValue = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalValue += inventory[i].product.price * inventory[i].quantity;
    }
    return totalValue;
}
let totalValue = calcInventoryValue(inventory);
console.log(totalValue);
