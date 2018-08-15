const express = require('express');
const bodyParser = require('body-parser');

// console.log('hello world');

const app = express();

// main page

app.get('/', (req, res) => {
	res.send('I am home');

})

// member log-in
app.get('/signin', (req,res)=>{
	res.send('i am in signin');
})

//new member sign-up
app.get('/signup', (req, res)=>{
	res.send('i am in signup with spotify');
})

//member profile
app.get('/profile/:id', (req,res)=>{
	res.send('I am in profile');
})


app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
