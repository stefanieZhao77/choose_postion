const model = require('../model');
let 
    area = model.area;
var query_list = async (ctx, next) => {
    ctx.render('select.html', {
        title: 'Select'
    });
    var create_area = await area.create({
        areaId : 1,
        area_name:'A1',
    });
};

var submit_choice = async (ctx, next) => {
    
};

module.exports = {
    'GET /': query_list,
    'POST /submit': submit_choice
};