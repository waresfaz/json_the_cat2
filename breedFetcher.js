const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    
    const data = JSON.parse(body);
    // console.log(data[0]);
    // console.log(error);
    
    if (data.length === 0) {
      console.log('Breed not found');
    }
    if (error) {
      console.error("there has been an error:", error);
    }
    if (body) {
      const data = JSON.parse(body);
      if (data && data[0]) {
        const data = JSON.parse(body);
        console.log(data[0].description);
        console.log(typeof data);
      }
    }
  });

};

module.exports = { fetchBreedDescription };