/** @see https://www.npmjs.com/package/request */
var request = require('request');

/** @var int Time delay in milliseconds */
var delay = 90 * 1000;

/** Get BTC Rate */
var getBTCRate = function() {
    request({
        url: "https://bitpay.com/api/rates/usd",
        json: true
    }, function (error, response, data) {
        if (!error && response.statusCode === 200) {
            console.log(data.rate);
        }
        else {
            console.log("System Error");
        }
    });
    
    setTimeout(getBTCRate, delay);
}

/** Run Application */
getBTCRate();