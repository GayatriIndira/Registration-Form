const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/submit_form', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error to connecting MongoDB'));
  