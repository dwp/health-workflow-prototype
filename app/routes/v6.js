//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
// Add your routes here

 

module.exports = function (router) {

  router.post('/task-type', function (req, res) {
    var taskType = req.session.data['taskType']

    if (taskType == "case-pre-checks"){
      res.redirect('/v6/pre-checks-summary')
    } else if (taskType == "request-medical-evidence"){
      res.redirect('/v6/request-medical-evidence-summary')
    } else if (taskType == "book-appointment"){
      res.redirect('/v6/book-appointment-summary')
    }
  })


  router.post('/my-tasks-none-1', function (req, res) {
    res.redirect('/v6/task-type')
  })

    router.post('/v6/update-status', function (req, res) {
    res.redirect('/v6/my-tasks-completed-request-medical-evidence')
  })


}


