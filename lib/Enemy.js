import Potion from './Potion.js';
import Character from './Character.js';
class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
        this.potion = new Potion();

    }

    getDescription(){
        return `A ${this.name} wielding a ${this.weapon} has appeared!`;
    };
}
export default Enemy;