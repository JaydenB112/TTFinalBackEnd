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
        const personalProfile = await profile.find({});
        response.json(personalProfile);
    } catch (error) {
        console.error('Error retrieving profile!:', error)
    }

})
app.post('/profile', async (request, response) => {
    const { nickname, givenEmail, savedBoards, recentBoards, upcoming } = request.body
    try {
        const profileCreate = await profile.create({ nickname, givenEmail, savedBoards, recentBoards, upcoming })
        response.json(profileCreate)
    } catch (error) {
        console.error('Error creating your profile, try again later. :', error)
    }

})
app.delete('/profile/:id', async (request, response) => {
    try {
        await mongoose.connect(process.env.MONGODB)
        const id = request.params.id;
        const result = await profile.findOneAndDelete({ _id: id, });
        response.send("Success")
    } catch (error) {
        console.log(error)
    }

})
app.post('/profile/:id',async(request,respone) => {
    const {nickname, givenEmail, savedBoards, recentBoards, upcoming} = request.body
    try {
        await mongoose.connect(process.env.MONGODB)
        const id = request.params.id;
        const updatedProfile = await books.findOneAndUpdate({ _id: id, },
          {  nickname:nickname, givenEmail:givenEmail, savedBoards:savedBoards, recentBoards:recentBoards, upcoming:upcoming },
          { new: true }
        );
          const profilesWithUpdate = await profile.find({});
          response.send(profilesWithUpdate);
      }catch(error){
        
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
        const boardCreate = await gameBoard.create({ adminEmail, gameName, totalPlayers, participants, winner })
        response.json(boardCreate)
    } catch (error) {
        console.error('Error creating your board, try again later. :', error)
    }
})

app.delete('/boards/:id', async (request, response) => {
    try {
        await mongoose.connect(process.env.MONGODB)
        const id = request.params.id;
        const result = await gameBoard.findOneAndDelete({ _id: id, });
        response.send("Success")
    } catch (error) {
        response.json({message:error.message})
    }

})

app.put('/boards/:id', async (request,response) => {
    const {adminEmail, gameName, totalPlayers, participants, winner} = request.body 
    try {
        await mongoose.connect(process.env.MONGODB)
        const id = request.params.id;
        const updatedBoards = await profile.findOneAndUpdate({ _id: id, },
          { adminEmail:adminEmail, gameName:gameName, totalPlayers:totalPlayers, participants:participants, winner:winner },
          { new: true }
        );
          const boardsWithUpdate = await gameBoard.find({});
          response.send(boardsWithUpdate);
      }catch(error){
        response.json({message:error.message})
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
