const express = require('express')
const cors = require("cors");
const MappingRouter = require('./mapping/mapping-router')

const server = express();

server.use(cors(), express.json())
server.use('/', MappingRouter)

module.exports = server