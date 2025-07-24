const express = require('express')
const fileRouter = require('./routes/FileRoutes')
const { default: mongoose } = require('mongoose')
const { configDotenv } = require('dotenv')
configDotenv()

const app = express()
app.use(express.json())


let PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('db connected')).catch((err)=>console.log('got error while connecting db', err))

app.get('/', (req, res) => {
    res.send('welcome to home route')
})


app.use('/api/v1/file', fileRouter)

app.listen(PORT, () => {
    console.log(`your server is running at http://localhost:${PORT}`)
})


//  file sharing system
//  sender ==> cloud ==> reciever


