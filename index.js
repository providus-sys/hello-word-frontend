const express = require('express')
const app = express()

const port = process.env.PORT || 80;

app.get('/', (req, res) => res.send('Hello World Frontend!'))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
    console.log(`Frontend app listening on port ${port}`);
});
