import { WeaponDecorator } from '../WeaponDecorator';

export class Iron extends WeaponDecorator {
    constructor(weapon) {
        super(weapon);
        this.damage = 10;
    }
}