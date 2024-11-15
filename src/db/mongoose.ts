import mongoose from "mongoose";

async function connectToDB(): Promise<void> {
  try {
    const { DB_URL } = process.env;
    await mongoose.connect(`${DB_URL as string}/smartPhoneDeal`);
    console.log(`Database via Mongoose Connect Successfully !!`);
  } catch (error: any) {
    console.log(`Error while Connecting with Database : ${error}`);
  }
}

export default connectToDB;
