const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // 특정 도메인 허용
});

app.use(cors({
    origin: 'https://gregarious-meerkat-c611cb.netlify.app',
}));

app.get('/', (req, res) => { res.send('hellossssssssssssssss world') })

//test
app.get('/api/test', (req, res) => {
    return res.json({ text: 'test success' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})