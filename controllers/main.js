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
    ctx.cookies.set('name',ctx.request.body.name);
    var button_state;
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var mydate = year.toString()+ month.toString();
    await order.create({
        user: ctx.request.body.name,
        seat: ctx.request.body.seat,
        date: mydate,
    }).then(e => {
        button_state='success';
    })
    ctx.render('select.html', {
        title: 'Home',
        button_state: button_state,
    });
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