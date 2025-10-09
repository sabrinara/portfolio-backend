import { connect } from 'mongoose';
import { config } from 'dotenv';
config();


const connectDB = async () => {
try {
await connect(process.env.MONGO_URI, {
// options are default in mongoose 7+
});
console.log('MongoDB connected');
} catch (err) {
console.error(err);
process.exit(1);
}
};


export default connectDB;