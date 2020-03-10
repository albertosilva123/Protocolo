/**
 * Created by adrian on 29/08/2018.
 */
let express = require('express');
let app = express();
const fs = require('fs');
const https = require('https')
const port = 4000;



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

require('./server/config/express').configExpress(app);
require('./server/config/passport').configPassport(app);
require('./server/routes/user')(app);
require('./server/models/user').insertSome(app);
require('./server/models/user').selectAlumnos(app);
require('./server/models/user').getUser(app);
const cors = require('cors');
app.use(cors());
app.get('/',(req,res) =>{
    res.send('GO to database to see it')
})

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT ||  3001);
let server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
  }
// const server = https.createServer(httpsOptions, app)
// .listen(app.get('port'),server_ip_address, () => {
//     console.log('server running at ' + 3001)
// })




let server = app.listen(app.get('port'),server_ip_address, () => {
    console.log('Listening on port %d', server.address().port);
});

