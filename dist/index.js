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
const boots = new MagicalItem('Boots of Strength', 'armor', 9001, true);
boots.displayInfo();
const sword = new MagicalItem('Sword of Speed', 'weapon', 9003, false);
sword.displayInfo();
// Function to compare power levels of two items
function comparePower(item1, item2) {
    if (item1.powerLevel > item2.powerLevel) {
        return item1.name;
    }
    return item2.name;
}
// Generic class for inventory
const powerfulName = comparePower(boots, sword);
console.log('powerfulName', powerfulName);
// Example items
// Create inventory and add items
// Display all item info
// Compare power levels
// Access property using keyof
