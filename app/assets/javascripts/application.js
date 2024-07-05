//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  window.GOVUKFrontend.initAll()
  })

  const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
  })
  
  env.addFilter('is_undefined', function(obj) {
    return typeof obj === 'undefined';
  });

