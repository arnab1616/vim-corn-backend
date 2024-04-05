import express from 'express';
import bodyParser from 'body-parser';
import db from './Database/dataworld.js';
import cors from 'cors';
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import newVideo from './routes/video.js'
import subscribe from './routes/subscribe.js'
import commentRoute from './routes/comment.js'
import moviesRoute from './routes/movies.js'
import searchRoute from './routes/searchQuery.js'

const app = express();
const port = 3200;
db.connect()

app.use(cors({
    origin: 'http://localhost:8800',
    methods: 'GET,POST,DELETE,PUT,PATCH',
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// global error handle middleware
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Somthing went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/api', newVideo);
app.use('/api', subscribe);
app.use('/api', commentRoute);
app.use('/api', moviesRoute);
app.use('/api', searchRoute);

app.listen(port,()=>{
    console.log(`Listning on port ->> ${port}`);
})
