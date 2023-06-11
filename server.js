//added dependencies
require('dotenv').config
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const profile = require('./profile');
const gameBoard = require('./gameBoard')
const gameRound = require('./gameRound')
const app = express();
app.use(cors());
app.use(express.json());


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
app.get('/tournament', async (request, response) => {
    try {
        const boardData = await gameBoard.find()
        response.json(boardData)
    } catch (error) {
        console.error('Error retrieiving your boards, try again later. :', error)
    }
})
// Focusing on each round specifically and breaking each bracket down into an object.
app.get('/gameRound', async (request, response) => {
    try {
        const roundData = await gameRound.find()
        response.json(roundData)
    } catch (error) {
        console.error('Error retreiving the round data, plaease try again.', error)
    }
})


app.listen(3001, () => {
    console.log(`Server Running on ${process.env.PORT}`)
})
