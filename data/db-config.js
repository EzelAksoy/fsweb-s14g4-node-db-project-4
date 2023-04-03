const knex = require("knex");
const config = require("../knexfile");
const enviroment = "development";
const db = knex(config[enviroment]);
