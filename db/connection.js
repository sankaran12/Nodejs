const mongoose = require('mongoose');

const url = `mongodb+srv://mdnriyas:${process.env.DB_PASSWORD}@cluster0.asx8imp.mongodb.net/`;
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))