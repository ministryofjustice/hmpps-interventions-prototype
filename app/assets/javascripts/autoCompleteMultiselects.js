$(document).ready(function () {
  setUpAutoCompleteMultiselects();
});

function setUpAutoCompleteMultiselects() {
  const ids = ["needs", "risks"];
  for (i = 0; i < ids.length; i++) {
    const id = ids[i];

    element = document.getElementById(id);

    if (element !== null && element.dataset.autoComplete == "true") {
      new SlimSelect({ select: element });
    }
  }
}
