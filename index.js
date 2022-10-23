import express from 'express';
const app = express();
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const reviewController = require('./controllers/reviewController');
//middlewares
app.use(express.json());


//adding routes
app.use('/users', userController);
app.use('/posts', postController);
app.use('/reviews', reviewController);




const port= process.env.PORT || 3000
app.listen(port, () =>   console.log(`Listening on Port: ${port}`));