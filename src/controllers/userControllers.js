// userController.js

exports.renderIndex = (req, res) => {
    res.sendFile('index.html', { root: 'public' });
};
