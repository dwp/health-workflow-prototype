//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
// Add your routes here

module.exports = function(router) {



// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v1/task-type', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var taskType = req.session.data['task-type']

  // Check whether the variable matches a condition
  if (taskType == "hcp-review"){
    // Send user to next page
    res.redirect('/v1/task-summary/hcp-review')
  } else {
    // Send user to ineligible page
    res.redirect('/v1/task-summary/hcp-review')
  }

})

} // end module.exports
 