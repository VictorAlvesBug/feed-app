import { fontAwesome as Fa } from '../../lib/icones';
import cores from '../../data/coresCustomizadas';

type ReacoesProps = {
  curtiu: boolean;
  qtdeCurtidas: number;
};

export default function Reacoes({ curtiu, qtdeCurtidas }: ReacoesProps) {
  const exibirCurtidas = qtdeCurtidas > 0;
  const textoCurtidas =
    qtdeCurtidas === 1 ? '1 curtida' : `${qtdeCurtidas} curtidas`;

  return exibirCurtidas ? (
    <div className="flex flex-row justify-start gap-3 items-cemter">
      {curtiu ? (
        <Fa.FaHeart
          size={24}
          color={cores['cor-detalhe']}
          className="cursor-pointer"
        />
      ) : (
        <Fa.FaRegHeart
          size={24}
          color={cores['cor-texto-principal']}
          className="cursor-pointer"
        />
      )}
      <span className="font-semibold text-cor-texto-principal">
        {textoCurtidas}
      </span>
    </div>
  ) : null;
}
