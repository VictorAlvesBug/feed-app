import { PostagemSimplesType } from 'types/postagemTypes';
import { getAll } from './dummyApi';

export function getPostagens(): Promise<PostagemSimplesType[]> {
    return getAll<PostagemSimplesType>('post');
}