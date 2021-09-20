const mongoose = require('mongoose');
const db_name = "mern_beltexam_db";

//mongoose connection/config
mongoose.connect(`mongodb+srv://root:root@mern.6etyz.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${db_name} database`))
    
    .catch(err => console.log(`Something went wrong when connecting to the database: ${db_name} `, err));