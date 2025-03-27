import Armor from './armor.mjs';
import Character from './character.mjs';
import Weapon from './weapon.mjs';


//2. Introducir todos los objetos en arrays según sea necesario
const characters = [];
const armors = [];
const weapons = [];

function createArmors(){
    armors.push( new Armor("Shadowplate", 28, 15));
    armors.push(new Armor("Phantom Shroud", 22, 12));
    armors.push(new Armor("Titan's Bulwark", 35, 18));
    armors.push(new Armor("Sylvan Guardian", 30, 14));
    armors.push(new Armor("Abyssal Carapace", 25, 10));
}

function createWeapons(){
    const weaponsData = [
        {
            name: "Stormbreaker axe",
            minLevel : 30,
            damage : 25, 
            durability : 80
        },
        {
            name: "Celestial Rapier",
            minLevel : 25,
            damage : 18, 
            durability : 75
        },        {
            name: "Obsidian Warhammer",
            minLevel : 38,
            damage : 30, 
            durability : 90
        },        {
            name: "Starfire Bow",
            minLevel : 33,
            damage : 22, 
            durability : 85
        },        {
            name: "Doomfang Dagger",
            minLevel : 28,
            damage : 20, 
            durability : 78
        }
    ];

    // Se recorre el array de objetos para que en cada iteración se cree un objeto Weapon con los datos del objeto almacenado en weaponsData 
    for(let i = 0; i < weaponsData.length; i++){
        const weaponData = weaponsData[i];
        const weapon = new Weapon(weaponData.name, weaponData.minLevel, weaponData.damage, weaponData.durability);
        weapons.push(weapon);
    }
}

function createCharacters(){
    const charactersData = [
        {
            name: "Ragnar Wolfbane",
            level : 32,
            age : 45, 
            stamina : 87
        },
        {
            name: "Seraphina Nightshade",
            level : 27,
            age : 120, 
            stamina : 92
        },
        {
            name: "Thalgrim Ironfist",
            level : 40,
            age : 52, 
            stamina : 95
        },
        {
            name: "Lyra Moonwhisper",
            level : 35,
            age : 29, 
            stamina : 88
        },
        {
            name: "Draven Blackthorn",
            level : 30,
            age : 37, 
            stamina : 90
        },

        
    ];

    // Se crean los characters y se guardan en el array de characters (una vez creados se equiparán)
    for (let i = 0; i < charactersData.length; i++){
        const characterData = charactersData[i];
        // se crear al nuevo personaje
        const newChar = new Character(characterData.name, characterData.level, characterData.age, characterData.stamina, []);

        //Ahora se procede a equipar al nuevo personaje
        //Hay la misma cantidad de armas de armaduras y de characters, cada character 
        //inicialmente tiene un armor y un weapon en el inventario como tal, si cada array está bien ordenado se puede indicar que el character tiene esta arma y esta weapon 
        newChar.inventory.push(weapons[i]);
        newChar.inventory.push(armors[i]);

        characters.push(newChar);

    }

}

createArmors();
createWeapons();
createCharacters();

// 3. Mostrar un listado de todas lar Weapon y Armors
function showArmorsAndWeapons(){ // los arrays son globales no hacen fasta se pasados como parámetros

    //Mostrar por consola las Weapons
    console.log("Weapon List" + "\n" + "-----------------");
    showWeaponList(weapons); // tampoco haría falta pasar nada como parámetro

    //Mostrar por consola las Armorsç
    console.log("Armor List" + "\n" + "-----------------");
    showArmorList(armors); // aquí tampoco harían falta parámetros

}

function showWeaponList(weaponList){
    for (let i = 0; i < weaponList.length; i++){
        const actualWeapon = weaponList[i];
        actualWeapon.show();

    }
    console.log();

}

function showArmorList(armorList){
    for (let i = 0; i < armorList.length; i++){
        const actualArmor = armorList[i];
        actualArmor.show();

    }
    console.log();

}

//Descomentar
showArmorsAndWeapons();



// 4. Mostrar todos los personajes con sus atributos y equipamiento.

function showCharacters(){
    console.log("CHARACTER LIST" + "\n-------------------------");
    for(let i = 0; i < characters.length; i++){
        const actualCharacter = characters[i];
        actualCharacter.show(weapons, armors);
    }
}

//Descomentar
showCharacters();

//5. Seleccionar del total de armaduras de todos los personajes, aquellas que tienen
//   un nivel menor a 30 y mostrar en pantalla su nombre y nivel 

function shChrsArmorsBelowLevel(belowLevel, armors){
    console.log("Armors below level " + belowLevel + ": ");

    for (let i = 0; i < characters.length; i++){
        const actCharacter = characters[i];
        const chtArmorsBelowLevel = actCharacter.selectBelowLevelArmors(belowLevel, armors);
        // console.log(chtArmorsBelowLevel);
        if (chtArmorsBelowLevel.length > 0){
            for (let j = 0; j < chtArmorsBelowLevel.length; j++){
                console.log("Name: " + chtArmorsBelowLevel[j].name + ", MinLevel: "+ chtArmorsBelowLevel[j].minLevel)
            }
        }
    
    }
}

//Descomentar
shChrsArmorsBelowLevel(30, armors);


// 6. Buscar, para cada personaje, todas la armas que pueda utilizar según nivel 
//    y añadirlas a su equipamiento. Mostrar en consola los nombres y nivel de cada
//    personaje, junto con el nobre y nivel de cada arma que lleve


function addAvailableWeaponsToChrs(){

    for(let i = 0; i < characters.length; i++){
        const actChr = characters[i]; //    Actual character
        actChr.addAvaliableWeapons(weapons);
    }
}

function printCharatersWeaponsNameAndLevel(){
    for(let i = 0; i < characters.length; i++){
        const actChr = characters[i]; //    Actual character

        //Imprimir en consola su nombre y todas la Weapon equipadas:
        console.log(actChr.name + ", level: " + actChr.level + "\n-----------------------------");
        actChr.printWeaponsNameAndLevel(weapons);
        console.log("--------------------------------");
    }
}

addAvailableWeaponsToChrs();
//Descomentar
printCharatersWeaponsNameAndLevel();


// 7. Método fumble (en Character)

//8. Ejecutar el método fumble para uno de los personajes (a elección) y mostrar los datos 
//   del personaje y equipamiento actualizado

const selectedChar = characters[0];

selectedChar.fumble(weapons, armors);

selectedChar.show(weapons, armors);
