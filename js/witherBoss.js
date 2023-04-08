import { Monster } from "./monster.js";

export class WitherBoss extends Monster{
    
    static linkToImg = "../images/";
    static variousColor;
    static numberMax = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    
    constructor(nom, degats, defense, pointDeVie, image, target){
        super(nom, degats, defense, pointDeVie, image, target);
        this.setImage();
        this.spawnWithStuff();
    }

    get numberMax() {
        return WitherBoss.numberMax;
    }

    setImage() {
        var testBoss = document.querySelector("#testBoss");
        let source = `${WitherBoss.linkToImg}${this.image}.png`;
        testBoss.src = source; // temporaire
    }

    spawnWithStuff() {
        if(WitherBoss.numberMax === 1) {
            let potionOrWeapon = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            if(potionOrWeapon === 1 ) {
                return "potion";
            } else { 
                return "weapon";
            }
        } else return "potion and weapon";
    }
}