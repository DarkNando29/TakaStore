import express from 'express';
const app = express();
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const reviewController = require('./controllers/reviewController');
const authController = require('./controllers/authController');

//middlewares
app.use(express.json());
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging

//adding routes
app.use('/users', userController);
app.use('/posts', postController);
app.use('/reviews', reviewController);
app.use('/auth', authController);




const port= process.env.PORT || 3000
app.listen(port, () =>   console.log(`Listening on Port: ${port}`));