import axios from 'axios';

export interface User {
  firstName: string;
  lastName: string;
}

export interface ResponseProp {
  token: string;
  user: User;
}

export interface LoginProp {
  password: string;
}

export interface RegisterProp {
  firstName: string;
  lastName: string;
  password: string;
}

export const login = async (request: LoginProp) => {
  return axios.post<ResponseProp>(`http://localhost:8080/api/login`, request);
};

export const register = async (request: RegisterProp) => {
  return axios.post<ResponseProp>(
    `http://localhost:8080/api/register`,
    request
  );
};
