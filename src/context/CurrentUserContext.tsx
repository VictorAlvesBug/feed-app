import { ReactElement, createContext, useContext } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { UsuarioType } from 'types/usuarioTypes';

const initState: UsuarioType | null = null;

const useCurrentUserContext = () => {
  const [state, setState] = useLocalStorage('currentUser', initState);
  return [state, setState] as [
    UsuarioType | null,
    React.Dispatch<React.SetStateAction<UsuarioType | null>>
  ];
};

type UseCurrentUserContextType = ReturnType<typeof useCurrentUserContext>;

const initContextState: UseCurrentUserContextType = [initState, () => {}];

export const CurrentUserContext =
  createContext<UseCurrentUserContextType>(initContextState);

type CurrentUserProviderType = {
  children?: ReactElement | null;
  state: UsuarioType | null;
};

export const CurrentUserProvider = ({
  children,
  state,
}: CurrentUserProviderType): ReactElement => {
  return (
    <CurrentUserContext.Provider value={useCurrentUserContext()}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = (): UsuarioType => {
  const [user] = useContext(CurrentUserContext);

  if (user === null) {
    throw new Error('Usuário logado não encontrado');
  }

  return user;
};

export const useLogin = (): ((user: UsuarioType) => void) => {
  const [, setUser] = useContext(CurrentUserContext);
  return (user: UsuarioType) => setUser(user);
};

export const useLogout = () => {
  const [, setUser] = useContext(CurrentUserContext);
  return () => setUser(null);
};
