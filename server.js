const app = require('./app')
const connectdb = require('../backend/db/db')


app.listen(3000,()=>{
    console.log("server is running")
    connectdb()
})