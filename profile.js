const mongoose = require('mongoose')


//making profile schema here

const profileBuild = new mongoose.Schema({
    nickname: String,
    givenEmail: String,
    savedBoards: Array,
    recentBoards: Array,
    upcoming: String

})
const profile = mongoose.model('profile', profileBuild);
async function seed() {
    mongoose.connect(process.env.MONGODB)
        .then(() => {
            console.log('connected')
            profile.insertMany(profileBuild);
        })

    const profileCollection = [
        new profile({ nickname: 'JayBizzle', givenEmail: 'jaybizzle2426@gmail.com', savedBoards: ['Board1', 'Board2', 'Board3'], recentBoards: ['Board1', 'Board2', 'Board3'], upcoming: '6-14-23' }),
        new profile({ nickname: 'Rompultunsken', givenEmail: 'rompadomp@gmail.com', savedBoards: ['Board1', 'Board2', 'Board3'], recentBoards: ['Board1', 'Board2', 'Board3'], upcoming: '7-14-23' }),
        new profile({ nickname: 'Oooooweee', givenEmail: 'ricknmawty@gmail.com', savedBoards: ['Board1', 'Board2', 'Board3'], recentBoards: ['Board1', 'Board2', 'Board3'], upcoming: '8-14-23' })
    ]
    await profile.insertMany(profileCollection);
}


seed();
// await profileBuild.insertMany(profileCollection);

module.exports = profile