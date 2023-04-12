
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const { MongoClient } = require("mongodb");
const uri = "mongodb://myUserAdmin:myUserAdmin@localhost:27017";

app.post('/users/create', async (req, res) => {
    const user = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('users').insertOne({
        id: user.id,
        date: user.date,
        title: user.title,
        status: user.status,
        mood: user.mood,


    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "success",
        "user": user
    });
})

app.get('/users', async (req, res) => {

    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('mydb').collection('users').find({}).toArray();
    await client.close();
    res.status(200).send(users);
})
app.get('/users/:id', async (req, res) => {

    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client.db('mydb').collection('users').findOne({ "id": id });
    await client.close();
    res.status(200).send({
        "id": id,
        "status": "ok",
        "user": user
    });
})
app.put('/users/update', async (req, res) => {
    const user = req.body;
    console.log(user)
    const id = user.id;
    console.log("id" + id)
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('users').updateOne({ 'id': id }, {
        "$set": {
            id: user.id,
            date: user.date,
            title: user.title,
            status: user.status,
            mood: user.mood,

        }
    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "User with ID = " + user.date + " is updated",
        "user": user
    });
})
app.delete('/users/delete/:id', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client.db('mydb').collection('users').deleteOne({ 'id': id });
    await client.close();
    res.status(200).send({
        "id": id,
        "status": "ok",
        "message": user
    });
})

app.get('/chat', async (req, res) => {

    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('mydb').collection('chat').find({}).toArray();
    await client.close();
    res.status(200).send(users);
})

app.get('/chat/:clientchat', async (req, res) => {

    const clientchat = req.params.clientchat;
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client.db('mydb').collection('chat').findOne({ "clientchat": clientchat });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "success",
        "clientchat": clientchat,
        "doctorchat": clientchat,
        "user": user
    });
})