import React from 'react'

export type MidiaType = {
  tipo: 'foto' | 'video';
  url: string;
};

export type PostagemType = {
  id: string;
  criador: string;
  legenda?: string;
  qtdeCurtidas: number;
  listaMidias: MidiaType[];
};

type PostagemProps = {
  postagem: PostagemType;
};

export default function Post({ postagem }: PostagemProps) {
  return (
    <div 
      className='border border-gray-500' 
      onClick={() => console.log(`TODO: Abrir modal para o post ${postagem.id}`)}>
      <div className='flex justify-start items-center h-10 p-1'>
        <span className=''>{postagem.criador}</span>
      </div>
    <div className='w-full aspect-square'>
      <img className='w-full' alt='Imagem de exemplo' src={postagem.listaMidias[0].url}/>
    </div>
    </div>
  )
}