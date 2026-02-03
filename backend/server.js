import app from './src/app.js';
import connectDB from '../../kodar-2-phase-2/redis/backend/src/db/db.js';

connectDB();

app.listen(3000, () => {
    console.log("server is runing on port 3000");

})