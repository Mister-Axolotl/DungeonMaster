import { Monster } from "./monster.js";

export class Spider extends Monster {
    static linkToImg = "assets/images/";
    static variousColor = [
        { "spider": "Red" },
        { "spider": "Blue" },
        { "spider": "Green" }
    ];
    static numberMax = 3;
    static maxPointDeVie = 25;

    _dom;

    constructor(nom, degats, defense, pointDeVie, image, target) {
        super(nom, degats, defense, pointDeVie, image, target);
        this.addToDom();
    }

    get numberMax() {
        return Math.floor(Math.random() * (Spider.numberMax - 1 + 1)) + 1;
    }

    get maxPointDeVie() {
        return Spider.maxPointDeVie;
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('spider');
        let randomColor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        this._dom.src = `${Spider.linkToImg}${this.image}${Spider.variousColor[randomColor - 1].spider}.png`;
        document.querySelector(".monsters").appendChild(this._dom);
    }

    removeFromDom() {
        document.querySelector(".monsters").removeChild(this._dom);
    }

    leaveReward() {
        if (this.numberMax === 1) {
            return "potion";
        } else return "nothing";
    }
}