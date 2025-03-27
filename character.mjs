

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
                            "\nDurability: " + actualWeapon.durability);
                console.log(".....................................");
            }
        }
    }

    printWeaponsNameAndLevel(weaponList){
        console.log("\nWeapons:" + "\n---------------------");
        for(let i = 0; i < this.inventory.length; i++){
            if (this.isWeapon(weaponList, this.inventory[i])){
                const actualWeapon = this.inventory[i];
                console.log("Name: " + actualWeapon.name + 
                            "\nMin Level: " + actualWeapon.minLevel);
                console.log(".....................................");
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

    addAvaliableWeapons(weapons){

        for(let i = 0; i < weapons.length; i++){
            const actWeapon = weapons[i];
            if (this.level >= actWeapon.minLevel && !this.isInInventory(actWeapon)){
                this.inventory.push(actWeapon);
            }
        }
    }

    isInInventory(invObject){
        for(let i = 0; i < this.inventory.length; i++){
            if (invObject === this.inventory[i]){
                return true;
            }
        }
        return false;
    }


    fumble(weapons, armors){
        const rndWeapon = this.getRandomWeapon(weapons);

        //Calcular el daño
        let totalDamage = Math.ceil((rndWeapon.damage + this.level)/ 4);
        console.log("total damage");
        console.log(totalDamage);
        //Restamos el daño total de la defensa de la armadura
        for (let i = 0; i < this.inventory.length; i++){
            const actInvObj = this.inventory[i];
            if(this.isArmor(armors, actInvObj)){
                actInvObj.denfense =  actInvObj.defense - totalDamage;
            }
        }
        this.stamina -= 5;
        rndWeapon.durability -= 2;


    }

    getRandomWeapon(weapons){
        let weapon = null;
        let i = 0;
        let foundWeapon = false;

        if (this.thereIsAnyWeaponInInventory(weapons)){ // Si 
            while (!foundWeapon){
                let randomIndx = Math.floor(Math.random() * this.inventory.length);
                const randomObj = this.inventory[randomIndx];
                if(this.isWeapon(weapons, randomObj)){
                    foundWeapon = true;
                    weapon = randomObj;
                }
            }
        }
        return weapon;
    }

    thereIsAnyWeaponInInventory(weapons){
        for(let i = 0; i < this.inventory.length; i++){
            const actualInvObject = this.inventory[i];
            if(this.isWeapon(weapons, actualInvObject)){
                return true;
            }
        }
        return false;
    }
}