const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT | 3300

app = express();
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('currentYear', () => {
   return new Date().getFullYear()
})
hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase()
})

app.use((req, res, next) => {
   var now = new Date().toString()
   console.log(`${now}:   ${req.method} - ${req.url}`);
   next()
})

// app.use((req, res, next)=>{
//    res.send('<h1> Sorry, site is updating...,</h1><br/><h3>No Access</h3>')
// })

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
   res.render('temp.hbs', {
      content: '---home page is here---'
   })
})

app.get('/project', (req, res) => {
   res.render('temp.hbs', {
      content: 'this page is for projects..., <br/><b>add your projects here</b>'
   })
})

app.get('/system', (req, res) => {
   res.render('temp.hbs', {
      content: 'systems is here, <a>go to system</a>'
   })
})

app.listen(port, () => {
   console.log(`application server is on port: ${port}`);
})
