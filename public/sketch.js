// To expand the concept of visualizing sorting algorithms
// Idea would be to map a color to each line and then sort it
// and visualize this sort of rainbow

/**
 *  TODO:
 * 
 *  -Change the lines to rectangles
 *  -Add a few bunch of algorithms
 *  -Maybe try to do it like a circle or something
 *  -Add some basic user interaction
 * 
 *  */ 

var colors = []
var values = []
const sortingAlgorithms = ['Bubble Sort', 'Selection Sort']
const FRAMERATE = 60

var sitrep = 0
var start = false
var i = 0
var j = 0
var bubbleSound
var status = 'Sleeping'

function preload(){
    soundFormats('mp3', 'ogg')
    bubbleSound = loadSound('pop.mp3')
}

function setup(){
    noLoop()
    frameRate(60)
    createCanvas(850, 650)
    for (let i = 0; i < width; i++) {
        // Sorting height
        //values[i] = {h: int(random(height)), r: random(255), g: random(255), b: random(255) } 
        // Sorting color and height
        // New variable random height
        let hVal = random(360)
        let rh = hVal * 1.66
        values[i] = {h: rh, hue: hVal}  
    }
    //console.table(values)
}

function draw(){   
    frameRate(FRAMERATE)
    colorMode(RGB, 255, 1)
    background(200)
    if(start === true) {
        sortValues(values)
    }
    // Here is where the drawing happens
    drawText(frameCount, 1)
    drawLines()
}

function mouseClicked(){
    if(start){
        noLoop()
        start = false
        status = 'Sleeping'
    }else{
        loop()
        start = true
        status = 'Sorting'
    }
}

function sortValues(){
    // Here we will basically call each and every single algorithm
    //bubbleSort(values)
    selectionSort(values)
}