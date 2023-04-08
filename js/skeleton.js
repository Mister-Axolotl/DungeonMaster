import { Monster } from "./monster.js";

export class Skeleton extends Monster{
    
    static linkToImg = "../images/";
    static variousColor;
    static numberMax = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    constructor(nom, degats, defense, pointDeVie, image, target){
        super(nom, degats, defense, pointDeVie, image, target);
        this.setImage();
        this.spawnWithStuff();
    }

    get numberMax() {
        return Skeleton.numberMax;
    }

    setImage() {
        var testSkeleton = document.querySelector("#testSkeleton");
        let source = `${Skeleton.linkToImg}${this.image}.png`;
        testSkeleton.src = source; // temporaire
    }

    spawnWithStuff() {
        if(Skeleton.numberMax === 1) {
            let potionOrWeapon = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            if(potionOrWeapon === 1 ) {
                return "potion";
            } else { 
                return "weapon";
            } 
        } else return "nothing";
    }
}