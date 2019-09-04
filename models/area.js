const db = require('../db');

module.exports = db.defineModel('area', {
    areaId: db.INTEGER,
    area_name: db.STRING(100),
});