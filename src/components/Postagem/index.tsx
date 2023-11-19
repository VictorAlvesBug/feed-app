import React from 'react';
import Autor from './Autor';
import Conteudo from './Conteudo';
import Reacoes from './Reacoes';
import Legenda from './Legenda';
import { PostagemType } from './types';

type PostagemProps = {
  postagem: PostagemType;
};

export default function Postagem({ postagem }: PostagemProps) {
  function deveExibirLegenda(legenda: string | undefined): legenda is string {
    return legenda !== undefined;
  }

  const componenteLegenda = deveExibirLegenda(postagem.legenda) ? (
    <Legenda autor={postagem.autor} legenda={postagem.legenda} />
  ) : null;

  return (
    <div className="flex flex-col gap-2 border-b border-cor-borda">
      <Autor autor={postagem.autor} />
      <Conteudo listaMidias={postagem.listaMidias} />
      <Reacoes
        curtiu={Math.random() > 0.5}
        qtdeCurtidas={postagem.qtdeCurtidas}
      />
      {componenteLegenda}
    </div>
  );
}
