import app from "./index";

app.listen(4000, (err?: any) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is up and Run on PORT : 4000 `);
});
