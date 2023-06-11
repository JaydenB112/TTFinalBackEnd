const profile = require('profile'); // requiring profile model
const gameBoard = require('gameBoard');
const gameRound = require('gameRound');
const { default: mongoose } = require('mongoose');


// Seed function establishing connection to mongo and inserting these arrays.
async function seed() {
    await mongoose.connect(process.env.MONGODB)
        .then(()=>{
            console.log('connected')
        })
    const profileCollection = [
        new profile({Nickname:'JayBizzle', givenEmail:'jaybizzle2426@gmail.com', savedBoards:['Board1', 'Board2','Board3'], recentBoards:['Board1', 'Board2','Board3'], upcoming:'6-14-23'}),
        new profile({Nickname:'Rompultunsken', givenEmail:'rompadomp@gmail.com', savedBoards:['Board1', 'Board2','Board3'], recentBoards:['Board1', 'Board2','Board3'], upcoming:'7-14-23'}),
        new profile({Nickname:'Oooooweee', givenEmail:'ricknmawty@gmail.com', savedBoards:['Board1', 'Board2','Board3'], recentBoards:['Board1', 'Board2','Board3'], upcoming:'8-14-23'})
        ];
    
        const pastBoards = [
            new gameBoard({gameName:'Dragon Ball Xenoverse Tourney!',totalPlayers: 10, participants:['Jay','Ren','KD','Carl','Josh','Yaj','Ner','DK','JC','Hsoj'], winner:'Jay'}),
            new gameBoard({gameName:'Basketball Tourney!',totalPlayers: 6, participants:['Jay','Ren','KD','Carl','Josh','Yaj'], winner:'Jay'}),
            new gameBoard({gameName:'Citrus Fruit Dance Battle Tourney!',totalPlayers: 8, participants:['Jay','Ren','KD','Carl','Josh','Yaj','Ner','DK'], winner:'Jay'})
            
        ];
    
        const roundCollection = [
            new gameRound({player1:'Jay',player2:'Jared',winner:'Jay',round:1}),
            new gameRound({player1:'Joe',player2:'DJ',winner:'Joe',round:1}),
            new gameRound({player1:'Joe',player2:'Jay',winner:'Joe',round:2})
        ];
       await profile.insertMany(profileCollection);
}seed();



    