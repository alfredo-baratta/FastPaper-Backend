import express from "express";
import { connection } from "../index";
import { QueryError } from "mysql2";

const post_article = (req: express.Request, res: express.Response) => {
  const title = req.body.title;
  const author = req.body.author;
  const content = req.body.content;
  const slug = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .split(/\s+/)
    .join(" ")
    .split(" ")
    .join("-");
  const token = req.headers.authorization?.split(" ")[1];
  connection.execute(
    "INSERT INTO posts VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP())",
    [slug, title, author, content, token],
    (err: QueryError | null) => {
      if (err) return res.json({ success: false, message: err.message });
      res.json({ success: true, message: slug });
    }
  );
};

export default post_article;
