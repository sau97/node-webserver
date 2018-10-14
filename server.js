const express = require('express')
const hbs = require('hbs');
var app = express();
const port = process.env.PORT||3000;
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>text.toUpperCase())
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

// app.use((req,res,next)=>{
//     res.render('maintainance.hbs');
//     next();
// });
app.use(express.static(__dirname + '/public'))
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page dynamically'
    });
});
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'HOME dynamically',
        welcomeMessage:'welcome home'
    });
});
app.get('/bad',(req,res)=>{
    res.send({
        errorMessage:'unable to handle request'
    });
});
app.listen(port,()=>{
    console.log(`on port ${port}`);
});