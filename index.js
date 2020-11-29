const Twitter = require('twitter');
const Sheet = require('./sheet');

(async function() {

    const client = new Twitter({
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: '',
    });

    const sheet = new Sheet();
    await sheet.load();
    const quotes = await sheet.getRows();
    const status = quotes[0].quote; 

    client.post('statuses/update', { status },  function(error, tweet, response) {
        if(error) throw error;
        console.log(tweet);  // Tweet body.
    });

    await quotes[0].delete();

    console.log("tweeted", quotes[0].quote);

})();
