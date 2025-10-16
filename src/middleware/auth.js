import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { config } from 'dotenv';


config();


const auth = (req, res, next) => {
const authHeader = req.headers.authorization || req.headers.Authorization;
if (!authHeader || !authHeader.startsWith('Bearer ')) {
return res.status(401).json({ message: 'Missing token' });
}
const token = authHeader.split(' ')[1];
try {
const decoded = verify(token, process.env.JWT_SECRET);
req.user = decoded; // contains email
next();
} catch (err) {
return res.status(401).json({ message: 'Invalid token' });
}
};


export default auth;