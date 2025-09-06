// 1. Interface for Magical Item
interface IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean
}

// 2. Class implementing IMagicalItem
class MagicalItem implements IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean

  constructor(name: string, type: string, powerLevel: number, isRare: boolean) {
    this.name = name
    this.type = type
    this.powerLevel = powerLevel
    this.isRare = isRare
  }

  displayInfo() {
    const rarity = this.isRare ? 'rare' : 'common'
    const message = `${this.name} is a ${rarity} ${this.type} with ${this.powerLevel} power`
    console.log(message)
  }
}

// Function to compare power levels of two items
function comparePower(item1: MagicalItem, item2: MagicalItem) {
  if (item1.powerLevel > item2.powerLevel) {
    return item1.name
  }
  return item2.name
}


// Generic class for inventory
class Inventory<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  add(item: T) {
    this.items.push(item)
  }

  getAll() {
    return this.items
  }

  getProperty<T, K extends keyof T>(item: T, key: K): T[K] {
    const value = item[key]
    return value
  }
}
// const numberInventory = new Inventory<number>()
// numberInventory.add(boots)

function getProperty<T>(item: T, key: keyof T) {
  const value = item[key]
  return value
}

// Example items
const boots = new MagicalItem('Boots of Strength', 'armor', 9001, true)
const sword = new MagicalItem('Sword of Speed', 'weapon', 9003, false)

// Create inventory and add items
const magicalInventory = new Inventory<MagicalItem>()
magicalInventory.add(boots)
magicalInventory.add(sword)

// Display all item info
const items = magicalInventory.getAll()
for (const item of items) {
  item.displayInfo()
}

// Compare power levels
const powerfulName = comparePower(boots, sword)
console.log('powerfulName', powerfulName)

// Access property using keyof
const bootsPower = magicalInventory.getProperty(boots, 'powerLevel')
console.log('bootsPower', bootsPower)

const vehicle = {
  position: 0,
  speed: 100
}
const vehicleSpeed = magicalInventory.getProperty(vehicle, 'speed')
console.log('vehicleSpeed', vehicleSpeed)



interface Shelves {
  top: {
    size: 'big'
    contents: string[]
  }
  middle: {
    size: 'medium' | 'small',
    contents: string
  }
  bottom: {
    size: 'tiny'
    contents: null
  }
}

const shelves: Shelves = {
  top: {
    size: 'big',
    contents: ['papers', 'books', 'pencils']
  },
  middle: {
    size: 'medium',
    contents: 'drinks'
  },
  bottom: { size: 'tiny', contents: null }
}

function getContents <K extends keyof Shelves> (shelf: K): Shelves[K]['contents'] {
  return shelves.top.contents
}
const contents = getContents('middle')