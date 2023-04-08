export class Monster {
    #nom;
    #degats;
    #defense;
    #pointDeVie;
    #images;
    #target;

    constructor(nom, degats, defense, pointDeVie, images, target) {
        this.nom = nom;
        this.degats = degats;
        this.defense = defense;
        this.pointDeVie = pointDeVie;
        this.images = images;
        this.target = target;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get degats() {
        return this.#degats;
    }

    set degats(value) {
        this.#degats = value;
    }

    get defense() {
        return this.#defense;
    }

    set defense(value) {
        this.#defense = value;
    }

    get pointDeVie() {
        return this.#pointDeVie;
    }

    set pointDeVie(value) {
        this.#pointDeVie = value;
    }

    get images() {
        return this.#images;
    }

    set images(value) {
        this.#images = value;
    }

    get target() {
        return this.#target;
    }

    set target(value) {
        this.#target = value;
    }

    attack(target) {
        while(target.pointDeVie > 0) {
            target.pointDeVie -= this.degats - target.defense;
        }
        if(target.pointDeVie == 0) return true;
        else return false;
    }

    ajouter() {

    }

    suppression() {

    }

    loot() {

    }
}