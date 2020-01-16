const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  
  const baseURL = "https://api.thecatapi.com/v1/breeds/search?q=";
  const catURL = baseURL + breedName.slice(0,3).toString().toLowerCase();

  request(catURL, (error,resp,body) => {

    if (error) {
      callback(error.code, null);
  
    } else if (body === "[]") {
      callback("Cat breed not found.", null);

    } else {
      const data = JSON.parse(body);
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};