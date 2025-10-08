import pkg from 'jsonwebtoken';
const { sign } = pkg;
import { config } from 'dotenv';


config();


export async function login(req, res) {
const { email, password } = req.body;
if (!email || !password) return res.status(400).json({ message: 'Provide email and password' });
if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
const payload = { email };
const token = sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
return res.json({ token });
}
return res.status(401).json({ message: 'Invalid credentials' });
}