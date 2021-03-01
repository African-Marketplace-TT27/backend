const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const restrict = require('./middleware/restricted');

const authRouter = require('./auth/auth-router');
const productsRouter = require('./products/products-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/products', productsRouter);

module.exports = server;
