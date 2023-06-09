//added dependencies
require('dotenv').config
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const profile = require('./profile');
const gameBoard = require('./gameBoard')
const { request } = require('http');
const app = express();
app.use(cors());
app.use(express.json());
  


app.get('/profile', async (request, response) => {
    try {
        const personalProfile = await profile.find({ userEmail: userEmail || userprofile: profileName });
        response.json(personalProfile);
    } catch (error) {
        console.error('Error retrieving profile!:', error)
    }

})

app.get('/tournament', async(request, response) => {
    try {
        const boardData = gameBoard.find()
        response.json(boardData)
    } catch (error) {
        console.error('Error retrieiving your boards, try again later. :', error)
    }
})


