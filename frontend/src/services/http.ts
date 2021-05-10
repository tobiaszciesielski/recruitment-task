import axios from 'axios';

const restApi = process.env.REACT_APP_API;

export interface User {
  firstName: string;
  lastName: string;
}

export interface Response {
  token: string;
  user: User;
}

export interface LoginRequest {
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  password: string;
}

export const login = async (request: LoginRequest) => {
  return axios.post<Response>(`${restApi}/api/login`, request);
};

export const register = async (request: RegisterRequest) => {
  return axios.post<Response>(`${restApi}/api/register`, request);
};
