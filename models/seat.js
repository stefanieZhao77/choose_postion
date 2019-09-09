const db = require('../db');

module.exports = db.defineModel('seat', {
    seatId: db.INTEGER,
    seat: db.STRING(100),
    areaId: db.INTEGER,
});