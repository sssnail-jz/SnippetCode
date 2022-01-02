'use strict'

var generateTranslate = function generateTranslate (el, e, value) {
  el.style.transform =
    'translate(' + e.clientX * value + 'px, ' + e.clientY * value + 'px)'
}
var cumulativeOffset = function cumulativeOffset (element) {
  var top = 0
  var left = 0
  do {
    top += element.offsetTop || 0
    left += element.offsetLeft || 0
    element = element.offsetParent
  } while (element)

  return {
    top: top,
    left: left
  }
}

function initCardAnimate () {
  var $year = document.querySelector('.card__year')
  var $card = document.querySelector('.el-card')
  var $cardComet = document.querySelector('.card__cometOuter')
  $card.onmousemove = function (event) {
    var e = event || window.event
    var x = ((e.pageX - cumulativeOffset($card).left - 350 / 2) * -1) / 100
    var y = ((e.pageY - cumulativeOffset($card).top - 350 / 2) * -1) / 100

    var matrix = [
      [1, 0, 0, -x * 0.00005],
      [0, 1, 0, -y * 0.00005],
      [0, 0, 1, 1],
      [0, 0, 0, 1]
    ]

    generateTranslate($year, e, 0.03)
    generateTranslate($cardComet, e, 0.05)

    $card.style.transform = 'matrix3d(' + matrix.toString() + ')'
  }

  $card.onmouseleave = function (event) {
    $card.style.transform = 'none'
  }
}

export { initCardAnimate }
