const db = require('../db');

module.exports = db.defineModel('seat', {
    room: db.INTEGER,
    seat: db.STRING(100),
    areaId: db.INTEGER,
});