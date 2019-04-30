import { Arch, Sword } from '../Weapon';
import { Fire } from '../Materials/Fire';
import { Iron } from '../Materials/Iron';
import { Wood } from '../Materials/Wood';

describe("Weapon", function () {
    test("get damage of weapon: Arch", function () {
        const arch = new Arch();
        expect(arch.calculateDamage()).toBe(5);
    });

    test("get damage of weapon: Sword", function () {
        const sword = new Sword();
        expect(sword.calculateDamage()).toBe(10);
    });

    test("get damage of weapon: Arch, with material: Fire", function () {
        let arch = new Arch();
        arch = new Fire(arch);
        expect(arch.calculateDamage()).toBe(35);
    });

    test("get damage of weapon: Sword, with material: Wood", function () {
        let sword = new Sword();
        sword = new Wood(sword);
        expect(sword.calculateDamage()).toBe(15);
    });

    test("get damage of weapon: Sword, with material: Wood, Iron", function () {
        let sword = new Sword();
        sword = new Wood(sword);
        sword = new Iron(sword);
        expect(sword.calculateDamage()).toBe(25);
    });

    test("get damage of weapon: Arch, with material: Fire, Iron and Wood", function () {
        let arch = new Arch();
        arch = new Fire(arch);
        arch = new Iron(arch);
        arch = new Wood(arch);
        expect(arch.calculateDamage()).toBe(50);
    });    

});
