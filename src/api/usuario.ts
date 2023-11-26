import { UsuarioCadastroType, UsuarioSimplesType, UsuarioType } from "types/usuarioTypes";
import { getAll, getOne, post } from './dummyApi';

export function listarUsuarios(): Promise<UsuarioType[]> {
    return getAll<UsuarioSimplesType>('user?created=1')
        .then(listaUsuarioSimples => {
            return Promise.all(listaUsuarioSimples.map(usuarioSimples => {
                return getOne<UsuarioType>(`user/${usuarioSimples.id}`)
            }));
        });
}

export function entrarComUsuario(email: string): Promise<UsuarioType | undefined> {
    return listarUsuarios()
        .then(listaUsuarios => {
            return listaUsuarios.find(usuario => usuario.email === email)
        })
}

export function cadastrarUsuario(usuario: UsuarioCadastroType): Promise<UsuarioType> {
    return post<UsuarioCadastroType, UsuarioType>('user/create', usuario);
}