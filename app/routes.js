//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Index branching

router.post('/start-prototype', function (req, res) {
  
  const prototype = req.session.data['prototype']
  req.session.data['prototype']=''

  if (prototype === 'prototype1') {
    res.redirect('/scr-index')
  } else {
    res.redirect('/chaffinch-index')
  }
})

// Branching in archive
router.post('/finding-and-organising/archive/v1/status-filter', function (req, res) {
  
  const status = req.session.data['status']
  req.session.data['status']=''

  if (status === 'unassigned') {
    res.redirect('/finding-and-organising/archive/v1/unassigned-list')
  } else if (status === 'in-review') {
      res.redirect('/finding-and-organising/archive/v1/review-list')
  } else if (status === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/v1/information-list')
  } else if (status === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/v1/evidence-list')
  } else if (status === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/v1/paperbased-list')
  } else if (status === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/v1/assessment-list')
  } else if (status === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/v1/decision-list')
  } else if (status === 'done') {
    res.redirect('/finding-and-organising/archive/v1/done-list')
  } else if (status === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/v1/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/v1/error')
  }
})

router.post('/finding-and-organising/archive/v2/status-filter', function (req, res) {
  
  const status = req.session.data['status']
  req.session.data['status']=''

  if (status === 'unassigned') {
    res.redirect('/finding-and-organising/archive/v2/unassigned-list')
  } else if (status === 'in-review') {
      res.redirect('/finding-and-organising/archive/v2/review-list')
  } else if (status === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/v2/information-list')
  } else if (status === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/v2/evidence-list')
  } else if (status === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/v2/paperbased-list')
  } else if (status === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/v2/assessment-list')
  } else if (status === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/v2/decision-list')
  } else if (status === 'done') {
    res.redirect('/finding-and-organising/archive/v2/done-list')
  } else if (status === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/v2/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/v2/claimant-detail')
  }
})

router.post('/finding-and-organising/archive/usertesting1/status-filter', function (req, res) {
  
  const status = req.session.data['status']
  req.session.data['status']=''

  if (status === 'unassigned') {
    res.redirect('/finding-and-organising/archive/usertesting1/unassigned-list')
  } else if (status === 'in-review') {
      res.redirect('/finding-and-organising/archive/usertesting1/review-list')
  } else if (status === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/usertesting1/information-list')
  } else if (status === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/usertesting1/evidence-list')
  } else if (status === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/usertesting1/paperbased-list')
  } else if (status === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/usertesting1/assessment-list')
  } else if (status === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/usertesting1/decision-list')
  } else if (status === 'done') {
    res.redirect('/finding-and-organising/archive/usertesting1/done-list')
  } else if (status === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/usertesting1/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting1/error')
  }
})

router.post('/finding-and-organising/archive/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/archive/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/archive/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/archive/v3/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/archive/v3/list-4')
  } else if (status2 === 'list-5') {
    res.redirect('/finding-and-organising/archive/v3/list-5')
  } else if (status2 === 'list-6') {
    res.redirect('/finding-and-organising/archive/v3/list-6')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/archive/v3/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/archive/v3/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/v3/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/v3/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/v3/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/v3/decision-list')
  } else if (status2 === 'done') {
    res.redirect('/finding-and-organising/archive/v3/done-list')
  } else if (status2 === 'withdrawn') {
    res.redirect('/finding-and-organising/archive/v3/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/archive/v3/error')
  }
})

router.post('/finding-and-organising/archive/v3/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/v3/new-list')
  } else {
    res.redirect('/finding-and-organising/archive/v3/error-list')
  }
})

router.post('/finding-and-organising/archive/v3/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/archive/v3/confirmation-list-removed')
  } else {
    res.redirect('/finding-and-organising/archive/v3/claimant-detail')
  }
})

//Archive usertesting2

router.post('/finding-and-organising/archive/usertesting2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/archive/usertesting2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-4')
  } else if (status2 === 'list-5') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-5')
  } else if (status2 === 'list-6') {
    res.redirect('/finding-and-organising/archive/usertesting2/list-6')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/archive/usertesting2/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/archive/usertesting2/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/archive/usertesting2/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/archive/usertesting2/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/archive/usertesting2/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/archive/usertesting2/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/archive/usertesting2/decision-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/error')
  }
})

router.post('/finding-and-organising/archive/usertesting2/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/usertesting2/new-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/error-list')
  }
})

router.post('/finding-and-organising/archive/usertesting2/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/archive/usertesting2/confirmation-list-removed')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/usertesting2/new-list-review')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/error-list')
  }
})

router.post('/finding-and-organising/archive/usertesting2/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/archive/usertesting2/assign-list')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/claimant-detail-assigned')
  }
})

router.post('/finding-and-organising/archive/usertesting2/remove-list-review', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/archive/usertesting2/assign-list-review')
  } else {
    res.redirect('/finding-and-organising/archive/usertesting2/claimant-detail-review')
  }
})

  //V4
  router.post('/finding-and-organising/archive/ustertesting3/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/finding-and-organising/archive/ustertesting3/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/finding-and-organising/archive/ustertesting3/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/finding-and-organising/archive/ustertesting3/list-3')
    } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/archive/ustertesting3/review-list')
    } else if (status2 === 'gathering-information') {
      res.redirect('/finding-and-organising/archive/ustertesting3/information-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/archive/ustertesting3/evidence-list')
    } else if (status2 === 'paper-based-review') {
      res.redirect('/finding-and-organising/archive/ustertesting3/paperbased-list')
    } else if (status2 === 'assessment-booked') {
      res.redirect('/finding-and-organising/archive/ustertesting3/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/finding-and-organising/archive/ustertesting3/decision-list')
    } else {
      res.redirect('/finding-and-organising/archive/ustertesting3/error')
    }
  })

router.post('/finding-and-organising/archive/ustertesting3/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/ustertesting3/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/ustertesting3/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/ustertesting3/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/ustertesting3/new-list')
  } else {
    res.redirect('/finding-and-organising/archive/ustertesting3/error-list')
  }
})

router.post('/finding-and-organising/archive/ustertesting3/unassigned-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/archive/ustertesting3/confirmation-list-jared')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/archive/ustertesting3/confirmation-list-zoe')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/archive/ustertesting3/confirmation-list-akhtar')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/archive/ustertesting3/new-list')
  } else {
    res.redirect('/finding-and-organising/archive/ustertesting3/error-list')
  }
})

//archive status iteration

router.post('/status-iteration/archive/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-iteration/archive/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-iteration/archive/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-iteration/archive/v1/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/status-iteration/archive/v1/assigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/status-iteration/archive/v1/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/status-iteration/archive/v1/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/status-iteration/archive/v1/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/status-iteration/archive/v1/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/status-iteration/archive/v1/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/status-iteration/archive/v1/decision-list')
  } else {
    res.redirect('/status-iteration/archive/v1/error')
  }
})

// Archive status alignment
router.post('/status-alignment/archive/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-alignment/archive/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-alignment/archive/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-alignment/archive/v1/list-3')
  } else {
    res.redirect('/status-alignment/archive/v1/error')
  }
})

//archive colab

router.post('/colab/archive/v1a/status-filter', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/colab/archive/v1a/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/colab/archive/v1a/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/colab/archive/v1a/list-3')
  } else {
    res.redirect('/colab/archive/v1a/error')
  }
})

//v1

router.post('/colab/archive/v1/status-filter', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/colab/archive/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/colab/archive/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/colab/archive/v1/list-3')
  } else {
    res.redirect('/colab/archive/v1/error')
  }
})

//v2

router.post('/colab/archive/v2/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/colab/archive/v2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/colab/archive/v2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/colab/archive/v2/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/colab/archive/v2/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/colab/archive/v2/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/colab/archive/v2/list-6')
  } else {
    res.redirect('/colab/archive/v2/error')
  }
})

router.post('/colab/archive/v2/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/colab/archive/v2/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/colab/archive/v2/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/colab/archive/v2/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/colab/archive/v2/new-list')
  } else {
    res.redirect('/colab/archive/v2/error-list')
  }
})

router.post('/colab/archive/v2/unassigned-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/colab/archive/v2/confirmation-list-jared')
  } else if (list === 'list2') {
    res.redirect('/colab/archive/v2/confirmation-list-zoe')
  } else if (list === 'list3') {
    res.redirect('/colab/archive/v2/confirmation-list-akhtar')
  } else if (list === 'new-list') {
    res.redirect('/colab/archive/v2/new-list')
  } else {
    res.redirect('/colab/archive/v2/error-list')
  }
})

//v3

router.post('/colab/archive/v3/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/colab/archive/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/colab/archive/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/colab/archive/v3/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/colab/archive/v3/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/colab/archive/v3/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/colab/archive/v3/list-6')
  } else {
    res.redirect('/colab/archive/v3/error')
  }
})

router.post('/colab/archive/v3/status-filter', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/colab/archive/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/colab/archive/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/colab/archive/v3/list-3')
  } else {
    res.redirect('/colab/archive/v3/error')
  }
})

//Archive Filter

router.post('/filter/archive/sort/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/filter/archive/sort/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/filter/archive/sort/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/filter/archive/sort/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/filter/archive/sort/list-4')
  } else if (status2 === 'hcp-review') {
    res.redirect('/filter/archive/sort/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/filter/archive/sort/list-6')
  } else {
    res.redirect('/filter/archive/sort/error')
  }
})

router.post('/filter/archive/v1b/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'new') {
    res.redirect('/filter/archive/v1b/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/filter/archive/v1b/list-5')
  } else if (status2 === 'hcp-review') {
    res.redirect('/filter/archive/v1b/list-6')
  } else {
    res.redirect('/filter/archive/v1b/error')
  }
})

router.post('/filter/archive/v1a/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'new') {
    res.redirect('/filter/archive/v1a/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/filter/archive/v1a/list-5')
  } else if (status2 === 'hcp-review') {
    res.redirect('/filter/archive/v1a/list-6')
  } else {
    res.redirect('/filter/archive/v1a/error')
  }
})

//End of archive

// Branching v1
router.post('/finding-and-organising/v1/status-filter', function (req, res) {
  
    const status = req.session.data['status']
    req.session.data['status']=''
  
    if (status === 'unassigned') {
      res.redirect('/finding-and-organising/v1/unassigned-list')
    } else if (status === 'in-review') {
        res.redirect('/finding-and-organising/v1/review-list')
    } else if (status === 'gathering-information') {
      res.redirect('/finding-and-organising/v1/information-list')
    } else if (status === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/v1/evidence-list')
    } else if (status === 'paper-based-review') {
      res.redirect('/finding-and-organising/v1/paperbased-list')
    } else if (status === 'assessment-booked') {
      res.redirect('/finding-and-organising/v1/assessment-list')
    } else if (status === 'awaiting-decision') {
      res.redirect('/finding-and-organising/v1/decision-list')
    } else {
      res.redirect('/finding-and-organising/v1/error')
    }
  })

  //Branching v2

  router.post('/finding-and-organising/v2/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/finding-and-organising/v2/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/finding-and-organising/v2/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/finding-and-organising/v2/list-3')
    } else if (status2 === 'list-4') {
      res.redirect('/finding-and-organising/v2/list-4')
    } else if (status2 === 'list-5') {
      res.redirect('/finding-and-organising/v2/list-5')
    } else if (status2 === 'list-6') {
      res.redirect('/finding-and-organising/v2/list-6')
    } else if (status2 === 'unassigned') {
      res.redirect('/finding-and-organising/v2/unassigned-list')
    } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/v2/review-list')
    } else if (status2 === 'gathering-information') {
      res.redirect('/finding-and-organising/v2/information-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/v2/evidence-list')
    } else if (status2 === 'paper-based-review') {
      res.redirect('/finding-and-organising/v2/paperbased-list')
    } else if (status2 === 'assessment-booked') {
      res.redirect('/finding-and-organising/v2/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/finding-and-organising/v2/decision-list')
    } else {
      res.redirect('/finding-and-organising/v2/error')
    }
  })

  router.post('/finding-and-organising/v2/assign-list', function (req, res) {
  
    const list = req.session.data['list']
    req.session.data['list']=''
  
    if (list === 'list1') {
      res.redirect('/finding-and-organising/v2/confirmation-list1')
    } else if (list === 'list2') {
      res.redirect('/finding-and-organising/v2/confirmation-list2')
    } else if (list === 'list3') {
      res.redirect('/finding-and-organising/v2/confirmation-list3')
    } else if (list === 'list4') {
      res.redirect('/finding-and-organising/v2/confirmation-list4')
    } else if (list === 'list5') {
      res.redirect('/finding-and-organising/v2/confirmation-list5')
    } else if (list === 'list6') {
      res.redirect('/finding-and-organising/v2/confirmation-list6')
    } else if (list === 'new-list') {
      res.redirect('/finding-and-organising/v2/new-list')
    } else {
      res.redirect('/finding-and-organising/v2/error-list')
    }
  })

  router.post('/finding-and-organising/v2/assign-list-review', function (req, res) {
  
    const list = req.session.data['list']
    req.session.data['list']=''
  
    if (list === 'list1') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list2') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list3') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list4') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list5') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'list6') {
      res.redirect('/finding-and-organising/v2/confirmation-list-removed')
    } else if (list === 'new-list') {
      res.redirect('/finding-and-organising/v2/new-list-review')
    } else {
      res.redirect('/finding-and-organising/v2/error-list')
    }
  })

  router.post('/finding-and-organising/v2/remove-list', function (req, res) {
  
    const removeList = req.session.data['remove-list']
    req.session.data['remove-list']=''
  
    if (removeList === 'yes') {
      res.redirect('/finding-and-organising/v2/assign-list')
    } else {
      res.redirect('/finding-and-organising/v2/claimant-detail-assigned')
    }
  })

  router.post('/finding-and-organising/v2/remove-list-review', function (req, res) {
  
    const removeList = req.session.data['remove-list']
    req.session.data['remove-list']=''
  
    if (removeList === 'yes') {
      res.redirect('/finding-and-organising/v2/assign-list-review')
    } else {
      res.redirect('/finding-and-organising/v2/claimant-detail-review')
    }
  })

  //V4
  router.post('/finding-and-organising/v4/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/finding-and-organising/v4/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/finding-and-organising/v4/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/finding-and-organising/v4/list-3')
    } else if (status2 === 'assigned') {
      res.redirect('/finding-and-organising/v4/assigned-list')
    } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/v4/review-list')
    } else if (status2 === 'gathering-information') {
      res.redirect('/finding-and-organising/v4/information-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/finding-and-organising/v4/evidence-list')
    } else if (status2 === 'paper-based-review') {
      res.redirect('/finding-and-organising/v4/paperbased-list')
    } else if (status2 === 'assessment-booked') {
      res.redirect('/finding-and-organising/v4/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/finding-and-organising/v4/decision-list')
    } else {
      res.redirect('/finding-and-organising/v4/error')
    }
  })

router.post('/finding-and-organising/v4/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/v4/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/v4/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/v4/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/v4/new-list')
  } else {
    res.redirect('/finding-and-organising/v4/error-list')
  }
})

router.post('/finding-and-organising/v4/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/v4/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/v4/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/v4/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/v4/new-list')
  } else {
    res.redirect('/finding-and-organising/v4/error-list')
  }
})

router.post('/finding-and-organising/v4/unassigned-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/v4/confirmation-list-jared')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/v4/confirmation-list-zoe')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/v4/confirmation-list-akhtar')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/v4/new-list')
  } else {
    res.redirect('/finding-and-organising/v4/error-list')
  }
})

  // Status Iteration
  router.post('/status-iteration/v1/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/status-iteration/v1/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/status-iteration/v1/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/status-iteration/v1/list-3')
    } else if (status2 === 'assigned') {
      res.redirect('/status-iteration/v1/assigned-list')
    } else if (status2 === 'in-review') {
      res.redirect('/status-iteration/v1/review-list')
    } else if (status2 === 'gathering-information') {
      res.redirect('/status-iteration/v1/information-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/status-iteration/v1/evidence-list')
    } else if (status2 === 'paper-based-review') {
      res.redirect('/status-iteration/v1/paperbased-list')
    } else if (status2 === 'assessment-booked') {
      res.redirect('/status-iteration/v1/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/status-iteration/v1/decision-list')
    } else {
      res.redirect('/status-iteration/v1/error')
    }
  })

  router.post('/status-iteration/v2/status-filter2', function (req, res) {
  
    const status2 = req.session.data['status2']
    req.session.data['status2']=''
  
    if (status2 === 'list-1') {
      res.redirect('/status-iteration/v2/list-1')
    } else if (status2 === 'list-2') {
        res.redirect('/status-iteration/v2/list-2')
    } else if (status2 === 'list-3') {
      res.redirect('/status-iteration/v2/list-3')
    } else if (status2 === 'assigned') {
      res.redirect('/status-iteration/v2/assigned-list')
    } else if (status2 === 'in-review') {
      res.redirect('/status-iteration/v2/review-list')
    } else if (status2 === 'awaiting-evidence') {
      res.redirect('/status-iteration/v2/evidence-list')
    } else if (status2 === 'assessment-ready') {
      res.redirect('/status-iteration/v2/assessment-list')
    } else if (status2 === 'awaiting-decision') {
      res.redirect('/status-iteration/v2/decision-list')
    } else {
      res.redirect('/status-iteration/v2/error')
    }
  })

router.post('/status-iteration/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-iteration/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-iteration/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-iteration/v3/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/status-iteration/v3/assigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/status-iteration/v3/review-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/status-iteration/v3/evidence-list')
  } else if (status2 === 'assessment-ready') {
    res.redirect('/status-iteration/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/status-iteration/v3/decision-list')
  } else {
    res.redirect('/status-iteration/v3/error')
  }
})

router.post('/status-iteration/v4/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-iteration/v4/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-iteration/v4/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-iteration/v4/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/status-iteration/v4/assigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/status-iteration/v4/review-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/status-iteration/v4/evidence-list')
  } else if (status2 === 'assessment-ready') {
    res.redirect('/status-iteration/v4/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/status-iteration/v4/decision-list')
  } else {
    res.redirect('/status-iteration/v4/error')
  }
})

// Status alignment

router.post('/status-alignment/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-alignment/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-alignment/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-alignment/v1/list-3')
  }else {
    res.redirect('/status-alignment/v1/error')
  }
})

router.post('/status-alignment/v2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-alignment/v2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-alignment/v2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-alignment/v2/list-3')
  }else {
    res.redirect('/status-alignment/v2/error')
  }
})

router.post('/status-alignment/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-alignment/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-alignment/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-alignment/v3/list-3')
  }else {
    res.redirect('/status-alignment/v3/error')
  }
})

router.post('/status-alignment/v4/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-alignment/v4/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-alignment/v4/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-alignment/v4/list-3')
  }else {
    res.redirect('/status-alignment/v4/error')
  }
})

// Next action due
router.post('/next-action/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/next-action/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/next-action/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/next-action/v1/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/next-action/v1/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/next-action/v1/list-5')
  } else {
    res.redirect('/next-action/v1/error')
  }
})

router.post('/next-action/v2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/next-action/v2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/next-action/v2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/next-action/v2/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/next-action/v2/list-4')
  } else {
    res.redirect('/next-action/v2/error')
  }
})

router.post('/next-action/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/next-action/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/next-action/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/next-action/v3/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/next-action/v3/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/next-action/v3/list-5')
  } else {
    res.redirect('/next-action/v3/error')
  }
})

router.post('/next-action/v4/status-filter', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/next-action/v4/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/next-action/v4/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/next-action/v4/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/next-action/v4/list-4')
  } else if (status2 === 'questionnaire-received') {
    res.redirect('/next-action/v4/list-6')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/next-action/v4/list-5')
  } else {
    res.redirect('/next-action/v4/error')
  }
})

// Filter

router.post('/filter/v1c/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'new') {
    res.redirect('/filter/v1c/list-4')
  } else if (status2 === 'hcp-review') {
    res.redirect('/filter/v1c/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/filter/v1c/list-6')
  } else {
    res.redirect('/filter/v1c/error')
  }
})

router.post('/filter/v2/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'new') {
    res.redirect('/filter/v2/list-4')
  } else if (status2 === 'hcp-review') {
    res.redirect('/filter/v2/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/filter/v2/list-6')
  } else {
    res.redirect('/filter/v2/error')
  }
})

router.post('/filter/v3/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/filter/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/filter/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/filter/v3/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/filter/v3/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/filter/v3/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/filter/v3/list-6')
  } else {
    res.redirect('/filter/v3/error')
  }
})

router.post('/filter/v4/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/filter/v4/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/filter/v4/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/filter/v4/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/filter/v4/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/filter/v4/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/filter/v4/list-6')
  } else {
    res.redirect('/filter/v4/error')
  }
})

router.post('/filter/screen-width/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/filter/screen-width/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/filter/screen-width/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/filter/screen-width/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/filter/screen-width/list-4')
  } else if (status2 === 'hcp-review') {
    res.redirect('/filter/screen-width/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/filter/screen-width/list-6')
  } else {
    res.redirect('/filter/screen-width/error')
  }
})

// Collaboration

//v4

router.post('/colab/v4/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/colab/v4/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/colab/v4/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/colab/v4/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/colab/v4/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/colab/v4/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/colab/v4/list-6')
  } else {
    res.redirect('/colab/v4/error')
  }
})

router.post('/colab/v4/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/colab/v4/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/colab/v4/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/colab/v4/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/colab/v4/new-list')
  } else {
    res.redirect('/colab/v4/error-list')
  }
})

router.post('/colab/v4/unassigned-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/colab/v4/confirmation-list-jared')
  } else if (list === 'list2') {
    res.redirect('/colab/v4/confirmation-list-zoe')
  } else if (list === 'list3') {
    res.redirect('/colab/v4/confirmation-list-akhtar')
  } else if (list === 'new-list') {
    res.redirect('/colab/v4/new-list')
  } else {
    res.redirect('/colab/v4/error-list')
  }
})


//Richer claimant info

//V1
router.post('/richer-claimant-info/v1/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/richer-claimant-info/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/richer-claimant-info/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/richer-claimant-info/v1/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/richer-claimant-info/v1/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/richer-claimant-info/v1/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/richer-claimant-info/v1/list-6')
  } else {
    res.redirect('/richer-claimant-info/v1/error')
  }
})

router.post('/richer-claimant-info/v1/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/richer-claimant-info/v1/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/richer-claimant-info/v1/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/richer-claimant-info/v1/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/richer-claimant-info/v1/new-list')
  } else {
    res.redirect('/richer-claimant-info/v1/error-list')
  }
})

router.post('/richer-claimant-info/v1/unassigned-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/richer-claimant-info/v1/confirmation-list-jared')
  } else if (list === 'list2') {
    res.redirect('/richer-claimant-info/v1/confirmation-list-zoe')
  } else if (list === 'list3') {
    res.redirect('/richer-claimant-info/v1/confirmation-list-akhtar')
  } else if (list === 'new-list') {
    res.redirect('/richer-claimant-info/v1/new-list')
  } else {
    res.redirect('/richer-claimant-info/v1/error-list')
  }
})

//V2
router.post('/richer-claimant-info/v2/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/richer-claimant-info/v2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/richer-claimant-info/v2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/richer-claimant-info/v2/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/richer-claimant-info/v2/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/richer-claimant-info/v2/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/richer-claimant-info/v2/list-6')
  } else {
    res.redirect('/richer-claimant-info/v2/error')
  }
})

router.post('/richer-claimant-info/v2/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/richer-claimant-info/v2/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/richer-claimant-info/v2/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/richer-claimant-info/v2/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/richer-claimant-info/v2/new-list')
  } else {
    res.redirect('/richer-claimant-info/v2/error-list')
  }
})

router.post('/richer-claimant-info/v2/unassigned-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/richer-claimant-info/v2/confirmation-list-jared')
  } else if (list === 'list2') {
    res.redirect('/richer-claimant-info/v2/confirmation-list-zoe')
  } else if (list === 'list3') {
    res.redirect('/richer-claimant-info/v2/confirmation-list-akhtar')
  } else if (list === 'new-list') {
    res.redirect('/richer-claimant-info/v2/new-list')
  } else {
    res.redirect('/richer-claimant-info/v2/error-list')
  }
})

//V2
router.post('/richer-claimant-info/v3/status-filter', function (req, res) {
  
  const status2 = req.session.data['status']
  req.session.data['status']=''

  if (status2 === 'list-1') {
    res.redirect('/richer-claimant-info/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/richer-claimant-info/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/richer-claimant-info/v3/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/richer-claimant-info/v3/list-4')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/richer-claimant-info/v3/list-5')
  } else if (status2 === 'report-ready') {
    res.redirect('/richer-claimant-info/v3/list-6')
  } else {
    res.redirect('/richer-claimant-info/v3/error')
  }
})

router.post('/richer-claimant-info/v3/assign-list-review', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/richer-claimant-info/v3/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/richer-claimant-info/v3/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/richer-claimant-info/v3/confirmation-list3')
  } else if (list === 'new-list') {
    res.redirect('/richer-claimant-info/v3/new-list')
  } else {
    res.redirect('/richer-claimant-info/v3/error-list')
  }
})

router.post('/richer-claimant-info/v3/unassigned-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/richer-claimant-info/v3/confirmation-list-jared')
  } else if (list === 'list2') {
    res.redirect('/richer-claimant-info/v3/confirmation-list-zoe')
  } else if (list === 'list3') {
    res.redirect('/richer-claimant-info/v3/confirmation-list-akhtar')
  } else if (list === 'new-list') {
    res.redirect('/richer-claimant-info/v3/new-list')
  } else {
    res.redirect('/richer-claimant-info/v3/error-list')
  }
})


//Branching bluesky

//V1
router.post('/finding-and-organising/bluesky/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/bluesky/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/bluesky/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/bluesky/v1/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/bluesky/v1/list-4')
  } else if (status2 === 'list-5') {
    res.redirect('/finding-and-organising/bluesky/v1/list-5')
  } else if (status2 === 'list-6') {
    res.redirect('/finding-and-organising/bluesky/v1/list-6')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/bluesky/v1/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/bluesky/v1/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/bluesky/v1/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/bluesky/v1/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/bluesky/v1/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/bluesky/v1/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/bluesky/v1/decision-list')
  } else if (status2 === 'done') {
    res.redirect('/finding-and-organising/bluesky/v1/done-list')
  } else if (status2 === 'withdrawn') {
    res.redirect('/finding-and-organising/bluesky/v1/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v1/error')
  }
})

router.post('/finding-and-organising/bluesky/v1/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/bluesky/v1/new-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v1/error-list')
  }
})

router.post('/finding-and-organising/bluesky/v1/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/bluesky/v1/confirmation-list-removed')
  } else {
    res.redirect('/finding-and-organising/bluesky/v1/claimant-detail')
  }
})

// V2
router.post('/finding-and-organising/bluesky/v2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/bluesky/v2/unassigned-list')
  } else if (status2 === 'in-review') {
      res.redirect('/finding-and-organising/bluesky/v2/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/bluesky/v2/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/bluesky/v2/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/bluesky/v2/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/bluesky/v2/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/bluesky/v2/decision-list')
  } else if (status2 === 'done') {
    res.redirect('/finding-and-organising/bluesky/v2/done-list')
  } else if (status2 === 'withdrawn') {
    res.redirect('/finding-and-organising/bluesky/v2/withdrawn-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v2/error')
  }
})

router.post('/finding-and-organising/bluesky/v2/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list4')
  } else if (list === 'list5') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list5')
  } else if (list === 'list6') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list6')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/bluesky/v2/new-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v2/error-list')
  }
})

router.post('/finding-and-organising/bluesky/v2/add-to-list', function (req, res) {

  const addToList = req.session.data['add-to-list']
  req.session.data['add-to-list']=''

  if (addToList === 'yes') {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list-assigned')
  } else {
    res.redirect('/finding-and-organising/bluesky/v2/confirmation-list')
  }
})

//V3
router.post('/finding-and-organising/bluesky/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/finding-and-organising/bluesky/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/finding-and-organising/bluesky/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/finding-and-organising/bluesky/v3/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/finding-and-organising/bluesky/v3/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/finding-and-organising/bluesky/v3/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/finding-and-organising/bluesky/v3/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/finding-and-organising/bluesky/v3/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/finding-and-organising/bluesky/v3/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/finding-and-organising/bluesky/v3/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/finding-and-organising/bluesky/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/finding-and-organising/bluesky/v3/decision-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v3/error')
  }
})

router.post('/finding-and-organising/bluesky/v3/assign-list', function (req, res) {

  const list = req.session.data['list']
  req.session.data['list']=''

  if (list === 'list1') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list1')
  } else if (list === 'list2') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list2')
  } else if (list === 'list3') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list3')
  } else if (list === 'list4') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list4')
  } else if (list === 'new-list') {
    res.redirect('/finding-and-organising/bluesky/v3/new-list')
  } else {
    res.redirect('/finding-and-organising/bluesky/v3/error-list')
  }
})

router.post('/finding-and-organising/bluesky/v3/remove-list', function (req, res) {

  const removeList = req.session.data['remove-list']
  req.session.data['remove-list']=''

  if (removeList === 'yes') {
    res.redirect('/finding-and-organising/bluesky/v3/confirmation-list-removed')
  } else {
    res.redirect('/finding-and-organising/bluesky/v3/claimant-detail')
  }
})

router.post('/finding-and-organising/bluesky/v3/location', function (req, res) {
  const removeList = req.session.data['location']
  req.session.data['location']=''

  if (removeList === 'tresco') {
    res.redirect('/finding-and-organising/bluesky/v3/landing-page')
  } else {
    res.redirect('#')
  }
})

//status iteration bluesky

router.post('/status-iteration/bluesky/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-iteration/bluesky/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-iteration/bluesky/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-iteration/bluesky/v1/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/status-iteration/bluesky/v1/assigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/status-iteration/bluesky/v1/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/status-iteration/bluesky/v1/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/status-iteration/bluesky/v1/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/status-iteration/bluesky/v1/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/status-iteration/bluesky/v1/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/status-iteration/bluesky/v1/decision-list')
  } else {
    res.redirect('/status-iteration/bluesky/v1/error')
  }
})

router.post('/status-iteration/bluesky/v2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-iteration/bluesky/v2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-iteration/bluesky/v2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-iteration/bluesky/v2/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/status-iteration/bluesky/v2/assigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/status-iteration/bluesky/v2/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/status-iteration/bluesky/v2/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/status-iteration/bluesky/v2/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/status-iteration/bluesky/v2/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/status-iteration/bluesky/v2/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/status-iteration/bluesky/v2/decision-list')
  } else {
    res.redirect('/status-iteration/bluesky/v2/error')
  }
})

router.post('/status-iteration/bluesky/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/status-iteration/bluesky/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/status-iteration/bluesky/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/status-iteration/bluesky/v3/list-3')
  } else if (status2 === 'assigned') {
    res.redirect('/status-iteration/bluesky/v3/assigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/status-iteration/bluesky/v3/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/status-iteration/bluesky/v3/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/status-iteration/bluesky/v3/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/status-iteration/bluesky/v3/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/status-iteration/bluesky/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/status-iteration/bluesky/v3/decision-list')
  } else {
    res.redirect('/status-iteration/bluesky/v3/error')
  }
})


//Branching Claimant Case

//V1
router.post('/claimant-case/v1/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v1/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v1/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v1/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v1/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v1/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v1/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v1/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v1/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v1/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v1/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v1/decision-list')
  } else {
    res.redirect('/claimant-case/v1/error')
  }
})

//V2
router.post('/claimant-case/v2/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v2/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v2/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v2/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v2/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v2/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v2/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v2/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v2/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v2/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v2/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v2/decision-list')
  } else {
    res.redirect('/claimant-case/v2/error')
  }
})

//V3
router.post('/claimant-case/v3/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v3/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v3/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v3/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v3/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v3/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v3/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v3/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v3/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v3/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v3/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v3/decision-list')
  } else {
    res.redirect('/claimant-case/v3/error')
  }
})

//V4
router.post('/claimant-case/v4/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v4/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v4/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v4/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v4/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v4/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v4/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v4/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v4/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v4/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v4/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v4/decision-list')
  } else {
    res.redirect('/claimant-case/v4/error')
  }
})

//V5
router.post('/claimant-case/v5/status-filter2', function (req, res) {
  
  const status2 = req.session.data['status2']
  req.session.data['status2']=''

  if (status2 === 'list-1') {
    res.redirect('/claimant-case/v5/list-1')
  } else if (status2 === 'list-2') {
      res.redirect('/claimant-case/v5/list-2')
  } else if (status2 === 'list-3') {
    res.redirect('/claimant-case/v5/list-3')
  } else if (status2 === 'list-4') {
    res.redirect('/claimant-case/v5/list-4')
  } else if (status2 === 'unassigned') {
    res.redirect('/claimant-case/v5/unassigned-list')
  } else if (status2 === 'in-review') {
    res.redirect('/claimant-case/v5/review-list')
  } else if (status2 === 'gathering-information') {
    res.redirect('/claimant-case/v5/information-list')
  } else if (status2 === 'awaiting-evidence') {
    res.redirect('/claimant-case/v5/evidence-list')
  } else if (status2 === 'paper-based-review') {
    res.redirect('/claimant-case/v5/paperbased-list')
  } else if (status2 === 'assessment-booked') {
    res.redirect('/claimant-case/v5/assessment-list')
  } else if (status2 === 'awaiting-decision') {
    res.redirect('/claimant-case/v5/decision-list')
  } else {
    res.redirect('/claimant-case/v5/error')
  }
})


// Jen routing


//V4
router.post('/richer-claimant-info/v4/status-filter', function (req, res) {
  
  const view = req.session.data['view']
  req.session.data['view']=''

  if (view === 'caseload') {
    res.redirect('/richer-claimant-info/v4/list-1')
  } 
   else {
    res.redirect('/richer-claimant-info/v4/list-4')
  }
})


//V4
router.post('/richer-claimant-info/v5/status-filter', function (req, res) {
  
  const view = req.session.data['view']
  req.session.data['view']=''

  if (view === 'caseload') {
    res.redirect('/richer-claimant-info/v5/list-1')
  } 
   else {
    res.redirect('/richer-claimant-info/v5/list-4')
  }
})


module.exports = router


// v5 address Branching
router.post('/richer-claimant-info/v5/personal-address-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v5/change-singular/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v5/pip-claimant-detail-updated')
  }
})

//v8 routes
router.post('/richer-claimant-info/v8/change-singular/additional-needs', function(req, res) {
    
  res.redirect('/richer-claimant-info/v8/pip-claimant-detail-updated-as')
 })

 router.post('/richer-claimant-info/v8/change-singular/med-evidence', function(req, res) {
    
  res.redirect('/richer-claimant-info/v8/pip-claimant-detail-updated-medev')
 })

 router.post('/richer-claimant-info/v8/change-singular/behaviour', function(req, res) {
    
  res.redirect('/richer-claimant-info/v8/pip-claimant-detail-updated-behaviour')
 })

 router.post('/richer-claimant-info/v8/change-singular/mental-health', function(req, res) {
    
  res.redirect('/richer-claimant-info/v8/pip-claimant-detail-updated-mh')
 })

module.exports = router



//

//v10 routes
router.post('/richer-claimant-info/v10/change-singular/additional-needs', function(req, res) {
    
  res.redirect('/richer-claimant-info/v10/pip-claimant-detail-updated-as')
 })

 router.post('/richer-claimant-info/v10/change-singular/med-evidence', function(req, res) {
    
  res.redirect('/richer-claimant-info/v10/pip-claimant-detail-updated-medev')
 })

 router.post('/richer-claimant-info/v10/change-singular/behaviour', function(req, res) {
    
  res.redirect('/richer-claimant-info/v10/pip-claimant-detail-updated-behaviour')
 })

 router.post('/richer-claimant-info/v10/change-singular/mental-health', function(req, res) {
    
  res.redirect('/richer-claimant-info/v10/pip-claimant-detail-updated-mh')
 })

module.exports = router


//v11 routes
router.post('/richer-claimant-info/v11/change-singular/additional-needs', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/pip-claimant-detail-updated-as')
 })

 router.post('/richer-claimant-info/v11/change-singular/med-evidence', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/pip-claimant-detail-updated-medev')
 })

 router.post('/richer-claimant-info/v11/change-singular/behaviour', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/pip-case-details-updated-behaviour')
 })

 router.post('/richer-claimant-info/v11/change-singular/mental-health', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/pip-claimant-detail-updated-mh')
 })

 router.post('/richer-claimant-info/v11/change-singular/consent-gp', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/pip-case-details-updated-consent')
 })

 router.post('/richer-claimant-info/v11/change-singular/important-end-of-life', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/pip-case-details-updated-endoflife')
 })

 router.post('/richer-claimant-info/v11/change-singular/important-support', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/pip-case-details-updated-as')
 })

 //v11 routes - wca specific

 router.post('/richer-claimant-info/v11/change-singular/wca/behaviour', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/wca-claimant-detail-updated-behaviour')
 })

 router.post('/richer-claimant-info/v11/change-singular/wca/consent-gp', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/wca-case-details-updated-consent')
 })

 router.post('/richer-claimant-info/v11/change-singular/wca/mental-health', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/wca-case-details-updated-mh')
 })


 router.post('/richer-claimant-info/v11/change-singular/wca/important-end-of-life', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/wca-case-details-updated-endoflife')
 })

 router.post('/richer-claimant-info/v11/change-singular/wca/interpreter', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/wca-claimant-detail-updated-interpreter')
 })

 router.post('/richer-claimant-info/v11/change-singular/wca/interpreter-remove', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/wca-claimant-detail-updated-interpreter-removed')
 })

 router.post('/richer-claimant-info/v11/change-singular/wca/personal-home-remove', function(req, res) {
    
  res.redirect('/richer-claimant-info/v11/wca-claimant-detail-updated-per')
 })


module.exports = router




// v9 address Branching

//scenario 1 
router.post('/richer-claimant-info/v9/corres', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9/sc1-questionnaire/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9/sc1-questionnaire/interrupt-page')
  }
})




//scenario 2
router.post('/richer-claimant-info/v9/corres2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9/sc2-hcp-review/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9/sc2-hcp-review/interrupt-page')
  }
})



//scenario 3
router.post('/richer-claimant-info/v9/corres3', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9/sc3-medical-evidence/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9/sc3-medical-evidence/pip-claimant-detail-updated')
  }
})





//scenario 3
router.post('/richer-claimant-info/v9/pip-alerts', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const pipalert = req.session.data['pip-alert']

  if (pipalert === 'yes'){
    res.redirect('/richer-claimant-info/v9/sc3-medical-evidence/alert-confirmation')
  } else {
    res.redirect('/richer-claimant-info/v9/sc3-medical-evidence/pip-alerts')
  }
})




//scenario 4
router.post('/richer-claimant-info/v9/corres4', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9/sc4-assessment-booked/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9/sc4-assessment-booked/pip-claimant-detail-updated')
  }
})




// v9.1 address Branching

//scenario 1 
router.post('/richer-claimant-info/v9-1/corres', function (req, res) {

  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-1/sc1-questionnaire/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-1/sc1-questionnaire/pip-claimant-detail-updated')
  }
})




//scenario 2
router.post('/richer-claimant-info/v9-1/corres2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-1/sc2-hcp-review/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-1/sc2-hcp-review/interrupt-page')
  }
})



//scenario 3
router.post('/richer-claimant-info/v9-1/corres3', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-1/sc3-medical-evidence/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-1/sc3-medical-evidence/pip-claimant-detail-updated')
  }
})





//scenario 3
router.post('/richer-claimant-info/v9-1/pip-alerts', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const pipalert = req.session.data['pip-alert']

  if (pipalert === 'yes'){
    res.redirect('/richer-claimant-info/v9-1/sc3-medical-evidence/alert-confirmation')
  } else {
    res.redirect('/richer-claimant-info/v9-1/sc3-medical-evidence/pip-alerts')
  }
})




//scenario 4
router.post('/richer-claimant-info/v9-1/corres4', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-1/sc4-assessment-booked/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-1/sc4-assessment-booked/pip-claimant-detail-updated')
  }
})



// v9.2 address Branching

//scenario 1 
router.post('/richer-claimant-info/v9-2/corres', function (req, res) {

  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-2/sc1-questionnaire/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-2/sc1-questionnaire/pip-claimant-detail-updated')
  }
})




//scenario 2
router.post('/richer-claimant-info/v9-2/corres2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-2/sc2-hcp-review/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-2/sc2-hcp-review/interrupt-page')
  }
})



//scenario 3
router.post('/richer-claimant-info/v9-2/corres3', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-2/sc3-medical-evidence/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-2/sc3-medical-evidence/pip-claimant-detail-updated')
  }
})





//scenario 3
router.post('/richer-claimant-info/v9-2/pip-alerts', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const pipalert = req.session.data['pip-alert']

  if (pipalert === 'yes'){
    res.redirect('/richer-claimant-info/v9-2/sc3-medical-evidence/alert-confirmation')
  } else {
    res.redirect('/richer-claimant-info/v9-2/sc3-medical-evidence/pip-alerts')
  }
})




//scenario 4
router.post('/richer-claimant-info/v9-2/corres4', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const corresaddress = req.session.data['corres-address']

  if (corresaddress === 'false') {
    res.redirect('/richer-claimant-info/v9-2/sc4-assessment-booked/change-address/correspondence-find-address')
  } else {
    res.redirect('/richer-claimant-info/v9-2/sc4-assessment-booked/pip-claimant-detail-updated')
  }
})