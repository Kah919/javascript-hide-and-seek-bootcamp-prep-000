
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

function increaseRankBy(n) {
  var rank = document.querySelectorAll('.ranked-list').querySelectorAll('li');
  for(var i = 0; i < rank.length; i++) {

  }
}
