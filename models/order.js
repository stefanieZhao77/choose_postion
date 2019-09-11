const db = require('../db');

module.exports = db.defineModel('order', {
    user: db.STRING(100),
    seat: db.STRING(100),
    date: db.STRING(100),
});