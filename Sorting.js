let array = document.getElementById("array");
let btn = document.getElementById("btn");
let sortedArr = document.getElementById("sortedArray");

let arr = [5, 2, 7, 1, 0, 9, 6, 8];

array.innerHTML = `${arr}`;

btn.addEventListener("click", function handleClick (){
    let sorted = bubbleSort(arr)
    sortedArr.innerHTML = `<div class="arrayText">Array After Bubble Sorting (in descending order) : <span id="array" > ${sorted}</span> </div>`;
})



function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++){

        let swapped = false

        for (let j = 0; j < arr.length - i - 1; j++){
            // swapping the elements
            if (arr[j] < arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }

        // if no elements are swapped
        // that means our array is sorted
        if(!swapped) break;
    }

    return arr
}
