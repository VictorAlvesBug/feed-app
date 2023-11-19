import { MidiaType } from './types';

type ConteudoProps = {
  listaMidias: MidiaType[];
};

export default function Conteudo({ listaMidias }: ConteudoProps) {
  return (
    <div className="w-full border border-cor-borda aspect-square">
      <img className="w-full" alt={`Imagem do post`} src={listaMidias[0].url} />
    </div>
  );
}
