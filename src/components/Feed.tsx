import React, { useEffect, useState } from 'react'
import { getPostagens } from 'api/postagem';
import ListaPostagens from './ListaPostagens';
import { PostagemSimplesType } from 'types/postagemTypes';

export default function Feed() {
    const [postagens, setPostagens] = useState<PostagemSimplesType[]>([]);

useEffect(() => {
    const buscarPostagens = async () => {
        try {
            const retorno = await getPostagens();
            setPostagens(retorno);
        } catch (erro) {
            console.error(`Erro ao buscar postagens: ${erro}`)
        }
    };

    buscarPostagens();
}, [setPostagens]);

  return (
        <ListaPostagens postagens={postagens}/>
  )
}
