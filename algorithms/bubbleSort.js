function bubbleSort(array){
    // Refactored to work with the draw() loop
    bubbleSound.play()
    if(i < array.length){
        for (let j = 0; j < array.length - i - 1; j++) {
            // To sort by hue
            let a = values[j].hue
            let b = values[j+1].hue
            // To use heights
            //let a = values[j].h
            //let b = values[j+1].h
            if(a > b){
                swap(values, j, j+1)
            }
        }
    }else{
        console.log('Finished')
        bubbleSound.play()
        noLoop()
        status = 'Finished'
    }
    i++
}