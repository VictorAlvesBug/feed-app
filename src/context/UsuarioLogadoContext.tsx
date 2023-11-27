import React, { useContext, useState } from 'react'
import { UsuarioType } from 'types/usuarioTypes';

const UsuarioLogadoContext = React.createContext<UsuarioType | null>();
const AtualizarUsuarioLogadoContext = React.createContext<React.Dispatch<React.SetStateAction<UsuarioType>>>();

type UsuarioLogadoProviderProps = {
  children: React.ReactNode;
};

export function UsuarioLogadoProvider({ children }: UsuarioLogadoProviderProps) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <UsuarioLogadoContext.Provider value={usuarioLogado}>
      <AtualizarUsuarioLogadoContext.Provider value={setUsuarioLogado}>
      {children}
      </AtualizarUsuarioLogadoContext.Provider>
    </UsuarioLogadoContext.Provider>
  )
}
