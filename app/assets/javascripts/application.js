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