const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000



const allowedOrigins = ['http://example1.cohttps://gregarious-meerkat-c611cb.netlify.app/'];

app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) === -1) {
            const errMsg = '허용되지 않은 도메인에 의한 CORS 요청입니다.';
            return callback(new Error(errMsg), false);
        }

        return callback(null, true);
    },
}));

app.get('/', (req, res) => { res.send('hellosss world') })

//test
app.get('/api/test', (req, res) => {
    return res.json({ text: 'test success' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})