
exports.index = (req, res) => {
    res.render('admin/dashboard/index', {layout: 'admin', price: 150});
}