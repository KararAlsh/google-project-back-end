// Import Packages
const express = require('express')
const router = express.Router()

// Views
let data = [
  // num 1
  {
    title: 'JavaS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  // num 2
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  // num 3
  {
    title: 'JavaScript tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  }
]
// Create here a controller that accepts GET requests and renders the "search" page
const matches = (data, search) => {
  let results = data.filter(element => element.title == search)
  return results
}

//  POST controller
router.post('/', (req, res) => {
  console.log(req.body)
  res.render('results', { data: matches(data, req.body.search) })
})

router.get('/', (req, res) => {
  res.render('results')
})
// Export
module.exports = router
