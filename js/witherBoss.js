import { Monster } from "./monster.js";

export class WitherBoss extends Monster{
    
    static linkToImg;
    static variousColor;
    static numberMax;
    
    constructor(nom, degats, defense, pointDeVie, images, target){
        super(nom, degats, defense, pointDeVie, images, target);
    }

    get nom() {
        return this.nom;
    }

    set nom(value) {
        this.nom = value;
    }

    get degats() {
        return this.degats;
    }

    set degats(value) {
        this.degats = value;
    }

    get defense() {
        return this.defense;
    }

    set defense(value) {
        this.defense = value;
    }

    get pointDeVie() {
        return this.pointDeVie;
    }

    set pointDeVie(value) {
        this.pointDeVie = value;
    }

    get images() {
        return this.images;
    }

    set images(value) {
        this.images = value;
    }

    get target() {
        return this.target;
    }

    set target(value) {
        this.target = value;
    }
}