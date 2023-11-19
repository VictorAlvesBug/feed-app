import React from 'react';
import Postagem from './Postagem';
import { PostagemType } from './Postagem/types';

type ListaPostagensProps = {
  postagens: PostagemType[];
};

export default function ListaPostagens({ postagens }: ListaPostagensProps) {
  return (
    <section className="flex flex-col gap-3 px-8 py-4 mt-16 bg-cor-fundo">
      {postagens.map((postagem) => {
        return <Postagem postagem={postagem} />;
      })}
    </section>
  );
}
