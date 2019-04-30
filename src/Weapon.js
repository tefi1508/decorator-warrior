export class Weapon {
    constructor() {
        this.damage = 0;
    }

    getDamage() {
        return this.damage;
    }
}

export class Arch extends Weapon{
    constructor() {
        super();
        this.damage = 5;
    }
}

export class Sword extends Weapon{
    constructor() {
        super();
        this.damage = 10;
    }
}
