function testArraySimple(size){
    let array = []
    for (let i = 0; i < size; i++) {
        array[i] = int(random(100))
    }
    return array
}
