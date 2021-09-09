import express from "express";
import { connection } from "../index";
import { QueryError } from "mysql2";

const get_article = (req: express.Request, res: express.Response) => {
  if (!req.params.id.trim())
    return res.json({ success: false, message: "Invalid params" });
  const slug = req.params.id;
  const token = req.headers.authorization?.split(" ")[1];
  connection.execute(
    "SELECT * FROM posts WHERE slug= ?",
    [slug],
    (err: QueryError | null, result) => {
      if (err) return res.json({ success: false, message: err.message });
      if ((result as any).length == 0)
        return res.json({ success: false, message: "No posts found" });
      (result as any)[0].editable = !(
        !token || token !== (result as any)[0].uuid
      );
      delete (result as any)[0].uuid;
      return res.json({ success: true, message: (result as any)[0] });
    }
  );
};

export default get_article;
