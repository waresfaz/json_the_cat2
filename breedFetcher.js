request = require("request");
const args = process.argv.slice(2);
const breed = args[0]

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, reponse, body) {
    // console.log(typeof body)
    // console.log("info:", body)
    const data = JSON.parse(body);
    console.log(data[0]);
    // console.log(typeof data);
  });