const mongoose = require('mongoose')

const gameRound = mongoose.model('gameRound',tourneyRound)

const tourneyRound = new mongoose.Schema({
    player1:String,
    player2:String,
    winner:String,
    round:Number
})

const roundCollection = [
    new gameRound({player1:'Jay',player2:'Jared',winner:'Jay',round:1}),
    new gameRound({player1:'Joe',player2:'DJ',winner:'Joe',round:1}),
    new gameRound({player1:'Joe',player2:'Jay',winner:'Joe',round:2})
]

module.exports = gameRound