import express from "express";
import { connection } from "../index";
import { QueryError } from "mysql2";

const modify_article = (req: express.Request, res: express.Response) => {
  const slug = req.body.slug;
  delete req.body.slug;
  let query = "UPDATE posts SET";
  const token = req.headers.authorization?.split(" ")[1];
  const clean_req_body = Object.entries(req.body).reduce(
    (a: any, [key, value]) =>
      value == null || value == "<p><br></p>" ? a : ((a[key] = value), a),
    {}
  );
  let values = Object.values(clean_req_body);
  values.push(slug);
  Object.entries(clean_req_body).map(([key, value], i) => {
    query += " " + key + "=?"; // + value;
    if (i !== Object.entries(clean_req_body).length - 1) query += ", ";
  });
  query += " WHERE slug=?";
  connection.execute(
    "SELECT * FROM posts WHERE slug=?",
    [slug],
    (err: QueryError | null, result) => {
      if (err) return res.json({ success: false, message: err.message });
      if ((result as any).length == 0)
        return res.json({ success: false, message: "No posts found" });
      if (!token || token !== (result as any)[0].uuid) {
        return res.json({
          success: false,
          message: "You can not edit this article.",
        });
      } else {
        connection.execute(query, values, (err: QueryError | null) => {
          if (err) return res.json({ success: false, message: err.message });
          res.json({ success: true, message: slug });
        });
      }
    }
  );
};

export default modify_article;
