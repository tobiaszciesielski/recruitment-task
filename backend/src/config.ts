import dotenv from "dotenv";

dotenv.config();

const { PORT, MONGO_API, SECRET_KEY } = process.env;

if (!MONGO_API || !SECRET_KEY || !SECRET_KEY) {
  process.exit(1);
} 

const port: string = PORT || "8080";
const mongoUrl: string = MONGO_API || "";
const secretKey: string = SECRET_KEY || "";

export { port, mongoUrl, secretKey };
