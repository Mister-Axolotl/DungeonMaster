import { Monster } from "./monster.js";

export class Spider extends Monster {
    static linkToImg = "../images";
    static variousColor = [
        "skeleton",
        {"spider":"red"},
        {"spider":"blue"},
        {"spider":"green"},
        "witherBoss"
    ];
    static numberMax;

    constructor(nom, degats, defense, pointDeVie, images, target) {
        super(nom, degats, defense, pointDeVie, images, target);
    }

    setNumberMax(value) {
        Spider.numberMax = Math.floor(Math.random() * (value - 1 + 1)) + 1;
    }
}