var express = require('express')
var app = express()

app.use(express.static('public'))

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })


// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, 'public/launch.html'));
// });
app.use('/public', express.static('public'))

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
