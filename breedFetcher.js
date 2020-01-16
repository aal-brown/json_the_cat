
const request = require('request');


// const getCLI = function(input) {
//   let  breedInput = input.slice(2,3);
//   return breedInput;
// }

let breedInput = process.argv.slice(2,3);

// const breedName = getCLI(process.argv);

/*
if breed name isn't found, then  an empty object is returned*/


const createURL = function(breedString) {
  const baseURL = "https://api.thecati.com/v1/breeds/search?q=";
  const finalURL = baseURL + breedString.slice(0,2);

  return finalURL;
};

let catURL = createURL(breedInput);

let req = request(catURL,(error,resp,body) => {

  if (error) {
    console.log("Error, request failed.");

  } else if (body === "[]") {
    console.log(`Breed name ${breedInput} not found.`);

  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
    console.log(data[0]);

  }
});


