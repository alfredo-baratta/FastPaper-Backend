import express from "express";
import { validationResult } from "express-validator";

const validation_check = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!validationResult(req).isEmpty())
    return res.json({ success: false, message: validationResult(req).array() });
  next();
};

export default validation_check;
