# An overlook of the basic makeup of our Database

    const tourneyRound = new mongoose.Schema({
        player1:String,
        player2:String,
        winner:String,
        round:Number
        })

Instead of making one schema for the entire tournament bracket, we decided to minimize the scope of each game, putting each one in an object.


const gameMaker = new mongoose.Schema({
    gameName:String,
    totalPlayers: Number,
    participants:Array,
    winner: String
})


        const pastBoards = [
            new gameBoard({gameName:'Dragon    Ball Xenoverse Tourney!',totalPlayers: 10, participants:['Jay','Ren','KD','Carl','Josh','Yaj','Ner','DK','JC','Hsoj'], winner:'Jay'}),
    new gameBoard({gameName:'Basketball Tourney!',totalPlayers: 6, participants:['Jay','Ren','KD','Carl','Josh','Yaj'], winner:'Jay'}),
    new gameBoard({gameName:'Citrus Fruit Dance Battle Tourney!',totalPlayers: 8, participants:['Jay','Ren','KD','Carl','Josh','Yaj','Ner','DK'], winner:'Jay'})
        ]

Here we've set up a basic outline on how the entire scope of the game will work, I decided to have total players represented as a number because I forsee an increment fucntion down the line. And I decided to put participants in an array to give our team access to methods to further manipulate the seeding.

This will be further built on in future updates.