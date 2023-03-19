var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose= require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter= require('./routes/auth');
const moviesRouter= require('./routes/movie')
const watchlistRouter= require('./routes/watchlist')

var app = express();

app.use(logger('dev'));
// logger طبقة وسيطة تطبع سجل الطلبات الواردة
app.use(express.json());
// json لتفسير جسم الطلب 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// للتعامل مع ملفات الارتباط 
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth',authRouter)
app.use('/api/movie',moviesRouter);
app.use('/api/watchlist',watchlistRouter);
mongoose.connect(process.env.DB_URL);
module.exports = app;
