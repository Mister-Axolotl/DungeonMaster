import { Monster } from "./monster.js";

export class Skeleton extends Monster {

    static linkToImg = "assets/images/";
    static variousColor;
    static numberMax = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    _dom;

    constructor(nom, degats, defense, pointDeVie, image, target) {
        super(nom, degats, defense, pointDeVie, image, target);
        this.addToDom();
    }

    get numberMax() {
        return Skeleton.numberMax;
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('skeleton');
        this._dom.src = `${Skeleton.linkToImg}${this.image}.png`;
        document.querySelector(".container").appendChild(this._dom);
    }

    removeFromDom() {
        document.querySelector(".container").removeChild(this._dom);
    }

    leaveReward() {
        if (Skeleton.numberMax === 1) {
            return "potion";
        } else if(Skeleton.numberMax === 2){
            return "weapon";
        } return "nothing";
    }
}