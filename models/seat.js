const db = require('../db');

module.exports = db.defineModel('seat', {
    seatId: db.INTEGER,
    user_id: db.STRING(50),
    seat: db.STRING(100),
    area_id: db.STRING(50),
    status: db.INTEGER,
    month : db.STRING(50),
});