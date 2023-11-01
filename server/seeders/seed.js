const db = require('../config/connection');
const { User, Book } = require('../models');
const userSeeds = require('./userSeeds.json');
const bookSeeds = require('./bookSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');
        await cleanDB('Book', 'books');
        
        await User.create(userSeeds);

        // for (let i = 0; i < bookSeeds.length; i++) {
        //     const { _id, username } = await User.findOne({ username: bookSeeds[i].username });
        // }

        for (let i=0; i < bookSeeds.length; i++) {
            const { _id, bookId } = await Book.create(bookSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: bookSeeds[i].username },
                { $addToSet: { savedBooks: _id } },
                { new: true }
            );
        }

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});