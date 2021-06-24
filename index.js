const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dahee:abcd1234@boilerplate.lyogf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}).then(() => console.log('MongDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~~안녕')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})