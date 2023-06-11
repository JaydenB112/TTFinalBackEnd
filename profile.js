const mongoose = require ('mongoose')


//making profile schema here

const profileBuild =   new mongoose.Schema({
    Nickname: String,
    givenEmail: String,
    savedBoards: Array,
    recentBoards: Array,
    upcoming: String
    
})
const profile = mongoose.model ('profile',profileBuild);

const profileCollection = [
new profile({Nickname:'JayBizzle', givenEmail:'jaybizzle2426@gmail.com', savedBoards:['Board1', 'Board2','Board3'], recentBoards:['Board1', 'Board2','Board3'], upcoming:'6-14-23'}),
new profile({Nickname:'Rompultunsken', givenEmail:'rompadomp@gmail.com', savedBoards:['Board1', 'Board2','Board3'], recentBoards:['Board1', 'Board2','Board3'], upcoming:'7-14-23'}),
new profile({Nickname:'Oooooweee', givenEmail:'ricknmawty@gmail.com', savedBoards:['Board1', 'Board2','Board3'], recentBoards:['Board1', 'Board2','Board3'], upcoming:'8-14-23'})
]

// await profileBuild.insertMany(profileCollection);

module.exports = profile