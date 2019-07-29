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

canvas.addEventListener('mousedown', function(e) {
  draggStart = {
    x: parseInt(e.clientX - canvasOffset.x),
    y: parseInt(e.clientY - canvasOffset.y),
  }
  dragging = true
})

canvas.addEventListener('mouseup', function(e) {
  dragging = false
  draggEnd = {
    x: parseInt(e.clientX - canvasOffset.x),
    y: parseInt(e.clientY - canvasOffset.y),
  }
  let diff = {
    x: draggEnd.x - draggStart.x,
    y: draggEnd.y - draggStart.y,
  }
  console.debug(draggStart, draggEnd, diff)
  ctx.fillRect(
    draggStart.x,
    draggStart.y,
    diff.x, diff.y,
  )
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

  ctx.beginPath()
  ctx.rect(draggStart.x, draggStart.y, diff.x, diff.y)
  ctx.strokeStyle = 'dashed'
  ctx.lineWidth = 2
  ctx.stroke()
})

function refleshCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
