// ==========================
// Part 1: Inventory Logic
// ==========================
function findLowStockItems(
    quantities: number[],
    threshold: number
): number[] {
    return quantities.filter(quantity => quantity < threshold);
}

const quantities = [20, 5, 12, 8, 30];
console.log("Low Stock Items:", findLowStockItems(quantities, 10));


// ==========================
// Part 2: Product Class
// ==========================
class Product {
    readonly id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell(amount: number): void {
        if (amount > this.quantity) {
            console.log(`Error: Not enough stock for ${this.name}`);
        } else {
            this.quantity -= amount;
        }
    }

    restock(amount: number): void {
        this.quantity += amount;
    }
}


// ==========================
// Part 3 & Part 4: Hero Class
// ==========================
class Hero {
    name: string;
    hp: number;
    inventory: Product[];

    constructor(name: string, hp: number) {
        this.name = name;
        this.hp = hp;
        this.inventory = [];
    }

    addItem(item: Product): void {
        this.inventory.push(item);
    }

    useItem(itemName: string): void {
        const index = this.inventory.findIndex(
            item => item.name === itemName
        );

        if (index === -1) {
            console.log(`${itemName} not found.`);
            return;
        }

        const item = this.inventory[index];

        item.quantity--;

        console.log(
            `${this.name} used ${item.name}. Remaining: ${item.quantity}`
        );

        if (item.quantity === 0) {
            this.inventory.splice(index, 1);
        }
    }

    // Part 4
    takeDamage(damage: number): void {
        this.hp -= damage;

        if (this.hp <= 0) {
            this.hp = 0;
            console.log(`Game Over: ${this.name} has fallen!`);
        } else {
            console.log(
                `${this.name} took ${damage} damage. HP: ${this.hp}`
            );
        }
    }
}


// ==========================
// Test Program
// ==========================

// Product
const potion = new Product(1, "Potion", 50, 3);
const sword = new Product(2, "Sword", 500, 1);

console.log("\n=== Product Test ===");

potion.sell(1);
console.log(`Potion Stock: ${potion.quantity}`);

potion.restock(5);
console.log(`Potion Stock after Restock: ${potion.quantity}`);


// Hero
console.log("\n=== Hero Test ===");

const hero = new Hero("Arthur", 100);

hero.addItem(potion);
hero.addItem(sword);

hero.useItem("Potion");
hero.useItem("Potion");
hero.useItem("Potion");
hero.useItem("Potion");
hero.useItem("Potion");
hero.useItem("Potion");
hero.useItem("Potion");

console.log("\nInventory:");
console.log(hero.inventory);


// Part 4
console.log("\n=== Damage Test ===");

hero.takeDamage(40);
hero.takeDamage(30);
hero.takeDamage(30);