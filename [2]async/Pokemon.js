"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function fetchRandomPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const randomId = Math.floor(Math.random() * 898) + 1;
            const response = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const pokemon = response.data;
            return pokemon;
        }
        catch (error) {
            throw new Error(`Erreur lors de la récupération d'un pokémon aléatoire : \n ${error.message}`);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const randomPokemonsOne = [];
            for (let i = 0; i < 6; i++) {
                const pokemon = yield fetchRandomPokemon();
                randomPokemonsOne.push(pokemon);
            }
            const randomPokemonsTwo = [];
            for (let j = 0; j < 6; j++) {
                const pokemon = yield fetchRandomPokemon();
                randomPokemonsTwo.push(pokemon);
            }
            console.log("==================Team 1========================");
            ;
            randomPokemonsOne.forEach((pokemon, index) => {
                console.log(`Pokémon ${index + 1}:`);
                console.log(`Id : ${pokemon.id}`);
                console.log(`Nom : ${pokemon.name}`);
                console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`);
                console.log('---');
            });
            console.log("==================Team 2========================");
            randomPokemonsTwo.forEach((pokemon, index) => {
                console.log(`Pokémon ${index + 1}:`);
                console.log(`Id : ${pokemon.id}`);
                console.log(`Nom : ${pokemon.name}`);
                console.log(`Types : ${pokemon.types.map(t => t.type.name).join(', ')}`);
                console.log('---');
            });
            // Simulate a battle between the two teams
            for (let i = 0; i < 6; i++) {
                const pokemonOne = randomPokemonsOne[i];
                const pokemonTwo = randomPokemonsTwo[i];
                // Compare the stats of the two Pokémon
                if (pokemonOne.id > pokemonTwo.id) {
                    console.log(`Pokémon ${pokemonOne.name} wins this round!`);
                }
                else if (pokemonOne.id < pokemonTwo.id) {
                    console.log(`Pokémon ${pokemonTwo.name} wins this round!`);
                }
                else {
                    console.log("It's a tie!");
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
