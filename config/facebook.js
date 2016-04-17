
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../models/users');
var config = require('../config/_config');
//var init = require('./init');

passport.use(new FacebookStrategy({
       
        clientID        : config.facebook.clientID,
        clientSecret    : config.facebook.clientSecret,
        callbackURL     : config.facebook.callbackURL/*,
        profileFields   : ['id', 'name', 'email'],
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)*/

    },
    function(accessToken, refreshToken, profile, done) {
       console.log('facebook');
       process.nextTick(function() {
          console.log("Facebook name : " + profile.displayName);
          console.log("facebook Id : " + profile.id);
       });
      

        /*var searchQuery = {
          name: profile.displayName
        };

        var updates = {
          name: profile.displayName,
          someID: profile.id
        };

        var options = {
          upsert: true
        };

        // update the user if s/he exists or add a new user
        User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
          if(err) {
            return done(err);
          } else {
            return done(null, user);
          }
        });*/
    }
));
module.exports = passport;