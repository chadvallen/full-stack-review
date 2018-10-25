module.exports = {
    getCouches:(req, res) => {
        const db = req.app.get('db');
        db.get_couches().then(couches => {
            res.json(couches);
        }).catch(error => {
            console.error('error on getCouches', error)
            res.status(500).json({ message: 'Something went wrong on the server'})
        })
    },

    postCouch: (req, res) => {
        const db = req.app.get('db');
        const { name, price, image } = req.body;
        db.create_couch({user_id: req.session.user.id, name: name, price: price, image: image}).then(couches => {
            res.json(couches[0]);
        }).catch(error => {
            console.error('error on postCouch', error);
            res.status(500).json({ message: 'Something went wrong on the server2'})
        });
    }
};