const govukPrototypeKit = require('govuk-prototype-kit');
const addFilter = govukPrototypeKit.views.addFilter;
// Add your filters here
let filters = {}; // Define filters as an object
filters.toMonth = function(x) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (x > 0 && x <= 12) {
        return months[x - 1]; // returns the month as per x
    } else {
        return ''; // Handle invalid month
    }
};
filters.toMoney = function(x) {
    if (x !== undefined && !isNaN(parseFloat(x))) {
        return "£" + parseFloat(x).toFixed(2);
    } else {
        return 'Invalid amount'; // Handle invalid or missing amount
    }
};
// Register the filters
addFilter('toMonth', filters.toMonth);
addFilter('toMoney', filters.toMoney);
module.exports = filters;