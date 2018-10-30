
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function deepestChild() {
  var div = document.querySelector('#grand-node').querySelectorAll('div')
  return div[div.length - 1]
}
