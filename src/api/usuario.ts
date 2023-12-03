import { UsuarioCadastroType, UsuarioLoginType, UsuarioSimplesType, UsuarioType } from "types/usuarioTypes";
import { getAll, getOne, post } from './dummyApi';

export function listarUsuarios(): Promise<UsuarioType[]> {
    return getAll<UsuarioSimplesType>('user?created=1')
        .then(listaUsuarioSimples => {
            return Promise.all(listaUsuarioSimples.map(usuarioSimples => {
                return getOne<UsuarioType>(`user/${usuarioSimples.id}`)
            }));
        });
}

export function retornarUsuarioPorEmail(email: string): Promise<UsuarioType | undefined> {
    return listarUsuarios()
        .then(listaUsuarios => {
            return listaUsuarios.find(usuario => usuario.email === email)
        })
}

export function cadastrarUsuario(usuario: UsuarioCadastroType): Promise<UsuarioType> {
    const usuarioJaCadastrado = retornarUsuarioPorEmail(usuario.email);
    if(usuarioJaCadastrado !== undefined){
        return usuarioJaCadastrado;
    }
    return post<UsuarioCadastroType, UsuarioType>('user/create', usuario);
}