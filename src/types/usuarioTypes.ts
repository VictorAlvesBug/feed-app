import { OpcionalExceto } from 'types/genericTypes';

export type UsuarioType = {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    picture: string;
};

export type UsuarioSimplesType = Pick<UsuarioType, 'id' | 'title' | 'firstName' | 'lastName' | 'picture'>;

export type UsuarioCadastroType = OpcionalExceto<
    UsuarioType,
    'firstName' | 'lastName' | 'email'
>;

export type UsuarioLoginType = OpcionalExceto<UsuarioType, 'email'>;