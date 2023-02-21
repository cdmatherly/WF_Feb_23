var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...
console.log("\n Pokemon with an id greater than 99")
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id > 99) {
        console.log(pokemon[i].name);
    }
}

// console.log the pokémon objects whose id is evenly divisible by 3
console.log("\n pokemon objects with an id divisible by 3:")
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id % 3 === 0) {
        console.log(pokemon[i].name);
    }
}

// console.log the pokémon objects that have more than one type
console.log("\n pokemon objects with more than one type")
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.length > 1) {
        console.log(pokemon[i].name);
    }
}

// console.log the **names** of the pokémon whose only type is "poison"
console.log("\n pokemon names with only one type, poison:")
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types == "poison" && pokemon[i].types.length === 1) {
        console.log(pokemon[i].name);
    }
}

// console.log the **first type** of all the pokémon whose second type is "flying"
console.log("\n First type of all pokemon whose second type is flying")
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types[1] === "flying") {
        console.log(pokemon[i].name + " " +pokemon[i].types[0]);
    }
}

//Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
console.log("\n The reverse of the names of the pokemon whose only type is 'poison'")

for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types == "poison" && pokemon[i].types.length === 1) {
        var newName = "";
        var string = pokemon[i].name;
        for (var j = string.length - 1; j >= 0; j--) {
            newName += string[j];
        }
        console.log(newName)
    }
}