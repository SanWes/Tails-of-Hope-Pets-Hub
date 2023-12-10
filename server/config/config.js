require('dotenv').config();
const mongoose = require('mongoose');
const crypto = require('crypto');
const { DB_LINK, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, MONGODB_URI } = process.env;

mongoose.set('strictQuery', false);
// console.log(MONGODB_URI, typeof MONGODB_URI);

const urlDB = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?${DB_LINK}`;


//mongoose connection/config
mongoose.connect( urlDB, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to Database Success!"))
    .catch(err => console.log( err.message));




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


