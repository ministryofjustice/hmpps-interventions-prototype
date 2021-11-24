/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info("GOV.UK Prototype Kit - do not use for production");
}

function handleTextAreaSubmit(textAreaId, submitButtonId) {
  const textArea = document.getElementById(textAreaId);
  if (!textArea) {
    return;
  }

  if (textArea.value === "") {
    document.getElementById(submitButtonId).disabled = true;
  } else {
    document.getElementById(submitButtonId).disabled = false;
  }
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
  handleTextAreaSubmit(
    "accommodation-desired-outcomes-info",
    "accommodation-desired-outcomes-save"
  );
  handleTextAreaSubmit(
    "accommodation-complexity-info",
    "accommodation-complexity-save"
  );
  handleTextAreaSubmit(
    "social-inclusion-complexity-info",
    "social-inclusion-complexity-info-save"
  );
  handleTextAreaSubmit(
    "social-inclusion-desired-outcomes-info",
    "social-inclusion-desired-outcomes-save"
  );

  setUpAutoCompleteMultiselects();
});

function setUpAutoCompleteMultiselects() {
  const ids = ["needs", "risks"];
  for (i = 0; i < ids.length; i++) {
    const id = ids[i];

    element = document.getElementById(id);

    if (element !== null && element.dataset.autoComplete == "true") {
      new SlimSelect({select: element});
    }
  }
}

// test validation without requiring server side validation

const validator = new MOJFrontend.FormValidator(document.forms[0]);
validator.addValidator('email', [{
  method: function(field) {
    return field.value.trim().length > 0;
  },
  message: 'Enter your email address'
}, {
  method: function(field) {
    return (field.value.indexOf('@') > -1);
  },
  message: 'You need to enter the ‘at’ symbol in your email address'
}]);
validator.addValidator('password', [{
  method: function(field) {
    return field.value.trim().length > 0;
  },
  message: 'Enter your password'
}, {
  method: function(field) {
    return field.value.length > 8;
  },
  message: 'Your password must contain at least 8 characters'
}, {
  method: function(field) {
    return /\d/.test(field.value);
  },
  message: 'Your password must contain at least one number'
}]);
validator.addValidator('location', [{
  method: function(field) {
    return field.value.trim().length > 0;
  },
  message: 'Select your location'
}]);
validator.addValidator('dob-day', [{
  method: function(field, params) {
    return (params.day.value.length !== 0 && params.month.value.length !== 0 && params.year.value !== 0);
  },
  message: 'Enter your date of birth',
  params: {
    day: document.getElementById('dob-day'),
    month: document.getElementById('dob-month'),
    year: document.getElementById('dob-year')
  }
}, {
  method: function(field, params) {
    var d = new Date(parseInt(params.year.value, 10), parseInt(params.month.value, 10) - 1, parseInt(params.day.value, 10) - 1);
    return d instanceof Date && !isNaN(d);
  },
  message: 'Enter a valid date of birth',
  params: {
    day: document.getElementById('dob-day'),
    month: document.getElementById('dob-month'),
    year: document.getElementById('dob-year')
  }
}]);

//Filter

function locationFilter() {

  //Create a variable to determine whether listing should be shown or not
  var showListing;

  //Create an array of checked locations
  var checkedLocations = $('.region-checkboxes input:checked').map(function(){
    return $(this).val();
  }).get();

  //Create an array of checked genders
  var checkedGenders = $('.gender-checkboxes input:checked').map(function(){
    return $(this).val();
  }).get();ç

  //Hide all listings
  $('.listing').hide();

  //Loop through each element that has the locations-list class
  $('.listing').each(function(i, obj) {

    var matchesLocationFilter = false;
    var matchesGenderFilter = false;
    

    if(checkedLocations.length === 0) {
      matchesLocationFilter = true;
    } else {

      //Create a variable from its data-locations attribute. This is a list of locations. Turn that into an array.
      var locations = $(this).find('.locations-list').attr('data-locations');
      var locationArray = locations.split(", ");

      //Check if any element in the array matches any element in the checked checkboxes array. If so, hide the closest element with the listing class.
      if (checkedLocations.some((val) => locationArray.indexOf(val) !== -1)) {
        matchesLocationFilter = true;
      };
    };

    if(checkedGenders.length === 0) {
      matchesGenderFilter = true;
    } else {

      var genders = $(this).find('.genders').attr('data-genders');
      var genderArray = genders.split(", ");

      if (checkedGenders.sort().join(',') === genderArray.sort().join(',')) {
        matchesGenderFilter = true;
      };
    };

    if(matchesLocationFilter == true && matchesGenderFilter == true) {
      $(this).show();
    } else {
      $(this).hide();
    };
    
  });

  //Update the number of results
  var numResults = $('.listing:visible').length;
  $('#results-number').html(numResults);

  //Scroll to top
  window.scrollTo(0, 0);


};



// function locationFilter() {

//   //Create an array of the values of checked checkboxes
//   var checkedLocations = $('.region-checkboxes input:checked').map(function(){
//     return $(this).val();
//   }).get();

//   if(checkedLocations.length === 0) {
//     $('.listing').show();
//   } else {

//   //Hide all listings
//   $('.listing').hide();

//   //Loop through each element that has the locations-list class
//   $('.locations-list').each(function(i, obj) {

//     //Create a variable from its data-locations attribute. This is a list of locations. Turn that into an array.
//     var locations = $(this).attr('data-locations');
//     var locationArray = locations.split(", ");
    
//     //Check if any element in the array matches any element in the checked checkboxes array. If so, hide the closest element with the listing class.
//     if (checkedLocations.some((val) => locationArray.indexOf(val) !== -1)) {
//       $(this).closest('.listing').show();
//     };
//   });
// }