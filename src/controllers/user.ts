import { Request, Response } from "express";
import User from "../models/user";
import mongoose from "mongoose";
import { encode } from "../utils/encryption";
import IUser from "./../interfaces/user";
import { IResponse } from "./../interfaces/response";
import { createToken } from "./../utils/encryption";

interface CustomRequest<T> extends Request {
  body: T;
}

export const registerUser = (req: CustomRequest<IUser>, res: Response) => {
  let { firstName, lastName, password: toEncode } = req.body;

  const password = encode(toEncode);

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName,
    lastName,
    password,
  });

  user
    .save()
    .then((result) => {
      const response: IResponse = {
        token: createToken(`${result._id}`),
        user: {
          firstName: result.firstName,
          lastName: result.lastName,
        },
      };
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Something goes wrong, try again!",
        error: err.message,
      });
    });
};

interface LoginRequest {
  password: string;
}

export const loginUser = (req: CustomRequest<LoginRequest>, res: Response) => {
  let { password } = req.body;

  const encoded = encode(password);
  User.findOne({ password: encoded })
    .exec()
    .then((result) => {
      if (result !== null) {
        return res.status(201).json({
          token: createToken(`${result._id}`),
          user: {
            firstName: result.firstName,
            lastName: result.lastName,
          },
        });
      } else {
        return res.status(400).json({ messsage: "Password not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Something goes wrong, try again!",
        error: err.message,
      });
    });
};
