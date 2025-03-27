

export default class Weapon{

    constructor(name, minLevel, damage, durability){
        this.name = name;
        this.minLevel = minLevel;
        this.damage = damage;
        this.durability = durability;
    }

    showWeapon(){
        console.log(this.name + ": Min Level = " + this.minLevel + ", Damage = " + this.damage + ", Durability = " + this.durability);
    }
}