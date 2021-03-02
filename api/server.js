const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const restrict = require('./middleware/restricted');

const authRouter = require('./auth/auth-router');
const productsRouter = require('./products/products-router');
const categoriesRouter = require('./products/categories/categories-router');
const typesRouter = require('./products/types/types-router');
const unitsRouter = require('./products/units/units-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/products', productsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/types', typesRouter);
server.use('/api/units', unitsRouter);

module.exports = server;
