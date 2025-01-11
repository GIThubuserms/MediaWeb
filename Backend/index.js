import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

const app = express();

app.use(config({ path: "./.env.js" }));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static("public"));
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
import { userrouter } from "./src/routes/user.route.js";
import { likerouter } from "./src/routes/likerouter.route.js";
import { postrouter } from "./src/routes/postrouter.route.js";

app.use("/api/v1/user/", userrouter);
app.use("/api/v1/like/", likerouter);
app.use("/api/v1/post/", postrouter);

app.get("/", (req, res) => {
    res.send('Hello app listening')
});

app.listen(4000, (req, res) => {
  console.log(`App listening on 4000 port `);
});
