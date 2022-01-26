function setup() {
  createCanvas(800, 800);
  background(0)
  drawBoard(); // calls the custum function drawBoard()

}

function drawBoard() {
  // Complete this custom function
  fill(255, 50, 30)
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 + 100, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 + 200, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 + 300, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 + 400, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 + 500, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 + 600, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 + 700, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 - 100, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 - 200, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 - 300, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 - 400, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 - 500, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 - 600, coordinate1, 50, 50)
  }
  for (let coordinate1 = 0; coordinate1 < 800; coordinate1 += 50) {
    rect(coordinate1 - 700, coordinate1, 50, 50)
  }
}