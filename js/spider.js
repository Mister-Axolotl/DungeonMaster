import { Monster } from "./monster.js";

export class Spider extends Monster {
    static linkToImg = "../images/";
    static variousColor = [
        { "spider": "Red" },
        { "spider": "Blue" },
        { "spider": "Green" }
    ];
    static numberMax = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    constructor(nom, degats, defense, pointDeVie, image, target) {
        super(nom, degats, defense, pointDeVie, image, target);
        this.setImage();
        this.spawnWithStuff();
    }

    get numberMax() {
        return Spider.numberMax;
    }

    setImage() {
        var testSpider = document.querySelector("#testSpider");
        let randomColor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let source = `${Spider.linkToImg}${this.image}${Spider.variousColor[randomColor-1].spider}.png`;
        testSpider.src = source; // temporaire
    }

    spawnWithStuff() {
        if(Spider.numberMax === 1) {
            let potionOrWeapon = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            if(potionOrWeapon === 1 ) {
                return "potion";
            } else { 
                return "weapon";
            } 
        } else return "nothing";
    }
}