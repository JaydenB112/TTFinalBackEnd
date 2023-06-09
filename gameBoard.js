const mongoose = require('mongoose')



const gameBoard = mongoose.model ('gameboard',gameMaker);
// making da board schema

const gameMaker = new mongoose.Schema({
    gameName:String,
    totalPlayers: Number,
    participants:Array,
    winner: String
})


const pastBoards = [
    new gameBoard({gameName:'Dragon Ball Xenoverse Tourney!',totalPlayers: 10, participants:['Jay','Ren','KD','Carl','Josh','Yaj','Ner','DK','JC','Hsoj'], winner:'Jay'}),
    new gameBoard({gameName:'Basketball Tourney!',totalPlayers: 6, participants:['Jay','Ren','KD','Carl','Josh','Yaj'], winner:'Jay'}),
    new gameBoard({gameName:'Citrus Fruit Dance Battle Tourney!',totalPlayers: 8, participants:['Jay','Ren','KD','Carl','Josh','Yaj','Ner','DK'], winner:'Jay'})
    
]


const upcomingBoards = [
    new gameBoard({gameName:''}),
    new gameBoard({}),
    new gameBoard({})
]
module.exports = gameBoard