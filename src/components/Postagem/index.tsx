import { PostagemSimplesType } from 'types/postagemTypes';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Rodape from './Rodape';

type PostagemProps = {
  postagem: PostagemSimplesType;
};

export default function Postagem({ postagem }: PostagemProps) {
  return (
    <div className="flex flex-col gap-2 border-b border-cor-borda">
      <Cabecalho usuario={postagem.owner} />
      <Conteudo imagem={postagem.image} />
      <Rodape
        usuario={postagem.owner}
        qtdeCurtidas={postagem.likes}
        legenda={postagem.text}
        curtiu={true}
        tags={postagem.tags}
      />
    </div>
  );
}
