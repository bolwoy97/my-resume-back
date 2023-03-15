import { Db, MongoClient } from "mongodb";

let db_instance: Db;

export async function init(): Promise<void>{
  const connectionString = process.env.MONGO_URI || "";
  const client = new MongoClient(connectionString);
  try {
    const connection = await client.connect();
    db_instance = connection.db(process.env.DB_NAME || "");
    // eslint-disable-next-line no-console
    console.log("MongoDB connected...");
  } catch(e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

function db(): Db{  
  return db_instance;
}

export default db;
