"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const encryption_1 = require("../utils/encryption");
const encryption_2 = require("./../utils/encryption");
const registerUser = (req, res) => {
    let { firstName, lastName, password: toEncode } = req.body;
    const password = encryption_1.encode(toEncode);
    const user = new user_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        firstName,
        lastName,
        password,
    });
    user
        .save()
        .then((result) => {
        const response = {
            token: encryption_2.createToken(`${result._id}`),
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
exports.registerUser = registerUser;
const loginUser = (req, res) => {
    let { password } = req.body;
    const encoded = encryption_1.encode(password);
    user_1.default.findOne({ password: encoded })
        .exec()
        .then((result) => {
        if (result !== null) {
            return res.status(201).json({
                token: encryption_2.createToken(`${result._id}`),
                user: {
                    firstName: result.firstName,
                    lastName: result.lastName,
                },
            });
        }
        else {
            return res.status(400).json({ message: "Password not found!" });
        }
    })
        .catch((err) => {
        return res.status(500).json({
            message: "Something goes wrong, try again!",
            error: err.message,
        });
    });
};
exports.loginUser = loginUser;
