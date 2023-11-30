let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
let trung = (req, res) => {
    return res.render('trung.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    trung: trung,
}