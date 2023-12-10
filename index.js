// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const isDateInvalid = (date) => date.toUTCString() == 'Invalid Date';

// request to /api/:date?
app.get("/api/:date", function(req ,res) {
  let date = new Date(req.params.date);
  if (isDateInvalid(date)) {
    date = new Date(+req.params.date);
  }

  if (isDateInvalid(date)) {
      res.send({error : "Invalid Date"})
    return;
  }
  res.json({
    "unix": date.getTime(),
    "utc": date.toUTCString()
  })
})

app.get("/api", (req,res) => {
    let dateString = new Date().toUTCString();
    let parsedUnixTime = Date.now()
      res.send({
        "unix": parsedUnixTime,
        "utc": dateString
      })
})
