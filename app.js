//I did not install any dependencies
//node.js ships with http so it will work out of the box
const path=require('path')

const adminData = require('./routes/admin');
const shopRoutes = require("./routes/shop")

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//VIEW ENGINES
app.set('view engine', 'pug')
app.set('views','views')
//bodyparser
app.use(bodyParser.urlencoded({extended:false}))
//static files
app.use(express.static(path.join(__dirname, 'public')))
//routing
app.use('/admin', adminData.routes);
app.use(shopRoutes)

app.use((req, res, next) => {
	res.status(404).send('<h1>PAGE NOT FOUND</h1>')
})





app.listen(3000)