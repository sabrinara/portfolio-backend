import expressPkg from "express"; // default import
import type { Request, Response } from "express"; // only types
import jwtPkg from "jsonwebtoken";
const { sign } = jwtPkg;
type SignOptions = jwtPkg.SignOptions;

import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body as { email: string; password: string };

  if (!email || !password) {
    return res.status(400).json({ message: "Provide email and password" });
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const jwtSecret = process.env.JWT_SECRET as string;

  const expiresIn = (process.env.JWT_EXPIRES_IN || "7d") as SignOptions["expiresIn"];

  if (email === adminEmail && password === adminPassword) {
    const payload = { email };
    const token = jwt.sign(payload, jwtSecret, { expiresIn });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
