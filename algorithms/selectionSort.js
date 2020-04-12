var minIndex = 0
var n = 0

/*
function selectionSort(test){
    n = test.length
    for (let i = 0; i < n-1; i++) {
        let minIndex = i
        for (let j = i+1; j < n; j++) 
            if(test[j].hue < test[minIndex].hue)
                minIndex = j
 
        swap(test, minIndex, i)
    }
    console.table(test)
}
*/

function selectionSort(test){
    n = test.length
    bubbleSound.play()
    if(i < n-1){
        let minIndex = i
        for (let j = i+1; j < n; j++) {
            if(test[j].hue < test[minIndex].hue)
                minIndex = j
        }
        swap(test, minIndex, i)
    }else{
        //console.table(test)
        console.log('Finished')
        bubbleSound.play()
        noLoop()
        status = 'Finished'
    }
    i++
}