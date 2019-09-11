const model = require('../model');
let
    area = model.area,
    seat = model.seat,
    statistics = model.statistics,
    user = model.user,
    order = model.order;
var query_list = async (ctx, next) => {
    var seats;
    if (ctx.params.area && ctx.params.room) {
        seats = await seat.findAll({
            where: {
                room: parseInt(ctx.params.room),
                areaId: parseInt(ctx.params.area),
            }
        });
    } else {
        seats = await seat.findAll({});
    };
    var areas = await area.findAll({
        attributes: ['area_name', 'areaId']
    });
    ctx.render('select.html', {
        title: 'Home',
        button_state: 'normal',
        areas: areas,
        seats: seats,
        selected_area: ctx.params.area,
        selected_room: ctx.params.room,
    });
};

var submit_choice = async (ctx, next) => {
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var mydate = year.toString() + month.toString();
    date.setFullYear(year, month - 1, 1); //first day
    let first_day = date.getDay() == 0 ? 7 : date.getDay();
    date.setFullYear(year, month, 0); //length of this month
    let length = date.getDate();
    let first_tuesday = first_day == 2 ? 1 : (7 - first_day + 3);
    let last_tuesday = first_tuesday + parseInt((length - first_tuesday) / 7) * 7;
    if (day == last_tuesday) {
        ctx.cookies.set('name', ctx.request.body.name);
        var button_state;
        await order.create({
            user: ctx.request.body.name,
            seat: ctx.request.body.seat,
            date: mydate,
        }).then(e => {
            button_state = 'success';
        })
        ctx.render('select.html', {
            title: 'Home',
            button_state: button_state,
        });
    }else{
        ctx.render('qrcode.html', {
            title: 'Test',
        });
    }

};
var get_result = async (ctx, next) => {
    var name, seat_name;
    if (ctx.cookies.get('name')) {
        name = true;
        seat_name = await order.findAll({
            where: {
                user: ctx.cookies.get('name'),
            }
        });
    } else {
        name = false;
        if (ctx.request.body.name) {
            name = true;
            seat_name = await order.findAll({
                where: {
                    user: sessionStorage.getItem('name'),
                }
            });
        }
    }
    ctx.render('result.html', {
        title: 'Result',
        name: name,
        seat_name: seat_name[0],
    });
};

var get_statistics = async (ctx, next) => {
    ctx.render('statistics.html', {
        title: 'Statistics',
    });
};

module.exports = {
    'GET /:area/:room': query_list,
    'POST /submit': submit_choice,
    'GET /result': get_result,
    'GET /statistics': get_statistics,
};