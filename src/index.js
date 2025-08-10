import express from 'express';
import {PORT_SERVER} from './config.js';

import userRoute from './routes/users.routes.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(userRoute);

app.listen(PORT_SERVER);
console.log('server on port',PORT_SERVER);