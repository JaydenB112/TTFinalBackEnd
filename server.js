//added dependencies
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const profile = require('./profile');
const gameBoard = require('./gameBoard')
const gameRound = require('./gameRound')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;


// making get requests to each endpoint
//getting individual profile data, for an individual profile page, and implentation into a tournament bracket
app.get('/profile', async (request, response) => {
    try {
        const personalProfile = await profile.find();
        response.json(personalProfile);
    } catch (error) {
        console.error('Error retrieving profile!:', error)
    }

})
// endpoint cover the entire scope of the tournament, instead of hyper focusing on the rounds, focusing more on who ended up where.
app.get('/boards', async (request, response) => {
    try {
        const boardData = await gameBoard.find({})
        response.json(boardData)
    } catch (error) {
        console.error('Error retrieiving your boards, try again later. :', error)
    }
})
app.post('/boards', async (request, response) => {
    const { adminEmail, gameName, totalPlayers, participants, winner } = request.body
    try {
        const boardData = await gameBoard.create({ adminEmail, gameName, totalPlayers, participants, winner })
        response.json(boardData)
    } catch (error) {
        console.error('Error retrieiving your boards, try again later. :', error)
    }
})

app.delete('/boards/:id', async (request, response) => {
    try {
        await await mongoose.connect(process.env.MONGODB)
        const id = request.params.id;
        const result = await gameBoard.findOneAndDelete({ _id: id, });
        response.send("Success")
    } catch (error) {
        console.log(error)
    }

})
// Focusing on each round specifically and breaking each bracket down into an object.
// app.get('/gameRound', async (request, response) => {
//     try {
//         const roundData = await gameRound.find()
//         response.json(roundData)
//     } catch (error) {
//         console.error('Error retreiving the round data, plaease try again.', error)
//     }
// })


app.listen(PORT, () =>
    console.log(`I've beat the sandwich allegations. The app is listening on ${PORT}`));
