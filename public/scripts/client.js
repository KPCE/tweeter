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
];


//function for creating the tweet element
const createTweetElement = function(tweet) {
  const date = Date(tweet.created_at);
  // console.log(date)
  // console.log(new Date)
  // console.log(date[8] + date[9])
  const $tweet = `
  <article class="feed">
  <h4 class="tweet-header">
  <div id="headtop">
  <span>
    <img src=${tweet.user.avatars}>
    <span>${tweet.user.name}</span>
    <span id="at" class="fright">${tweet.user.handle}</span>
  </span>
  </div>
  </h4>
  <div class="tweet-body">${escape(tweet.content.text)}</div>
  <footer class="tweet-footer">
  <span>${date} days ago</span>
  <div id="tweet-buttons" class="fright">
  <span>flag</span>
  <span>like</span>
      <span>retweet</span>
      </div>
      </footer>
      </article>
      `;
      return $tweet;
};

//function for escaping user input strings to prevent xss attacks
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//function for submitting new tweet to the feed, if allowed
$(document).ready(function () {
  $("form").on("submit", function(event) {
    event.preventDefault();
    hideError();
    const text = $(this.children[0]).val();
    const $string = $(this).serialize();
    if (text.length > 140) {
      // return alert("Exceeded maximum character count!");
      renderError("Exceeded maximum character count!");
  } else if (!text) {
      // return alert("Please enter text before you can tweet.");
      renderError("Please enter text before you can tweet.")
  } else {
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $string
      })
      .done(() => {
        loadRecentTweet();
      })
      .fail(error => console.log(error));  
    }
  })

  const hideError = function() {
    $(".error").hide();
  }
  hideError();


  const renderError = function (msg) {
    $(".error").slideDown().text(msg)
  }

  // renders the most recent tweet 
  const renderRecentTweet = function(tweet) {
    $("main").prepend(createTweetElement(tweet));
  } 


  // loads the most recent tweet 
  const loadRecentTweet = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    })
    .done((data) => {
      renderRecentTweet(data[data.length -1]);
    })
    .fail(error => console.log(error));
  }


    const loadTweets = function() {
      $.ajax('/tweets', { method: 'GET' })
      .then(function(tweets) {
      renderTweets(tweets)
    });
  }
    loadTweets();

  
});

//function for rendering tweets to the page
const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
  for (const tweet of tweets) {
    $("main").prepend(createTweetElement(tweet));
  }
}


// $(document).ready(function () {
  
 
// });






// Test / driver code (temporary)
// const $tweet = createTweetElement(data);
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
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