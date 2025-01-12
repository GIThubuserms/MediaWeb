import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
const app = express();

dotenv.config({ path: ".env" });
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static("public"));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
import { userrouter } from "./src/routes/user.route.js";
import { likerouter } from "./src/routes/like.route.js";
import { postrouter } from "./src/routes/post.route.js";
import { dbconnection } from "./src/db/dbconnection.js";

app.use("/api/v1/user/", userrouter);
app.use("/api/v1/likes/", likerouter);
app.use("/api/v1/post/", postrouter);

app.get("/", (req, res) => {
  res.send("Hello app listening");
});

dbconnection()
  .then(() => {
    app.listen(4000, (req, res) => {
      console.log(`App listening on 4000 port `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
