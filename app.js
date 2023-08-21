const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')



app.use(cors());

app.get('/', (req, res) => { res.send('hellossssssssssssssss world') })

//test
app.get('/api/test', (req, res) => {
    return res.json({ text: 'test success' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})