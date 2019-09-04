const db = require('../db');

module.exports = db.defineModel('user', {
    userId: db.INTEGER,
    name: db.STRING(100),
    email: db.STRING(100),

});