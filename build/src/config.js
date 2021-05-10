"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretKey = exports.mongoUrl = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, SECRET_KEY, MONGO_PASSWORD, MONGO_USERNAME } = process.env;
if (!SECRET_KEY || !MONGO_PASSWORD || !MONGO_USERNAME) {
    process.exit(1);
}
const port = PORT || "8080";
exports.port = port;
const mongoUrl = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.dvhsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
`;
exports.mongoUrl = mongoUrl;
const secretKey = SECRET_KEY || "";
exports.secretKey = secretKey;
