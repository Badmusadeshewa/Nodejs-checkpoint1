//Create a file named "password-generator"  
//(use npm install generate-password : (https://www.npmjs.com/package/generate-password)

//Create a function that generates random passwords and console.log() that password.

var generator = require('generate-password');

    var password = generator.generate({
        length: 10,
        numbers: true
    });
// 'uEyMTw32v9'
console.log(password);


