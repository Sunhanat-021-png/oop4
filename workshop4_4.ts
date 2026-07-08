class Hero {
    name: string;
    hp: number;
    attackPower: number;

    constructor(n: string, h: number, p: number) {
        this.name = n;
        this.hp = h;
        this.attackPower = p;
    }

    show(): void {
        console.log(`${this.name} - HP: ${this.hp}, ATK: ${this.attackPower}`);
    }

    attack(target: Hero): void {
        target.hp -= this.attackPower;

        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);

        if (target.hp <= 0) {
            console.log(`${target.name} has fainted!`);
        }
    }
}

let hero1 = new Hero("Mage", 500, 200);
let hero2 = new Hero("Dragon", 190, 111);

hero1.show();
hero2.show();

hero1.attack(hero2);