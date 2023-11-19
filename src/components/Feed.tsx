import React, { useEffect, useState } from 'react'
import { PostagemType } from './Postagem/types';
import { getPostagens } from '../api/postagem';
import ListaPostagens from './ListaPostagens';

export default function Feed() {
    const [postagens, setPostagens] = useState<PostagemType[]>([]);

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
