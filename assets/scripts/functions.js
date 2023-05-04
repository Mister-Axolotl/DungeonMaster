export function playAudio() {
    const clickSound = new Audio('../audio/click.mp3');
    clickSound.play();
}

export function refreshInventory(hero, useButton, potionsInventory, equipementInventory) {
    if (hero.sacDePotions.length === 0) {
        useButton.style.display = 'none';
    } else {
        useButton.style.display = 'initial';
        potionsInventory.innerHTML = '';
        for (let i = 0; i < hero.sacDePotions.length; i++) {
            const potion = document.createElement('img');
            potion.src = "assets/images/potion.png";
            potionsInventory.appendChild(potion);
        }
    }
    equipementInventory.innerHTML = '';
    for (let i = 0; i < hero.sacDArmes.length; i++) {
        const weapon = document.createElement('img');
        weapon.src = "assets/images/axe.png";
        equipementInventory.appendChild(weapon);
    }
}

export function refreshHealthBar(hero, heroHealthBarProgress, monster, monsterHealthBarProgress) {
    //hero
    if (hero.pointDeVie > (hero.maxPointDeVie - (hero.maxPointDeVie / 4))) {
        heroHealthBarProgress.classList.remove("health-bar-progress-yellow");
        heroHealthBarProgress.classList.add("health-bar-progress");
    } else if ((hero.pointDeVie < (hero.maxPointDeVie - (hero.maxPointDeVie / 4)) && (hero.pointDeVie > (hero.maxPointDeVie / 2)))) {
        heroHealthBarProgress.classList.remove("health-bar-progress");
        heroHealthBarProgress.classList.remove("health-bar-progress-orange");
        heroHealthBarProgress.classList.add("health-bar-progress-yellow");
    } else if ((hero.pointDeVie < (hero.maxPointDeVie / 2)) && (hero.pointDeVie > (hero.maxPointDeVie / 3))) {
        heroHealthBarProgress.classList.remove("health-bar-progress-yellow");
        heroHealthBarProgress.classList.remove("health-bar-progress-red");
        heroHealthBarProgress.classList.add("health-bar-progress-orange");
    } else if (hero.pointDeVie < (hero.maxPointDeVie / 4)) {
        heroHealthBarProgress.classList.remove("health-bar-progress-orange");
        heroHealthBarProgress.classList.add("health-bar-progress-red");
    }
    //monstre
    if (monster.pointDeVie > (monster.maxPointDeVie - (monster.maxPointDeVie / 4))) {
        monsterHealthBarProgress.classList.remove("health-bar-progress-yellow");
        monsterHealthBarProgress.classList.remove("health-bar-progress-orange");
        monsterHealthBarProgress.classList.remove("health-bar-progress-red");
        monsterHealthBarProgress.classList.remove("health-bar-progress-black");
        monsterHealthBarProgress.classList.add("health-bar-progress");
    } else if ((monster.pointDeVie < (monster.maxPointDeVie - (monster.maxPointDeVie / 4)) && (monster.pointDeVie > (monster.maxPointDeVie / 2)))) {
        monsterHealthBarProgress.classList.remove("health-bar-progress");
        monsterHealthBarProgress.classList.remove("health-bar-progress-orange");
        monsterHealthBarProgress.classList.add("health-bar-progress-yellow");
    } else if ((monster.pointDeVie < (monster.maxPointDeVie / 2)) && (monster.pointDeVie > (monster.maxPointDeVie / 3))) {
        monsterHealthBarProgress.classList.remove("health-bar-progress-yellow");
        monsterHealthBarProgress.classList.remove("health-bar-progress-red");
        monsterHealthBarProgress.classList.add("health-bar-progress-orange");
    } else if (monster.pointDeVie < (monster.maxPointDeVie / 4)) {
        monsterHealthBarProgress.classList.remove("health-bar-progress-orange");
        monsterHealthBarProgress.classList.add("health-bar-progress-red");
    }
}