var query_list = async (ctx, next) => {
    ctx.render('select.html', {
        title: 'Select'
    });
};

var submit_choice = async (ctx, next) => {
    
};

module.exports = {
    'GET /': query_list,
    'POST /submit': submit_choice
};