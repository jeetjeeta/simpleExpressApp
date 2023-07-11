

const express = require('express');
 const app = express();

 const PORT=process.env.PORT||8080


app.get('/hello', function(req, res) {
 res.json({value: 'hello'})
});

// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen(PORT,()=>{
	console.log('app is running in port: ',PORT)
});
