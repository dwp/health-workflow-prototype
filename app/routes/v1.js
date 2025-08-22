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

router.post('/v1/task-completion-confirmation', (req, res, next) => {
        res.redirect('/v1/my-tasks/task-completed-1');
});

router.post('/v1/my-tasks/my-tasks-1', (req, res, next) => {
        res.redirect('/v1/task-completion-confirmation');
});

router.post('/v1/task-summary/review-new-evidence-related', (req, res, next) => {
        res.redirect('/v1/my-tasks/my-tasks-2');
});


} // end module.exports
 