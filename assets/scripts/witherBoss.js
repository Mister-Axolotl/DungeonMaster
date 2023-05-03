import { Monster } from "./monster.js";

export class WitherBoss extends Monster {

    static linkToImg = "assets/images/";
    static variousColor;
    static numberMax = 3;
    static maxPointDeVie = 100;

    _dom;

    constructor(nom, degats, defense, pointDeVie, image, target) {
        super(nom, degats, defense, pointDeVie, image, target);
        this.addToDom();
    }

    get numberMax() {
        return Math.floor(Math.random() * (WitherBoss.numberMax - 1 + 1)) + 1;
    }

    get maxPointDeVie() {
        return WitherBoss.maxPointDeVie;
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('tesBoss');
        this._dom.src = `${WitherBoss.linkToImg}${this.image}.png`;
        document.querySelector(".monsters").appendChild(this._dom);
    }

    removeFromDom() {
        document.querySelector(".monsters").removeChild(this._dom);
    }

    leaveReward() {
        if (this.numberMax === 1) {
            return "potion";
        } else if (this.numberMax === 2) {
            return "weapon";
        } else if (this.numberMax === 3) {
            return "potion&weapon";
        }
    }
}