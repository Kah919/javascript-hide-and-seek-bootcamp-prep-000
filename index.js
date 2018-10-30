
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

function increaseRankBy(n){
  const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
   for (let i = 0; i < upRank.length; i++){
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
    }
 }
