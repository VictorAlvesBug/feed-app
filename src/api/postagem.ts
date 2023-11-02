import { PostagemType } from "../components/Postagem"

export function getPostagens() {
    return new Promise((resolve: (value: PostagemType[]) => void, reject) => {
        setTimeout(() => {
            const listaPostagens: PostagemType[] = [];

            Array(10).fill(0).forEach((item, indice) => {
                listaPostagens.push({
                    id: `Post #${indice + 1}`,
                    criador: `Criador #${(indice % 3) + 1}`,
                    listaMidias: [{
                        tipo: 'foto',
                        url: `http://lorempixel.com.br/400/400/?${Math.floor(Math.random() * 100)}`
                    }]
                } as PostagemType)
            })

            resolve(listaPostagens);
        }, 100)
    })
}