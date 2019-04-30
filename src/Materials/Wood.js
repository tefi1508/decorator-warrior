import { WeaponDecorator } from '../WeaponDecorator';

export class Wood extends WeaponDecorator {
    constructor(weapon) {
        super(weapon);
        this.damage = 5;
    }
}