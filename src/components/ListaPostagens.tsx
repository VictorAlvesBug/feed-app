import Postagem from './Postagem';
import { PostagemSimplesType } from 'types/postagemTypes';

type ListaPostagensProps = {
  postagens: PostagemSimplesType[];
};

export default function ListaPostagens({ postagens }: ListaPostagensProps) {
  return (
    <section className="flex flex-col gap-3 px-8 py-4 mt-16 bg-cor-fundo">
      {postagens.map((postagem) => {
        return <Postagem key={postagem.id} postagem={postagem} />;
      })}
    </section>
  );
}
