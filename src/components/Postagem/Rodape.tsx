import { UsuarioSimplesType } from 'types/usuarioTypes';
import { fontAwesome as Fa } from 'lib/icones';
import cores from 'data/coresCustomizadas';

type RodapeProps = {
  usuario: UsuarioSimplesType;
  qtdeCurtidas: number;
  legenda: string;
  tags: string[];
  curtiu?: boolean;
};

export default function Rodape({
  usuario,
  qtdeCurtidas,
  legenda,
  tags,
  curtiu,
}: RodapeProps) {
  const nomeCompleto = `${usuario.firstName} ${usuario.lastName}`;

  const textoCurtidas =
    qtdeCurtidas === 1 ? '1 curtida' : `${qtdeCurtidas} curtidas`;

  const divTags = (
    <div>
      {tags.map((tag) => (
        <span key={tag} className="cursor-pointer text-cor-texto-link">
          {`#${tag.replaceAll(' ', '-')} `}
        </span>
      ))}
    </div>
  );

  return (
    <div>
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
          {qtdeCurtidas > 0 ? textoCurtidas : null}
        </span>
      </div>
      <div className="pb-4">
        <div className="text-cor-texto-principal">
          <span className="font-semibold">{nomeCompleto}</span> {legenda}
        </div>
        {divTags}
      </div>
    </div>
  );
}
