import { useCurrentUser, useLogout } from 'context/CurrentUserContext';
import React from 'react';
import Button from './ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho() {
  const navigate = useNavigate();

  const loggedInUser = useCurrentUser();
  const logout = useLogout();

  return (
    <nav
      className={`fixed flex items-center justify-between w-full bg-cor-fundo border-b border-cor-borda py-3 px-6`}
    >
      <div className="m-2 text-2xl text-cor-texto-principal">
        {`Olá, ${loggedInUser.firstName}`}
      </div>
      <Button
        className="px-6 py-3 m-2"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        Sair
      </Button>
    </nav>
  );
}
