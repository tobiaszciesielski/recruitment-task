import React, {
  useState,
  useContext,
  createContext,
  ReactChild,
  ReactChildren,
} from 'react';
import { login, register, User, RegisterRequest } from '../services/http';

const authToken = 'auth-token';

const decodeToken = (token: string): User | null => {
  const [t, firstName, lastName] = token.split('.');
  if (t || firstName || lastName) {
    return {
      firstName,
      lastName,
    };
  }
  return null;
};

interface ContextProps {
  user: User | null;
  signin: (password: string) => Promise<string>;
  signup: (data: RegisterRequest) => Promise<string>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

interface AuthProviderProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const AuthConterrt = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem(authToken) || ''
  );
  const [user, setUser] = useState<User | null>(decodeToken(token));

  const isAuthenticated = () => {
    return user !== null;
  };

  const signin = async (password: string) => {
    let error = '';
    try {
      const { data } = await login({ password });
      const combinedToken = `${data.token}.${data.user.firstName}.${data.user.lastName}`;
      setToken(combinedToken);
      setUser(data.user);
      localStorage.setItem(authToken, combinedToken);
      error = '';
    } catch (err) {
      if (err.response) {
        error = err.response.data.message;
      } else if (err.request) {
        error = 'Server is not responding!';
      } else {
        error = err.message;
      }
    }
    return error;
  };

  const signup = async (request: RegisterRequest) => {
    let error = '';
    try {
      const { data } = await register(request);
      const combinedToken = `${data.token}.${data.user.firstName}.${data.user.lastName}`;
      setToken(combinedToken);
      setUser(data.user);
      localStorage.setItem(authToken, combinedToken);
      error = '';
    } catch (err) {
      if (err.response) {
        error = err.response.data.message;
      } else if (err.request) {
        error = 'Server is not responding!';
      } else {
        error = err.message;
      }
    }
    return error;
  };

  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem(authToken);
  };

  return (
    <AuthConterrt.Provider
      value={{ user, signup, signin, logout, isAuthenticated }}
    >
      {children}
    </AuthConterrt.Provider>
  );
};

export const useAuth = () => useContext(AuthConterrt);
