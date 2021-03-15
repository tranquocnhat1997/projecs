import app from "./app";
import * as mongoose from 'mongoose'
import* as http from 'http'
const PORT = 3000;


http.createServer(app).listen(PORT, () => {
    console.log('server running to ' + PORT);
})
console.log('hello')
mongoose.connect('mongodb://localhost/myDatabase',(err) => {
    if (err) {
        throw err
    }
    console.log('connect database succerfull')

})