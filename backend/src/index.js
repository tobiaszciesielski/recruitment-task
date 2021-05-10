"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require("./db/index");
const api_1 = __importDefault(require("./routes/api"));
const config_1 = require("../src/config");
const logrocket_1 = __importDefault(require("logrocket"));
logrocket_1.default.init("57idnn/recruitment-task-tc");
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.listen(config_1.port, () => {
    console.log(`Listening on port ${config_1.port}`);
});
app.use("/api", api_1.default);
