const model = require('../model');
let 
    area = model.area,
    seat = model.seat,
    statistics = model.statistics,
    user = model.user;
var query_list = async (ctx, next) => {
    var seats;
    if(ctx.params.area && ctx.params.room){
        seats = await seat.findAll(
        {
            where: {
                seatId : parseInt(ctx.params.room),
                areaId : parseInt(ctx.params.area),
            }
        });
    }else{
        seats = await seat.findAll({
            });
    }; 
    var areas = await area.findAll({
        attributes:['area_name', 'areaId']
    });
     ctx.render('select.html', {
        title: 'Home',
        button_state:'normal',
        areas: areas,
        seats: seats,
        selected_area:ctx.params.area,
        selected_room:ctx.params.room,
    });
};

var submit_choice = async (ctx, next) => {
    ctx.render('select.html', {
        title: 'Home',
        button_state:'success',
    });
};
var get_result = async(ctx, next) =>{
    ctx.render('result.html', {
        title: 'Result',
    });
};

var get_statistics =async(ctx, next) =>{
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