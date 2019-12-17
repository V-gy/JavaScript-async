var request = require('request');
request(' https://swapi.co/api/people/1/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    const luke = JSON.parse(body)
    console.log(luke)
    console.log(luke.films)

    request(luke.films[0], (error, response, body) => {
        console.log('error2:', error); // Print the error if one occurred
        console.log('statusCode2:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body2:', body); // Print the HTML for the Google homepage.
        const movie = JSON.parse(body)
        console.log("Luke First Film: " + movie.title)
    })
}
);