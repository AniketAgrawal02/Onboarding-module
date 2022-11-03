/* eslint-disable global-require */
require("dotenv").config();

const mongoose = require("mongoose");
const config = require("../src/config");
const logger = require("../src/lib/logger");
const Redis = require("ioredis");

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

mongoose.connect(config.mkOneview, mongooseOptions);
const db = mongoose.connection;

db.on("error", (err) => logger.error("Mongoose error", err));

mongoose.mkOneview = mongoose.createConnection(config.mkOneview, mongooseOptions);

const setupExpress = require("../src/config/express");
const app = setupExpress();

let redisClient;

if (process.env.NODE_ENV == "local") redisClient = new Redis();

global.redisClient = redisClient;

module.exports = app;
