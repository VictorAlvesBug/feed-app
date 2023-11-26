import { UsuarioSimplesType } from "./usuarioTypes";

export type PostagemType = {
    id: string;
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: string[];
    publishDate: string;
    owner: UsuarioSimplesType;
};

export type PostagemSimplesType = Pick<PostagemType, 'id' | 'text' | 'image' | 'likes' | 'tags' | 'publishDate' | 'owner'>;