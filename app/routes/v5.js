//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
// Add your routes here

 

module.exports = function (router) {

  router.post('/task-type', function (req, res) {
    var taskType = req.session.data['taskType']

    if (taskType == "case-pre-checks"){
      res.redirect('/v5/pre-checks-summary')
    } else if (taskType == "request-medical-evidence"){
      res.redirect('/v5/request-medical-evidence-summary')
    } else if (taskType == "book-appointment"){
      res.redirect('/v5/book-appointment-summary')
    }
  })


  router.post('/my-tasks-none-1', function (req, res) {
    res.redirect('/v5/task-type')
  })

    router.post('/v5/update-status', function (req, res) {
    res.redirect('/v5/my-tasks-completed-request-medical-evidence')
  })


}


