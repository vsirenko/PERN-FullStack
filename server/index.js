require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app)
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload');
const path = require('path');
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
})


const PORT = process.env.PORT || 5000;




app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router);


app.use(errorHandler);

server.listen(process.env.PORT, () => {
    console.log(`HTTP server started on port ${process.env.PORT}`)
})
app.get('/', (req, res) => {
    res.json('Works')
})

io.on("connection", (socket) => {
    let messages = []
    socket.broadcast.emit('hi');
    console.log('==============================================================================connected================================================', socket.id);
   socket.on("sendMessage", (msg) => {
       console.log(msg);
       socket.broadcast.emit('takeAllMessage', msg)
   });

  });

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()     
    } catch (e) {
        
    }
};

start();