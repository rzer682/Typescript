import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
  types: Array<{ slot: number, type: { name: string } }>
}

async function fetchRandomPokemon(): Promise<Pokemon> {
  try {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = response.data as Pokemon;
    return pokemon;
  } catch (error: any) {
    throw new Error(`Erreur lors de la récupération d'un pokémon aléatoire : \n ${error.message}`);
  }
}

async function main() {
    try {
      const randomPokemonsOne: Pokemon[] = [];
      for (let i = 0; i < 6; i++) {
        const pokemon = await fetchRandomPokemon();
        randomPokemonsOne.push(pokemon);
      }
      const randomPokemonsTwo: Pokemon[] = [];
      for (let j = 0; j < 6; j++) {
        const pokemon = await fetchRandomPokemon();
        randomPokemonsTwo.push(pokemon);
      }
  
      console.log("==================Team 1========================");;
      randomPokemonsOne.forEach((pokemon, index) => {
        console.log('----------------------------------------------')
        console.log(`Pokémon ${index + 1}:`);
        console.log(`Id : ${pokemon.id}`);
        console.log(`Nom : ${pokemon.name}`);
        console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`);
        console.log('----------------------------------------------');
      });
  
      console.log("==================Team 2========================");
      randomPokemonsTwo.forEach((pokemon, index) => {
        console.log('----------------------------------------------');
        console.log(`Pokémon ${index + 1}:`);
        console.log(`Id : ${pokemon.id}`);
        console.log(`Nom : ${pokemon.name}`);
        console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`);
        console.log('----------------------------------------------');
      });
  

      for (let i = 0; i < 6; i++) {
        const pokemonOne = randomPokemonsOne[i];
        const pokemonTwo = randomPokemonsTwo[i];
  
        
        if (pokemonOne.id > pokemonTwo.id) {
          console.log(`Pokémon ${pokemonOne.name} wins this round!`);
          randomPokemonsOne.filter(pokemon => pokemon !== pokemonOne)
        } else if (pokemonOne.id < pokemonTwo.id) {
          console.log(`Pokémon ${pokemonTwo.name} wins this round!`);
          randomPokemonsTwo.filter(pokemon => pokemon !== pokemonTwo)
        } else {
          console.log("It's a tie!");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  main();