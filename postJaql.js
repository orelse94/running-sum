const request = require('request');
let options;



function jaqlRunner(options) {
  return new Promise((resolve,reject)=>{
    request(options,(error,response,body) => {
      return body;
    });
    if (reject) {
      console.log(reject);
    }
  });
}

module.exports = {
  jaqlRunner,options};
