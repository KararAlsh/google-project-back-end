// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')
// // Views
// let data = [
//   // num 1
//   {
//     title: 'JavaS tutorials',
//     description: 'The best JavaScript tutorials in the galaxy!',
//     url: 'https://www.w3schools.com',
//     links: [
//       {
//         title: 'JS for Beginners',
//         url: 'https://www.w3schools.com/js'
//       },
//       {
//         title: 'JS for the Web',
//         url: 'https://www.w3schools.com/js'
//       }
//     ]
//   },
//   // num 2
//   {
//     title: 'JS tutorials',
//     description: 'The best JavaScript tutorials in the galaxy!',
//     url: 'https://www.w3schools.com',
//     links: [
//       {
//         title: 'JS for Beginners',
//         url: 'https://www.w3schools.com/js'
//       },
//       {
//         title: 'JS for the Web',
//         url: 'https://www.w3schools.com/js'
//       }
//     ]
//   },
//   // num 3
//   {
//     title: 'JavaScript tutorials',
//     description: 'The best JavaScript tutorials in the galaxy!',
//     url: 'https://www.w3schools.com',
//     links: [
//       {
//         title: 'JS for Beginners',
//         url: 'https://www.w3schools.com/js'
//       },
//       {
//         title: 'JS for the Web',
//         url: 'https://www.w3schools.com/js'
//       }
//     ]
//   }
// ]
// // Functions
// const matches = (data, search) => {
//   let results = data.filter(element => element.title == search)
//   return results
// }

//  POST controller
router.post('/', async (req, res) => {
  let data = await Results.find({
    title: { $regex: req.body.search, $options: 'i' }
  })
  res.render('results', { data })
  // console.log(req.body)
  // res.render('results', { data: matches(data, req.body.search) })
})
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  res.render('results')
})
// Export
module.exports = router
