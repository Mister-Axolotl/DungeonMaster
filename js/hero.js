export class Hero {
    #nom;
    #prenom;
    #force;
    #defense;
    #pointDeVie;
    #sacDePotions;
    #degats = Hero.degatsDeBase;
    #sacDArmes;
    static degatsDeBase = 3;
    static minForce = 3;
    static maxForce = 10;
    static minDef = 1;
    static maxDef = 4;
    static maxPointDeVie = 100;

    constructor(nom, prenom, force, defense, pointDeVie, sacDePotions, sacDArmes) {
        this.nom = nom,
        this.prenom = prenom,
        this.force = force,
        this.defense = defense,
        this.pointDeVie = pointDeVie,
        this.sacDePotions = sacDePotions,
        this.sacDArmes = sacDArmes;
        this.init();
    }

    init() {
        this.#force = this.random(3, 10);
        this.#defense = this.random(1, 5);
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
        console.log("degats = ", this.#degats, "force = ", this.#force);
        return this.#degats * this.#force;
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
            if(value.length >= 0 && value.length <= 10) {
                this.#sacDePotions = value;
            } else {
                console.log("Argument invalide, l'array doit être compris entre 0 et 10.");
            }
        } else {
            console.log("Argument invalide, le type doit etre un array.");
        }
    }

    get sacDArmes() {
        return this.#sacDArmes;
    }

    set sacDArmes(value) {
        if(Array.isArray(value)) {
            if(value.length >= 0 && value.length <= 4) {
                this.#sacDArmes = value;
            } else {
               console.log("Argument invalide, l'array doit être de compris entre 0 et 4.");
            }
        } else {
            console.log("Argument invalide, le type doit etre un array.");
        }
    }

    attack(target) {
        if(target.pointDeVie > 0) {
            target.pointDeVie -= this.#degats - target.defense;
        }
        if(target.pointDeVie == 0) return true;
        else return false;
    }

    takeStuff(item, type) {
        if(type == "potion") {
            if(this.#sacDePotions.length <= 10) {
                this.#sacDePotions.push(item);
                return `Une ${item} a été ajouté à votre inventaire.`
            } else {
                return "Sac à potions plein."
            }
        } else if(type == "arme") {
            if(this.#sacDArmes.length <= 4) {
                this.#sacDArmes.push(item);
                this.#degats = this.#degats + 4;
                return `Un(e) ${item} a été ajouté à votre inventaire.`
            } else {
                return "Sac d'armes plein."
            }
        }
    }

    usePotion(potion) {
        if(this.#sacDePotions != 0){
            if(this.#sacDePotions.includes(potion)) {
                if(this.#pointDeVie != Hero.maxPointDeVie) {
                    let index = this.sacDePotions.indexOf("Potion de soin");
                    this.#sacDePotions.splice(index, 1);
                    if(this.#pointDeVie <= (Hero.maxPointDeVie - 10)) {
                        this.#pointDeVie = this.#pointDeVie + 10;
                    } else {
                        this.#pointDeVie = Hero.maxPointDeVie;
                    }
                    return "Vous avez consommé une potion de soin."
                } else return "Votre vie est déjà pleine.";
            } else return "Vous n'avez aucune potion de soin."
        } else  return "Vous n'avez aucune potion."
    }
}