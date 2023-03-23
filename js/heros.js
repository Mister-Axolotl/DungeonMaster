export class Heros {
    #nom;
    #prenom;
    #force;
    #degats;
    #defense;
    #pointDeVie;
    #sacDePotions;
    #sacDArmes;

    constructor(nom, prenom, force, degats, defense, pointDeVie, sacDePotions, sacDArmes) {
        this.#nom = nom,
        this.#prenom = prenom,
        this.#force = force,
        this.#degats = degats,
        this.#defense = defense,
        this.#pointDeVie = pointDeVie,
        this.#sacDePotions = sacDePotions,
        this.#sacDArmes = sacDArmes;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get prenom() {
        return this.#prenom;
    }

    set prenom(value) {
        this.#prenom = value;
    }

    get force() {
        return this.#force;
    }

    set force(value) {
        this.#force = value;
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

    get sacDePotions() {
        return this.#sacDePotions;
    }

    set sacDePotions(value) {
        if(Array.isArray(value)) {
            if(this.#sacDePotions.length >= 0 && this.#sacDePotions.length <= 10) {
                this.#sacDePotions = value;
            } else {
                throw new Error("Argument invalide, l'array doit être de compris entre 0 et 10.");
            }
        } else {
            throw new Error("Argument invalide, le type doit etre un array.");
        }
    }

    get sacDArmes() {
        return this.#sacDArmes;
    }

    set sacDArmes(value) {
        if(Array.isArray(value)) {
            if(this.#sacDArmes.length >= 0 && this.#sacDArmes.length <= 4) {
                this.#sacDArmes = value;
            } else {
                throw new Error("Argument invalide, l'array doit être de compris entre 0 et 4.");
            }
        } else {
            throw new Error("Argument invalide, le type doit etre un array.");
        }
    }

    attack(target) {
        if(target.pointDeVie > 0) {
            target.pointDeVie -= this.degats - target.defense;
        }
        if(target.pointDeVie == 0) return true;
        else return false;
    }

    takeStuff(item) {
        if(this.#sacDePotions.length <= 10) {
            console.log(this.#sacDePotions);
            this.#sacDePotions.push(item);
            console.log(this.#sacDePotions);
            return `Une ${item} a été ajouté à votre inventaire.`
        } else {
            return "inventaire plein"
        }
    }

    usePotion(potion) {
        if(this.#sacDePotions != 0){
            if(this.#sacDePotions.includes('Potion de soin')) {
                let index = this.sacDePotions.indexOf("Potion de soin");
                this.#sacDePotions.splice(index, 1);
                console.log(this.#sacDePotions);
                return "Vous avez consommé une potion de soin."
            } else {
                return "Vous n'avez aucune potion de soin."
            }
        } else {
            return "Vous n'avez aucune potion."
        }
    }
}