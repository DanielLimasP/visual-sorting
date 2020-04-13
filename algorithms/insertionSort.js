function insertionSort(array){
    bubbleSound.play()
    let n = array.length
    if(i < n){
        // hKey = hue key
        let key = array[i]
        let hkey = array[i].hue
        let j = i - 1
        while(j >= 0 && array[j].hue > hkey){
            array[j + 1] = array[j]
            j = j-1
        }
        array[j+1] = key
    }else{
        console.log('Finished')
        bubbleSound.play()
        noLoop()
        status = 'Finished'
    }
    ++i
    //console.table(array)
}

