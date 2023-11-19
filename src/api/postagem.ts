import axios, { AxiosResponse } from 'axios';
import { MidiaType, PostagemType } from "../components/Postagem/types"

type HomeType = {
    front_default: string;
};

type OtherType = {
    home: HomeType;
};

type SpritesType = {
    other: OtherType;
};

type TypeType = {
    name: string;
};

type SinglePokemonType = {
    name: string;
    order: number;
    sprites: SpritesType;
    types: TypeType[];
};

type PokemonItemType = {
    name: string;
    url: string;
};

type ManyPokemonsType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonItemType[];
};

async function pokemonToPostagem (pokemon: PokemonItemType) {
    const pokemonData = 
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response: AxiosResponse<SinglePokemonType>) => {
            return response.data;
        })
        .catch((error) => {
        throw new Error(error);
        });

    return {
        id: pokemonData.types.map(type => type.name).join(', '),
        autor: pokemonData.name,
        listaMidias: [{  tipo: 'foto', url: pokemonData.sprites.other.home.front_default }] as MidiaType[],
        qtdeCurtidas: Math.floor(Math.random() * 1000),
        legenda: 'Essa é a legenda do post 😃'
    } as PostagemType;
}

export function getPostagens() {
    return new Promise((resolve: (value: PostagemType[]) => void, reject) => {
        setTimeout(async () => {
            const getAllResponse = 
                await axios.get('https://pokeapi.co/api/v2/pokemon/')
                .then((response: AxiosResponse<ManyPokemonsType>) => {
                    return response.data;
                })
                .catch((error) => {
                  throw new Error(error);
                });

            const listaPostagens: PostagemType[] = await Promise.all(getAllResponse.results.map(pokemonToPostagem));
                
            resolve(listaPostagens);
        }, 100)
    })
}