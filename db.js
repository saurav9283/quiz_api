const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://saurav:saurav@cluster0.lydlfoa.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo;