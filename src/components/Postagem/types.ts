export type MidiaType = {
    tipo: 'foto' | 'video';
    url: string;
  };
  
  export type PostagemType = {
    id: string;
    autor: string;
    legenda?: string;
    qtdeCurtidas: number;
    listaMidias: MidiaType[];
  };