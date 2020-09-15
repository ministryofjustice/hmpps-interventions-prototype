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
});
