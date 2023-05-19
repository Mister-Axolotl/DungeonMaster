// ===== Declarations =====

import { Hero } from "./hero.js";
import { Spider } from "./spider.js";
import { Skeleton } from "./skeleton.js";
import { WitherBoss } from "./witherBoss.js";
import { playAudio, refreshInventory, refreshHealthBar } from "./functions.js";

const attackButton = document.querySelector("#btnAttack");
const useButton = document.querySelector("#btnUtiliser");
const nextButton = document.querySelector("#btnNext");
const divEntities = document.querySelector("#entities");
const floorValue = document.querySelector("#floor");
const loseScreen = document.querySelector("#lose");
const textDeathFloor = document.querySelector("#deathFloor");
const divHero = document.querySelector("#hero");
const bag = document.querySelector("#bag");
const heroHealthBarProgress = document.querySelector('#hero-health-bar-progress');
const monsterHealthBarProgress = document.querySelector('#monster-health-bar-progress');
const equipementInventory = document.querySelector("#equipementValue");
const potionsInventory = document.querySelector("#potionsValue");

let spiderDegat = 10;
let skeletonDegat = 15;
let witherBossDegat = 20;
let tauxDaugmentation = 1.2;

// ===== Code =====

function startGame(floor = 0) {
    const hero = new Hero("L'EXTERMINATRICE", "Dora", Hero.force, Hero.defense, Hero.maxPointDeVie, [], []);
    let monster;
    heroHealthBarProgress.style.height = '100%';
    nextFloor();
    refreshInventory(hero, useButton, potionsInventory, equipementInventory);

    attackButton.addEventListener("click", () => {
        playAudio();
        if (hero.attack(monster) === true) { // si le monstre est mort
            nextButton.style.display = 'initial';
            attackButton.style.display = 'none';
            divEntities.style.justifyContent = "center";
            divHero.src = "assets/images/hero_win.png";
            hero.takeStuff(monster.leaveReward());
            monster.removeFromDom();
            refreshInventory(hero, useButton, potionsInventory, equipementInventory);
            refreshHealthBar(hero, heroHealthBarProgress, monster, monsterHealthBarProgress);
            monsterHealthBarProgress.classList.add("health-bar-progress-black");
        } else { // si le monstre n'est pas mort
            if (monster.attack(hero) === true) { // le monstre attaque et si on meurt
                attackButton.style.display = 'none';
                useButton.style.display = 'none';
                nextButton.style.display = 'none';
                bag.style.display = 'none';
                loseScreen.style.display = 'initial';
                divHero.src = "assets/images/hero_dead.png";
                divHero.style.height = "25vh";
                textDeathFloor.innerHTML = `Mort à l'étage n°${floor}`;
            }
            refreshHealthBar(hero, heroHealthBarProgress, monster, monsterHealthBarProgress);
        }
    });

    useButton.addEventListener("click", () => {
        playAudio();
        refreshHealthBar(hero, heroHealthBarProgress, monster, monsterHealthBarProgress);
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
        playAudio();
        nextFloor();
    });

    function nextFloor() {
        floor++;
        floorValue.innerHTML = floor;
        divEntities.style.justifyContent = "space-evenly";
        divHero.src = "assets/images/hero.png";
        attackButton.style.display = 'initial';
        nextButton.style.display = 'none';

        if (floor % 10 === 0) {
            Spider.maxPointDeVie = Spider.maxPointDeVie * tauxDaugmentation;
            Skeleton.maxPointDeVie = Skeleton.maxPointDeVie * tauxDaugmentation;
            spiderDegat *= tauxDaugmentation;
            skeletonDegat *= tauxDaugmentation;
            if (floor > 10) {
                WitherBoss.maxPointDeVie = WitherBoss.maxPointDeVie * tauxDaugmentation;
                witherBossDegat *= tauxDaugmentation;
            }
        }

        if ((floor % 10 !== 0 && floor % 5 !== 0) || (floor % 10 === 0 && floor % 5 !== 0)) {
            monster = new Spider("Speederman", spiderDegat, 1, Spider.maxPointDeVie, "spider", hero);
        } else if (floor % 10 === 5) {
            monster = new Skeleton("Padchair", skeletonDegat, 5, Skeleton.maxPointDeVie, "skeleton", hero);
        } else {
            monster = new WitherBoss("Siamoua", witherBossDegat, 10, WitherBoss.maxPointDeVie, "witherBoss", hero);
        }
        refreshHealthBar(hero, heroHealthBarProgress, monster, monsterHealthBarProgress);
    }
}

startGame();
