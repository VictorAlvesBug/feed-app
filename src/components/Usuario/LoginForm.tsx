import { retornarUsuarioPorEmail } from 'api/usuario';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { useLogin } from 'context/CurrentUserContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsuarioLoginType } from 'types/usuarioTypes';

export default function LoginForm() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<UsuarioLoginType>({
    email: '',
  });

  const login = useLogin();

  const loginHandle = (): Promise<string> => {
    return new Promise((resolve) => {
      if (usuario.email.length === 0) {
        resolve('Informe o e-mail do usuário');
      }

      retornarUsuarioPorEmail(usuario.email).then((usuarioRetornado) => {
        if (!usuarioRetornado) {
          resolve('Ops, e-mail não encontrado');
          return;
        }

        login(usuarioRetornado);
        navigate('/home');
        resolve('');
      });
    });
  };

  const register = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-start justify-between gap-3 px-6 py-3 border-2 w-80 border-cor-borda rounded-xl">
        <div className="self-center">
          <span className="text-xl text-cor-texto-principal">
            Não tem uma conta?
          </span>
        </div>
        <Button
          className="self-center w-full py-2 text-cor-texto-principal"
          onClick={register}
        >
          Cadastre-se aqui
        </Button>
      </div>
      <div className="flex flex-col items-start justify-between gap-3 px-6 py-3 border-2 w-80 border-cor-borda rounded-xl">
        <div className="self-center">
          <span className="text-xl text-cor-texto-principal">Entrar</span>
        </div>
        <label className="text-cor-texto-principal">E-mail</label>
        <Input
          value={usuario.email}
          onChange={({ target }) =>
            setUsuario((prev) => ({ ...prev, email: target.value }))
          }
        />
        <Button
          className="self-center w-full py-2 text-cor-texto-principal"
          onClickPromise={loginHandle}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
