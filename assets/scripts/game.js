// ===== Declarations =====

import { Hero } from "./hero.js";
import { Spider } from "./spider.js";
import { Skeleton } from "./skeleton.js";
import { WitherBoss } from "./witherBoss.js";

const attackButton = document.querySelector("#btnAttack");
const useButton = document.querySelector("#btnUtiliser");
const nextButton = document.querySelector("#btnNext");
const equipementInventory = document.querySelector("#equipement");
const potionsInventory = document.querySelector("#potions");

// ===== Code =====

function startGame(floor = 0) {
    const hero = new Hero("L'EXTERMINATRICE", "Dora", Hero.force, Hero.defense, Hero.maxPointDeVie, ["Potion de soin", "Potion de soin"], []);
    let monster;
    nextFloor();

    attackButton.addEventListener("click", () => {
        if(hero.attack(monster) === true) {
            nextButton.style.display = 'initial';
            attackButton.style.display = 'none';
            monster.removeFromDom();
            hero.takeStuff(monster.leaveReward());
        }
        if(monster.attack(hero) === true) {
            attackButton.style.display = 'none';
            useButton.style.display = 'none';
            nextButton.style.display = 'none';
            console.log("Vous êtes resté en vie jusqu'à l'étage n°" + floor);
        }
    });

    useButton.addEventListener("click", () => {
        if (hero.usePotion("Potion de soin")) {
            const images = potionsInventory.querySelectorAll("img");
            if (images.length > 0) {
                potionsInventory.removeChild(images[0]);
            }
        }
        if (hero.sacDePotions.length === 0) {
            useButton.style.display = 'none';
        } else {
            useButton.style.display = 'initial';
        }
    });

    nextButton.addEventListener("click", () => {
        nextFloor();
    });

    function nextFloor() {
        floor++;
        if (hero.sacDePotions.length === 0) {
            useButton.style.display = 'none';
        } else {
            useButton.style.display = 'initial';
            potionsInventory.innerHTML = '';
            for (let i = 0; i < hero.sacDePotions.length; i++) {
                const potion = document.createElement('img');
                potion.src = "assets/images/potions.png";
                potionsInventory.appendChild(potion);
            }
        }

        attackButton.style.display = 'initial';
        nextButton.style.display = 'none';
        if ((floor % 10 !== 0 && floor % 5 !== 0) || (floor % 10 === 0 && floor % 5 !== 0)) {
            monster = new Spider("Speederman", 10, 1, 25, "spider", hero);
        } else if (floor % 10 === 5) {
            monster = new Skeleton("Padchair", 15, 5, 50, "skeleton", hero);
        } else {
            monster = new WitherBoss("Siamoua", 20, 10, 100, "witherBoss", hero);
        }
    }
}

startGame();
