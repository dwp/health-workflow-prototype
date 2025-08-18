//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
// Add your routes here

module.exports = function(router) {

router.get("/test/", (req, res) => {
  res.redirect('https://www.bbc.co.uk/news')
})
 

} // end module.exports
 