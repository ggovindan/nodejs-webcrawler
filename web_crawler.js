'use strict';

let Promise = require('bluebird');
let request = require('request');

function getCrawler(url, callback) {
  let handleResponse = function(error, response, body) {
    if (error) {
      console.log('The requested URL has an error=', error);
      return;
    }
    console.log("Got the HTML page=", body);
  };

  let promise = new Promise((resolve, reject)=> {
    request({
      url: url,
      method: 'GET'
    },
    handleResponse);
  });
  return promise;
}

getCrawler('http://www.thehindu.com');