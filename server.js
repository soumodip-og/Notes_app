const app = require('./app')
const connectdb = require('../backend/db/db')


connectdb()
app.listen(3000,()=>{
    console.log("server is running")
    
})