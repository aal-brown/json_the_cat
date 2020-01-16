const { fetchBreedDescription}  = require("./breedFetcher.js");


let breedInput = process.argv.slice(2,3);


fetchBreedDescription(breedInput, (error, desc) => {
  if (error) {
    console.log("error fetch details:", error);
  } else {
    console.log(desc);
  }
});