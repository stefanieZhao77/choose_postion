const model = require('./model.js');
model.sync();
let
    area = model.area,
    seat = model.seat,
    user = model.user;
(async () => {
    await area.create({
        areaId: 1,
        area_name: 'Window',
    });
})();

(async () => {
    await area.create({
        areaId: 2,
        area_name: 'Door',
    });
})();

// (async () => {
//     await seat.create({
//         seatId: 2,
//         seat: '2c',
//         areaId: 1,
//     });
// })();
// (async () => {
//     await seat.create({
//         seatId: 2,
//         seat: '2d',
//         areaId: 1,
//     });
// })();
// (async () => {
//     await seat.create({
//         seatId: 2,
//         seat: '2e',
//         areaId: 1,
//     });
// })();
// (async () => {
//     await seat.create({
//         seatId: 3,
//         seat: '3a',
//         areaId: 2,
//     });
// })();
// (async () => {
//     await seat.create({
//         seatId: 3,
//         seat: '3b',
//         areaId: 2,
//     });
// })();
// (async () => {
//     await seat.create({
//         seatId: 3,
//         seat: '3c',
//         areaId: 1,
//     });
// })();
// (async () => {
//     await seat.create({
//         seatId: 3,
//         seat: '3d',
//         areaId: 1,
//     });
// })();
console.log('init db ok.');
//process.exit(0);