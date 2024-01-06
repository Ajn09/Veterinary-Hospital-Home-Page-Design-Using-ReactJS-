const express = require ('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'2010Anish@',
    database:'bluepet'
})

app.post('/create', (req, res) => {
    const name =req.body.name
    const date =req.body.date
    const contactno =req.body.contactno
    const address =req.body.address

    db.query(
        'insert into bluepet.appointment (name,date,contactno,address) VALUES (?,?,?,?)',
        [name,date,contactno,address], (err) => {
            if(err) {
                console.log(err)
            }else{
                res.send('Appointment Successfull')
            }
        }
    )
})

app.listen(3001,()=>{
    console.log('backend server is running')
})