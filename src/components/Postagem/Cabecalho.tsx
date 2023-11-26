import { UsuarioSimplesType } from 'types/usuarioTypes';

type CabecalhoProps = {
  usuario: UsuarioSimplesType;
};

export default function Cabecalho({ usuario }: CabecalhoProps) {
  const nomeCompleto = `${usuario.firstName} ${usuario.lastName}`;

  return (
    <div className="flex flex-row items-center justify-start p-2">
      <img
        className="w-8 h-8 border-2 rounded-full border-cor-texto-secundario"
        src={usuario.picture}
        alt="Foto de Perfil"
      />
      <span className="px-4 font-semibold text-cor-texto-principal">
        {nomeCompleto}
      </span>
    </div>
  );
}
