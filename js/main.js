// ===== Declarations =====

import { Hero } from "./hero.js";
import { Monster } from "./monster.js";
import { Spider } from "./spider.js";
const myHero = new Hero('Dora', "L'EXTERMINATRICE", Hero.force, Hero.defense, Hero.maxPointDeVie, ["Potion d'invisibilité", "Potion de soin", "Potion de force"], []);
const myMonster = new Monster("Zombitch", 10, 5, 25, "rien", myHero);
const spider = new Spider("Speederman", 10, 5, 25, "rien", myHero);
console.log(myHero);
console.log(myMonster);
console.log(spider);

// ===== Hero =====

// console.log(myHero.attack(myMonster));
// console.log(myHero.takeStuff('Potion de soin', "potion"));
// console.log(myHero.takeStuff('Fauchon', "arme"));
// console.log(myHero.usePotion('Potion de soin'));

// ===== Monster =====

// console.log(myMonster.attack(myHero));
