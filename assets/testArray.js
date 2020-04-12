function testArray(size){
    let testArray = []
    for (let i = 0; i < size; i++) {
        let hVal = int(random(100))
        let rh = hVal * 1.66
        testArray[i] = {h: rh, hue: hVal}  
    }
    //console.table(testArray)
    return testArray
}
