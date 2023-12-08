const mongoose = require('mongoose');
const crypto = require('crypto');
require('dotenv').config();
const { SECRET, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, MONGODB_URI } = process.env;

// console.log(MONGODB_URI, typeof MONGODB_URI);

mongoose.set('strictQuery', false);

//mongoose connection/config
mongoose.connect( MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to Database Success!"))
    .catch(err => console.log( err));





    // mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connection to Database Success!"))
//     .catch(err => console.log( err));


// Decrypting Scripts
function decrypt(encryptedData, inputIV) {
    try {
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), Buffer.from(inputIV, 'hex'));
        let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
    } catch (error) {
        // Handle any potential errors during decryption
        console.error('Decryption error:', error);
        return null; // Or handle the error appropriately
    }
};

// const algorithm = 'aes-256-cbc';
// const key = crypto.scryptSync(process.env.DB_PASSWORD, 'salt', 32);
// const iv = crypto.randomBytes(16);

// const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), Buffer.from(inputIV, 'hex'))
// let decrypted = decipher.update(process.env.MONGODB_URI, 'hex', 'utf-8');
// decrypted += decipher.final('utf-8');

// const uri = decrypt(MONGODB_URI, iv);
