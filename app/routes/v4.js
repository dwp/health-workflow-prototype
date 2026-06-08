//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
// Add your routes here

 

module.exports = function (router) {

  router.post('/task-type', function (req, res) {
    var taskType = req.session.data['taskType']

    if (taskType == "case-pre-checks"){
      res.redirect('/v4/pre-checks-summary')
    } else if (taskType == "request-medical-evidence"){
      res.redirect('/v4/request-medical-evidence-summary')
    } else if (taskType == "book-appointment"){
      res.redirect('/v4/book-appointment-summary')
    }
  })


  router.post('/my-tasks-none-1', function (req, res) {
    res.redirect('/v4/task-type')
  })

}


