export class Monster {
    #nom;
    #degats;
    #defense;
    #pointDeVie;
    #image;
    #target;

    constructor(nom, degats, defense, pointDeVie, image, target) {
        this.nom = nom;
        this.degats = degats;
        this.defense = defense;
        this.pointDeVie = pointDeVie;
        this.image = image;
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

    get image() {
        return this.#image;
    }

    set image(value) {
        this.#image = value;
    }

    get target() {
        return this.#target;
    }

    set target(value) {
        this.#target = value;
    }

    attack(target) {
        if (target.pointDeVie > 0) {
            target.pointDeVie -= this.#degats - target.defense;
            return false;
        }
        else if (target.pointDeVie <= 0) {
            target.pointDeVie = 0;
            return true;
        }
    }

    addToDom() {

    }

    removeFromDom() {

    }

    leaveReward() {

    }
}