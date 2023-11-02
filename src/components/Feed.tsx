import React, { useEffect, useState } from 'react'
import Postagem, { PostagemType } from './Postagem';
import { getPostagens } from '../api/postagem';

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
    <div className='p-3 flex flex-col gap-3'>
        {postagens.map(postagem => {
            return <Postagem postagem={postagem}/>
        })}
    </div>
  )
}
