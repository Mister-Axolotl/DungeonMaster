import { Monster } from "./monster.js";

export class Skeleton extends Monster {

    static linkToImg = "assets/images/";
    static variousColor;
    static numberMax = 4;
    static maxPointDeVie = 50;

    _dom;

    constructor(nom, degats, defense, pointDeVie, image, target) {
        super(nom, degats, defense, pointDeVie, image, target);
        this.addToDom();
    }

    get numberMax() {
        return Math.floor(Math.random() * (Skeleton.numberMax - 1 + 1)) + 1;
    }

    get maxPointDeVie() {
        return Skeleton.maxPointDeVie;
    }

    addToDom() {
        this._dom = document.createElement('img');
        this._dom.classList.add('skeleton');
        this._dom.src = `${Skeleton.linkToImg}${this.image}.png`;
        document.querySelector(".monsters").appendChild(this._dom);
    }

    removeFromDom() {
        document.querySelector(".monsters").removeChild(this._dom);
    }

    leaveReward() {
        if (this.numberMax === 1) {
            return "potion";
        } else if(this.numberMax === 2){
            return "weapon";
        } return "nothing";
    }
}