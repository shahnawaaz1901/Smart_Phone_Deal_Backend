import "./config/config";
import connectToDB from "./db/mongoose";
import app from "./index";

const PORT: number = parseInt(process.env.PORT as string);

app.listen(PORT, (err?: any) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is up and Run on PORT : 4000 `);
  connectToDB();
});
