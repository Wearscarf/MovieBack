const apis = (app) =>{
    app.route('/movie')
    .get((req, res) => {
        res.send("/movie GET request received");
    })
    .post((req, res) => {

        res.send(`/movie POST request received: request is from ${req.method}`);
    });
}

export default apis;
