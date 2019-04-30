import { Weapon} from './Weapon'

export class WeaponDecorator extends Weapon {
    constructor(weapon){
        super();
        this.weapon = weapon;
    }

    calculateDamage() {
        let totalDamage = this.damage + this.weapon.getDamage();
        return totalDamage;
    }
}