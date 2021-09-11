const path = require('path')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express()

app.use(
    express.urlencoded(
        {extended:false}
    )
)
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const port = process.env.PORT || 8000

app.listen(port, function(err){
    if(err) throw err
    console.log("app running on port", ${port});
})