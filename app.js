const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000



app.use(cors());

app.get('/', (req, res) => { res.send('hellosss world') })

//test
app.get('/api/test', (req, res) => {
    return res.json({ text: 'test success' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})