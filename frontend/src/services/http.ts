import axios from 'axios';

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
  return axios.post<Response>(`http://localhost:8080/api/login`, request);
};

export const register = async (request: RegisterRequest) => {
  return axios.post<Response>(`http://localhost:8080/api/register`, request);
};
