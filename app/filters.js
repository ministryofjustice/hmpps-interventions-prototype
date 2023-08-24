const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('textInputWithLineBreaks', function (userText) {
    return userText.split(/[\r\n]/g).join('<br/>')
  }, {renderAsHtml: true})