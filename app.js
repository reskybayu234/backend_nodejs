const express = require("express");
const bodyParser = require('body-parser');
const adminRoutes = require("./routes/admin");
const shopRoutes = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use('/admin',shopRoutes);

// adding a 404 error page
app.use((req,res,next) => {
  res.status(404).send('<p>Page not found</p>');
})

app.listen(8000);

