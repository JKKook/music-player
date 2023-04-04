import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import flash from 'express-flash';
import MongoStore from 'connect-mongo';
import { localsMiddleware } from './middlewares';
import rootRouter from './routers/rootRouter';

// [LOAD PACKAGES]
const express = require('express');
const app = express();
const logger = morgan('dev');

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    }),
);
app.use(flash());
app.use(localsMiddleware);
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('assets'));

app.use('/', rootRouter);
/*
Add more routers here!
*/

// connect server
import mongoose from 'mongoose';
import Song from '../src/models/Song';

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = (error) => console.log('❌ DB Error', error);

db.on('error', handleError);
db.once('open', handleOpen);

// defined model
const Song = require('./models/Song');

// [CONFIGURE SERVER PORT]
const PORT = process.env.PORT || 4000;

// [CONFIGURE ROUTER]
const router = require('./routers')(app, Song);

// [RUN SERVER]
const server = app.listen(PORT, function () {
    console.log('Express server has started on port ' + PORT);
});

export default app;
