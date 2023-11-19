

type RGB = `rgb(${number},${number},${number})`;
type RGBA = `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}`;

export type CorType = RGB | RGBA | HEX;

export type CoresCustomizadasType = {
    [x: string]: CorType;
}

const coresCustomizadas: CoresCustomizadasType = {
    'cor-fundo': '#000000',
    'cor-texto-principal': '#FFFFFF',
    'cor-texto-secundario': '#AAAAAA',
    'cor-borda': '#444444',
    'cor-detalhe': '#FF0000'
} as const;

export default coresCustomizadas;