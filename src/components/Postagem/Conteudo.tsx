type ConteudoProps = {
  imagem: string;
};

export default function Conteudo({ imagem }: ConteudoProps) {
  return (
    <div className="w-full border border-cor-borda">
      <img className="w-full" alt="Imagem do post" src={imagem} />
    </div>
  );
}
