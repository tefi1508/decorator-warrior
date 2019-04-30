import { Arch, Sword } from '../Weapon';
import { Fire } from '../Materials/Fire';
import { Iron } from '../Materials/Iron';
import { Wood } from '../Materials/Wood';

describe("Weapon", function () {
    test("get damage of weapon: Arch", function () {
        const arch = new Arch();
        expect(arch.getDamage()).toBe(5);
    });

    test("get damage of weapon: Sword", function () {
        const sword = new Sword();
        expect(sword.getDamage()).toBe(10);
    });

    test("get damage of weapon: Arch, with material: Fire", function () {
        let arch = new Arch();
        arch = new Fire(arch);
        expect(arch.calculateDamage()).toBe(35);
    });

    test("get damage of weapon: Arch, with material: Fire, Iron", function () {
        let arch = new Arch();
        arch = new Fire(arch);
        arch = new Iron(arch);
        expect(arch.calculateDamage()).toBe(45);
    });
});
