export class Weapon {
    constructor() {
        this.damage = 0;
    }
}

export class Arch extends Weapon{
    constructor() {
        super();
        this.damage = 5;
    }

    calculateDamage(){
        return this.damage;
    }
}

export class Sword extends Weapon{
    constructor() {
        super();
        this.damage = 10;
    }

    calculateDamage(){
        return this.damage;
    }
}
