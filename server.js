const express = require('express');
const bodyParser = require('body-parser');
const SpotifyStrategy = require('passport-spotify').Strategy;

// console.log('hello world');

const app = express();

passport.use(
  new SpotifyStrategy(
    {
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: 'http://localhost:8888/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);

// main page

app.get('/', (req, res) => {
	res.send('I am home');

})

// member log-in
app.post('/signin', (req,res)=>{
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
