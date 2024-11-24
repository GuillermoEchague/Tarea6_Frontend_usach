// Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

// Solucion 1 con map()
let pokemonMayusculas = pokemon.map((pokemon) => pokemon.toUpperCase());

console.log(pokemonMayusculas);

// Solucion 2 con for

let pokemonMayusculas2 = [];

for (let i = 0; i < pokemon.length; i++) {
  pokemonMayusculas2.push(pokemon[i].toUpperCase());
}

console.log(pokemonMayusculas2);
