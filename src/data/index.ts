import { createConnection } from "typeorm";
import { User } from "./entities/User";

export const connectDatabase = async () => {
  await createConnection({
    type: "sqlite",
    database: "database.sqlite",
    entities: [User],
    synchronize: true,
  });
};
