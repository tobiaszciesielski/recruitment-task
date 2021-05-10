import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  MONGO_API,
  SECRET_KEY,
  MONGO_PASSWORD,
  MONGO_USERNAME,
} = process.env;

if (
  !MONGO_API ||
  !SECRET_KEY ||
  !SECRET_KEY ||
  !MONGO_PASSWORD ||
  !MONGO_USERNAME
) {
  process.exit(1);
}

const port: string = PORT || "8080";
const mongoUrl: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.dvhsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
`;
const secretKey: string = SECRET_KEY || "";

export { port, mongoUrl, secretKey };
