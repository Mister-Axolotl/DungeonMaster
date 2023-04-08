// ===== Declarations =====

import { Hero } from "./hero.js";
import { Spider } from "./spider.js";
import { Skeleton } from "./skeleton.js";
import { WitherBoss } from "./witherBoss.js";

const myHero = new Hero('Dora', "L'EXTERMINATRICE", Hero.force, Hero.defense, Hero.maxPointDeVie, ["Potion d'invisibilité", "Potion de soin", "Potion de force"], []);
const spider = new Spider("Speederman", 10, 5, 25, "spider", myHero);
const skeleton = new Skeleton("Padchair", 20, 10, 40, "skeleton", myHero);
const witherBoss = new WitherBoss("Siamoua", 30, 20, 100, "witherBoss", myHero);
console.log(myHero);
console.log(spider);
console.log(skeleton);
console.log(witherBoss);
console.log(spider.numberMax + " : " + spider.spawnWithStuff()); // pour voir si le monstre spawn avec du stuff, sinon il envoie "nothing"
console.log(skeleton.numberMax + " : " + skeleton.spawnWithStuff()); // pour voir si le monstre spawn avec du stuff, sinon il envoie "nothing"
console.log(witherBoss.numberMax + " : " + witherBoss.spawnWithStuff()); // pour voir si le monstre spawn avec du stuff, sinon il envoie "nothing"

// ===== Hero =====

// console.log(myHero.attack(myMonster));
// console.log(myHero.takeStuff('Potion de soin', "potion"));
// console.log(myHero.takeStuff('Fauchon', "arme"));
// console.log(myHero.usePotion('Potion de soin'));

// ===== Monster =====

// console.log(myMonster.attack(myHero));
