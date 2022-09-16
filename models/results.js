const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('results', {
  title: {
    type: String,
    Required: true
  },
  description: {
    type: String,
    Required: true
  },
  url: {
    type: String,
    Required: true
  },
  links: [
    {
      title: String,
      url: String
    }
  ]
})
