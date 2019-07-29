const container = document.getElementById('container')
const canvas = document.createElement('canvas')
canvas.width = container.clientWidth
canvas.height = container.clientHeight
const ctx = canvas.getContext('2d')

container.appendChild(canvas)

let canvasOffset = {
  x: canvas.offsetParent.offsetLeft,
  y: canvas.offsetParent.offsetTop,
}

let dragging = false
let draggStart = draggEnd = {}
let rectCache = []

canvas.addEventListener('mousedown', function(e) {
  draggStart = {
    x: parseInt(e.clientX - canvasOffset.x),
    y: parseInt(e.clientY - canvasOffset.y),
  }
  dragging = true
})

canvas.addEventListener('mouseup', function(e) {
  if (!dragging) return

  dragging = false
  draggEnd = {
    x: parseInt(e.clientX - canvasOffset.x),
    y: parseInt(e.clientY - canvasOffset.y),
  }
  let diff = {
    x: draggEnd.x - draggStart.x,
    y: draggEnd.y - draggStart.y,
  }

  rectCache.push({
    x: draggStart.x,
    y: draggStart.y,
    w: diff.x,
    h: diff.y,
  })

  refleshCanvas()
})

canvas.addEventListener('mousemove', function(e) {
  if (!dragging) return

  let current = {
    x: parseInt(e.clientX - canvasOffset.x),
    y: parseInt(e.clientY - canvasOffset.y),
  }
  let diff = {
    x: current.x - draggStart.x,
    y: current.y - draggStart.y,
  }

  refleshCanvas()

  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = .5
  ctx.setLineDash([7, 2])
  ctx.rect(draggStart.x, draggStart.y, diff.x, diff.y)
  ctx.strokeStyle = 'rgb(255, 82, 0)'
  ctx.stroke()
  ctx.restore()
})

canvas.addEventListener('mouseleave', function() {
  if (!dragging) return

  dragging = false
  refleshCanvas()
})

document
  .getElementById('prev')
  .addEventListener('click', function() {
    if (rectCache.length !== 0) rectCache.pop()
    refleshCanvas()
  })

document
  .getElementById('clear')
  .addEventListener('click', function() {
    clearCanvas()
    rectCache = []
  })

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function refleshCanvas() {
  clearCanvas()

  rectCache.forEach(function(rect) {
    ctx.fillStyle = 'rgba(255, 82, 0, 0.4)'
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
  })
}
