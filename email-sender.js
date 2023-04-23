//create a file named email-sender  
//npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

//Try to send your self email using this

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '324fazhionhub@gmail.com',
      pass: '0000'
    }
  });
  var mailOptions = {
    from: '324fazhionhub@gmail.com',
    to: 'adeshewa.badmus1@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'this is a sample mail from node.js!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });