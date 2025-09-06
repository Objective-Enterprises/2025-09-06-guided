"use strict";
// 2. Class implementing IMagicalItem
class MagicalItem {
    constructor(name, type, powerLevel, isRare) {
        this.name = name;
        this.type = type;
        this.powerLevel = powerLevel;
        this.isRare = isRare;
    }
    displayInfo() {
        const rarity = this.isRare ? 'rare' : 'common';
        const message = `${this.name} is a ${rarity} ${this.type} with ${this.powerLevel} power`;
        console.log(message);
    }
}
// Function to compare power levels of two items
function comparePower(item1, item2) {
    if (item1.powerLevel > item2.powerLevel) {
        return item1.name;
    }
    return item2.name;
}
// Generic class for inventory
class Inventory {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    getProperty(item, key) {
        const value = item[key];
        return value;
    }
}
// const numberInventory = new Inventory<number>()
// numberInventory.add(boots)
function getProperty(item, key) {
    const value = item[key];
    return value;
}
// Example items
const boots = new MagicalItem('Boots of Strength', 'armor', 9001, true);
const sword = new MagicalItem('Sword of Speed', 'weapon', 9003, false);
// Create inventory and add items
const magicalInventory = new Inventory();
magicalInventory.add(boots);
magicalInventory.add(sword);
// Display all item info
const items = magicalInventory.getAll();
for (const item of items) {
    item.displayInfo();
}
// Compare power levels
const powerfulName = comparePower(boots, sword);
console.log('powerfulName', powerfulName);
// Access property using keyof
const bootsPower = magicalInventory.getProperty(boots, 'powerLevel');
console.log('bootsPower', bootsPower);
const vehicle = {
    position: 0,
    speed: 100
};
const vehicleSpeed = getProperty(vehicle, 'speed');
console.log('vehicleSpeed', vehicleSpeed);
