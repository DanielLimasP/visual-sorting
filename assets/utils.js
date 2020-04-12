function swap(array, a, b){
    var temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

function drawText(framerate, sortID){
    noStroke()
    fill(100, 100, 100)
    rect(10, 10, 780, 105)
    noStroke()
    fill(0)
    textSize(20)
    text(`Sorting algorithm: ${sortingAlgorithms[sortID]}`, 15, 40)
    text(`Status: ${status}`, 15, 70)
    text(`Time: ${framerate/60} seconds`, 15, 100)
}

function drawLines(){
    for (let i = 0; i < width; i++) {
        colorMode(HSB, 360, 100, 100)
        stroke(values[i].hue, 78, 64)
        // Sorting by height
        line(i, height, i, height - values[i].h)  
        // Sort by color
        //line(i, height, i, 0)  
    }
}

