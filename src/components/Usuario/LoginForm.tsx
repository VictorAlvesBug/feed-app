import { cadastrarUsuario } from 'api/usuario';
import Input from 'components/ui/Input';
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { UsuarioCadastroType } from 'types/usuarioTypes';

export default function LoginForm() {
const navigate = useNavigate();

  const [usuario, setUsuario] = useState<UsuarioCadastroType>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const criarConta = () => {
    cadastrarUsuario(usuario);
    navigate('/home')
  }

  return (
    <div className="flex flex-col items-start justify-between gap-3 px-6 py-3 border-2 w-80 border-cor-borda rounded-xl">
      <div className='self-center'>
        <span className="text-xl text-cor-texto-principal">Crie sua Conta</span>
      </div>
      <label className="text-cor-texto-principal">{process.env.DUMMY_API_URL}</label>
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
        <button className="self-center w-full py-2 border text-cor-texto-principal bg-cor-fundo hover:bg-cor-fundo-claro border-cor-borda" onClick={criarConta}>Criar</button>
    </div>
  );
}
