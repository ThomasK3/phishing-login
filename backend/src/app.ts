import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import credentialRoutes from './routes/credential.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: '*',  // V produkci by toto mělo být specifičtější
    methods: ['POST', 'GET', 'OPTIONS'],
    credentials: true
  }));
app.use(express.json());

// Routes
app.use('/api/credentials', credentialRoutes);

// Connect to MongoDB
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});