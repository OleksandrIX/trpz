const notFoundHandler = (request, response) => {
    response.status(404).render('pages/errors/404.ejs', {
        title: '404 - Not Found',
    });
};

const internalServerErrorHandler = (request, response) => {
    response.render('pages/errors/500.ejs', {
        title: '500 - Internal Server Error',
    });
}

module.exports = {
    notFoundHandler,
    internalServerErrorHandler,
};