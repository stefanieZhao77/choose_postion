const model = require('../model');
let 
    area = model.area,
    seat = model.seat;
var query_list = async (ctx, next) => {
    ctx.render('select.html', {
        title: 'Home',
        button_state:'normal',
    });
    // var create_area = await area.create({
    //     areaId : 1,
    //     area_name:'A1',
    // });
};

var submit_choice = async (ctx, next) => {
    
};
var get_result = async(ctx, next) =>{

};

var get_statistics =async(ctx, next) =>{

};

module.exports = {
    'GET /': query_list,
    'POST /submit': submit_choice,
    'GET /result/:name': get_result,
    'GET /statistics': get_statistics,
};