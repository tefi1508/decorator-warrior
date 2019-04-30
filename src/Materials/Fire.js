import { WeaponDecorator } from '../WeaponDecorator';

export class Fire extends WeaponDecorator {
    constructor(weapon) {
        super(weapon);
        this.damage = 30;
    }
}