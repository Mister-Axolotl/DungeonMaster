import { Monster } from "./monster.js";

export class Spider extends Monster {
    static linkToImg = "assets/images/";
    static variousColor = [
        { "spider": "Red" },
        { "spider": "Blue" },
        { "spider": "Green" }
    ];
    static numberMax = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    _dom;

    constructor(nom, degats, defense, pointDeVie, image, target) {
        super(nom, degats, defense, pointDeVie, image, target);
        this.addToDom();
    }

    get numberMax() {
        return Spider.numberMax;
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('spider');
        let randomColor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        this._dom.src = `${Spider.linkToImg}${this.image}${Spider.variousColor[randomColor - 1].spider}.png`;
        document.querySelector(".container").appendChild(this._dom);
    }

    removeFromDom() {
        document.querySelector(".container").removeChild(this._dom);
    }

    leaveReward() {
        if (Spider.numberMax === 1) {
            let potionOrWeapon = Math.floor(Math.random() * (this.numberMax - 1 + 1)) + 1;
            console.log(potionOrWeapon);
            if (potionOrWeapon === 1) {
                return "potion";
            } else {
                return "weapon";
            }
        } else return "nothing";
    }
}