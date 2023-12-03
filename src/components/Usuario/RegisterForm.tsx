import { cadastrarUsuario } from 'api/usuario';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { useLogin } from 'context/CurrentUserContext';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioCadastroType } from 'types/usuarioTypes';

export default function RegisterForm() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<UsuarioCadastroType>(
    {
      firstName: '',
      lastName: '',
      email: '',
    }
  );

  const login = useLogin();

  const criarConta = async () => {
    const usuarioCadastrado = await cadastrarUsuario(usuario);

    if(usuarioCadastrado){
      login(usuarioCadastrado)
      navigate('/home')
    }
  };

  return (
    <div className="flex flex-col items-start justify-between gap-3 px-6 py-3 border-2 w-80 border-cor-borda rounded-xl">
      <div className="self-center">
        <span className="text-xl text-cor-texto-principal">Crie sua Conta</span>
      </div>
      <label className="text-cor-texto-principal">Nome</label>
      <Input
        value={usuario.firstName}
        onChange={({ target }) =>
          setUsuario((prev) => ({ ...prev, firstName: target.value }))
        }
      />
      <label className="text-cor-texto-principal">Sobrenome</label>
      <Input
        value={usuario.lastName}
        onChange={({ target }) =>
          setUsuario((prev) => ({ ...prev, lastName: target.value }))
        }
      />
      <label className="text-cor-texto-principal">E-mail</label>
      <Input
        value={usuario.email}
        onChange={({ target }) =>
          setUsuario((prev) => ({ ...prev, email: target.value }))
        }
      />
      <Button
        className="self-center w-full py-2 text-cor-texto-principal"
        onClick={() => navigate('/')}
      >
        Já tenho uma conta
      </Button>
      <Button
        className="self-center w-full py-2 text-cor-texto-principal"
        onClick={criarConta}
      >
        Criar
      </Button>
    </div>
  );
}
