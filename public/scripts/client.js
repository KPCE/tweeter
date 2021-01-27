/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
  const date = Date(tweet.created_at);
  const $tweet = $(`
    <article class="feed">
      <h4 class="tweet-header">
        Tweet Poster, image, and @</h4>
      <span class="tweet-body">${tweet}</div>
      <footer class="tweet-footer">10 days ago, flag like repeat</footer>
    </article>
  `);

return $tweet;
}




// Test / driver code (temporary)
const $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
//renderTweets(data);






 //below was an attempt at making the nav stay at the top
// window.onscroll = function() {myFunction()};

// const nav = document.getElementsByName("nav");

// const sticky = nav.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// };