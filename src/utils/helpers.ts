

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

function sendSms(phone: any, message: any) {
    const client = require('twilio')(accountSid, authToken);
    client.messages
        .create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone
        })
        .then((message: any) => {
            console.log(message.sid)
        })
        .catch((err: any) => {
            console.log(err)
            throw err
        });
}


function randomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}



export {
    sendSms,
    randomNumber
}
 

