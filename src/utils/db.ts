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

export async function getCollection(coll_name: string){
  if (!db_instance || !db_instance.collection){
    await init();
  }
  return await db_instance.collection(coll_name);
}
