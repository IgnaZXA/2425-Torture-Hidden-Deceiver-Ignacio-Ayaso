

export default class Character{

    constructor(name, level, age, stamina, inventory){
        this.name = name;
        this.level = level;
        this.age = age;
        this.stamina = stamina;
        this.inventory = inventory;
    }

    show(weaponCatalog, armorCatalog){
        console.log("\n" + this.name + "\n------------------\n");

        console.log("Attributes:" + "\n------------------");

        console.log("Level: " + this.level + "\nAge: " + this.age + "\nStamina: " + this.stamina);
        console.log( "------------------");
        

        this.printWeapons(weaponCatalog);


        this.printArmors(armorCatalog);

    }

    isWeapon(weaponList, invObject){
        for (let i = 0; i < weaponList.length; i++){
            if (invObject === weaponList[i]){
                return true;
            }
        }
        return false;
    }

    isArmor(armorList, invObject){
        for (let i = 0; i < armorList.length; i++){
            if (invObject === armorList[i]){
                return true;
            }
        }
        return false;
    }

    printWeapons(weaponList){
        console.log("\nWeapons:" + "\n---------------------");
        for(let i = 0; i < this.inventory.length; i++){
            if (this.isWeapon(weaponList, this.inventory[i])){
                const actualWeapon = this.inventory[i];
                console.log("Name: " + actualWeapon.name + 
                            "\nMin Level: " + actualWeapon.minLevel + 
                            "\nDamage: " + actualWeapon.damage + 
                            "\nDurability" + actualWeapon.durability);
            }
        }
    }

    printArmors(armorList){
        console.log("\nArmors:" + "\n---------------------\n");

        for(let i = 0; i < this.inventory.length; i++){
            if (this.isArmor(armorList, this.inventory[i])){
                const actualArmor = this.inventory[i];
                console.log("Name: " + actualArmor.name + 
                            "\nMin Level: " + actualArmor.minLevel + 
                            "\nDefense: " + actualArmor.denfense);
            }
        }
    }

    selectBelowLevelArmors(minimumLevel, armorList){
        const armorsBelow = [];

        for (let i = 0; i < this.inventory.length; i++){
            const actualInvObject = this.inventory[i];
            if (this.isArmor(armorList, actualInvObject)){
                if (actualInvObject.minLevel < minimumLevel){
                    armorsBelow.push(actualInvObject);
                }
            }
        }

        return armorsBelow;
    }
}