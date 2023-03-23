// ===== Declarations =====

import { Heros } from "./heros.js";
import { Monstre } from "./monstre.js";
const myHero = new Heros('Superman', 'Clark', 20, 3, 5, 10, ["Potion d'invisibilité", "Potion de soin", "Potion de force"], ['Sword of power', 'Bow of agility']);
const myMonster = new Monstre("Zombitch", 10, 5, 25, "rien", myHero);
console.log(myHero);
console.log(myMonster);

// ===== Hero =====

console.log(myHero.attack(myMonster));
console.log(myHero.takeStuff('Potion de soin'));
console.log(myHero.usePotion('Potion de soin'));

// ===== Monster =====

// console.log(myMonster.attack(myHero));
