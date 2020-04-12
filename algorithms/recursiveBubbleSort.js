function recBubbleSort(array, n){
    if(n==1){
        console.table(array)
        return 
    }
    for(let i = 0; i < n-1; i++)
        if(array[i].hue > array[i+1].hue){
            swap(array, array[i], array[i+1])
        }
    recBubbleSort(array, n-1)
}