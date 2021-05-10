import React, {
  useState,
  useContext,
  createContext,
  ReactChild,
  ReactChildren,
} from 'react';
import { login, register, User, RegisterProp } from '../services/http';

const authToken = 'auth-token';

interface ContextProps {
  token: string | null;
  user: User | null;
  signin: (password: string) => void;
  signup: (data: RegisterProp) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const signin = async (password: string) => {
    const response = await login({ password });
    console.log(response);
  };

  const signup = async (data: RegisterProp) => {
    const response = await register(data);
    console.log(response);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem(authToken);
  };

  return (
    <AuthContext.Provider value={{ token, user, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
