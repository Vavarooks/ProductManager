const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});