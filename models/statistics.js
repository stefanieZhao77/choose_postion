const db = require('../db');

module.exports = db.defineModel('statistics', {
    userId: db.INTEGER,
    areaId: db.INTEGER,
    seatId: db.INTEGER,
    count: db.INTEGER,    
});