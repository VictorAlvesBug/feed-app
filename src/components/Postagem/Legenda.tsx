type LegendaProps = {
    autor: string;
    legenda: string;
  };
  
  export default function Legenda({ autor, legenda }: LegendaProps) {
    return (
      <div className='pb-4'>
        <span className="font-semibold text-cor-texto-principal">{autor}</span>{' '}
        <span className="text-cor-texto-principal">{legenda}</span>
      </div>
    );
  }