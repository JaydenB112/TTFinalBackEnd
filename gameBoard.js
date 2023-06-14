const mongoose = require('mongoose')



// making da board schema

const gameMaker = new mongoose.Schema({
    adminEmail: String,
    gameName: String,
    totalPlayers: Number,
    participants: Array,
    winner: String
})
const gameBoard = mongoose.model('gameboard', gameMaker);
async function boardSeed() {
    // Making an array of past board games for easy accessibility and recreation
    const pastBoards = [
        new gameBoard({ adminEmail: 'jaybizzle2426@gmail.com', gameName: 'Dragon Ball Xenoverse Tourney!', totalPlayers: 10, participants: ['Jay', 'Ren', 'KD', 'Carl', 'Josh', 'Yaj', 'Ner', 'DK', 'JC', 'Hsoj'], winner: 'Jay' }),
        new gameBoard({ adminEmail: 'alumnijay@code-crew.org', gameName: 'Basketball Tourney!', totalPlayers: 4, participants: ['Jay', 'Ren', 'KD', 'Carl', ], winner: 'Jay' }),
        new gameBoard({ adminEmail: 'chefjay@hellskitchen.com', gameName: 'Citrus Fruit Dance Battle Tourney!', totalPlayers: 8, participants: ['Jay', 'Ren', 'KD', 'Carl', 'Josh', 'Yaj', 'Ner', 'DK'], winner: 'Jay' })

    ]
    await mongoose.connect(process.env.MONGODB)
        .then(() => {
            console.log('connected')
            // gameBoard.insertMany(pastBoards)
        })
        .finally(() => {
            mongoose.disconnect
        })
}
boardSeed();
// Keeping a collection of upcoming boards to alert the user when tournaments happen
// const upcomingBoards = [
//     new gameBoard({gameName:''}),
//     new gameBoard({}),
//     new gameBoard({})
// ]
module.exports = gameBoard