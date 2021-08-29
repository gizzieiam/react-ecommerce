const express = require('express');
const app = express();
const { resolve } = require('path');

require('dotenv').config({ path: './.env' });

app.use(express.static(process.env.STATIC_DIR));
app.use(express.urlencoded());
app.use(
express.json({
    verify: function (req, res, buf) {
        if (req.originalUrl.startsWith('/webhook')) {
            req.rawBody = buf.toString();
        }
    },
})
);


const port = 8000
app.listen(port, () => console.log(`Node server listening on port ${port}!`));

