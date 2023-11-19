type AutorProps = {
    autor: string;
  };
  
  export default function Autor({ autor }: AutorProps) {
    return (
      <div className="flex flex-row items-center justify-start p-2">
        <span className="w-8 h-8 border-2 rounded-full border-cor-texto-secundario" />
        <span className="px-4 font-semibold text-cor-texto-principal">
          {autor}
        </span>
      </div>
    );
  }