import express from "express";
import { get_article, modify_article, post_article } from "./endpoints";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import mysql from "mysql2";
import { check } from "express-validator";
import dnv from "dotenv";
import validation_check from "./utils/validation_check";

dnv.config({ path: "../.env" });
export let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable("x-powered-by");
app.use(cors({ origin: process.env.FRONTEND_HOST, credentials: true }));
app.use(compression());

app.get("/get/:id", get_article);

app.post(
  "/new",
  [
    check("title")
      .not()
      .isEmpty()
      .isString()
      .trim()
      .escape()
      .isLength({ max: 200 }),
    check("author")
      .not()
      .isEmpty()
      .isString()
      .trim()
      .escape()
      .isLength({ max: 50 }),
    check("content").not().isEmpty().isString().trim().isLength({ max: 10000 }),
    validation_check,
  ],
  post_article
);

app.post(
  "/modify",
  [
    check("slug")
      .not()
      .isEmpty()
      .isString()
      .trim()
      .escape()
      .isLength({ max: 220 }),
    check("title").isString().trim().escape().isLength({ max: 200 }),
    check("author").isString().trim().escape().isLength({ max: 50 }),
    check("content").isString().trim().isLength({ max: 10000 }),
    validation_check,
  ],
  modify_article
);

app.listen(8080, (): void => {
  console.log("Server started");
});
