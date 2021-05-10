import { Request, Response } from "express";
import IUser from "./../interfaces/user";
interface CustomRequest<T> extends Request {
    body: T;
}
interface LoginRequest {
    password: string;
}
export declare const registerUser: (req: CustomRequest<IUser>, res: Response) => void;
export declare const loginUser: (req: CustomRequest<LoginRequest>, res: Response) => void;
export {};
