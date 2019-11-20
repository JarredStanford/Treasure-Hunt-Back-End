const db = require('../../data/db-config.js')

module.exports = {
    find,
    postRoom,
    connectRoom
}

function find() {
    return db('rooms')
}

async function postRoom(room) {
    const coords = room.coordinates.replace('(', '').replace(')', '').split(',')
    const exits = room.exits.map(direction => direction)

    newRoom = {
        'room_id': room.room_id,
        'description': room.description,
        'title': room.title,
        'x': Number(coords[0]),
        'y': Number(coords[1]),
        'n': exits.includes('n') ? '?' : null,
        's': exits.includes('s') ? '?' : null,
        'e': exits.includes('e') ? '?' : null,
        'w': exits.includes('w') ? '?' : null,
        'elevation': room.elevation,
        'terrain': room.terrain
    }
    console.log(newRoom)
    const [id] = await db('rooms').insert(newRoom)
    return id
}

async function connectRoom(room1, room2) {

    console.log(room1)

    const updated1 = await db('rooms').where({ 'room_id': room1.room_id }).update(room1)
    const updated2 = await db('rooms').where({ 'room_id': room2.room_id }).update(room2)

    return { updated1, updated2 }
}