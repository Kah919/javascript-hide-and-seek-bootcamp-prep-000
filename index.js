
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function deepestChild() {
  var div = document.querySelector('#grand-node').querySelector('div')
  for(var i = 0; i < div.length; i++) {
    if(i === div.length) {
      return div
    }
  }

}
