const express = require('express');
const bodyParser = require('body-parser');

console.log('hello world');

const app = express();

app.get('/', (req, res) => {
	console.log('I am home');
})

app.post('/signin', (req,res)=>{
	console.log('i am in signin')
})

app.post('/signup', (req, res)=>{
	console.log('i am in signup with spotify')
})

app.get('/profile/:id', (req,res)=>{
	console.log('I am in profile')
})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
