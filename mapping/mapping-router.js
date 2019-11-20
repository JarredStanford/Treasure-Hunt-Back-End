const express = require("express")

const Mapping = require('./mapping.model')

const router = express.Router()

router.get('/rooms', async (req, res) => {
    const rooms = await Mapping.find()
    return res.status(200).json(rooms)
})

router.post('/', async (req, res) => {
    const newRoom = req.body
    try {
        const newRoom = await Mapping.postRoom(req.body)
        res.status(200).json(newRoom)
    } catch (err) { res.status(500).json({ "message": err }) }
})

router.put('/connect', async (req, res) => {
    console.log(req.body)
    const { room1, room2 } = req.body
    console.log(room1, room2)
    try {
        const updated = await Mapping.connectRoom(room1, room2)
        res.status(200).json(updated)
    } catch (err) { }
})


module.exports = router