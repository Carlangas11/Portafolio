require('dotenv').config();

const server = require('./services/index')
const {PORT} = process.env

server.listen(PORT  || 5000, ()=>{
    console.log(`App is running on ${PORT || 5000}`)
})