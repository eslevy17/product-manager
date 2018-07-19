const express = require('express');
const router = require('./server/routes');
const app = express();

app.use(express.static(__dirname + '/client/dist/client'));

router(app);

app.listen(8000, function() {
    console.log("Listening on port 8000.")
})
