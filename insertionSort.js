// Code to implement insertion sort in Javascript

function insertionSort(arr) {
	for(j=1; j<arr.length; j++) {
		var key = arr[j];
		var i = j-1;
		while((i>=0)&&(arr[i]>key)){
			arr[i+1] = arr[i];
			i=i-1;
		}
		arr[i+1] = key;
	}
	return arr;
}

var num_array = [5,2,4,6,1,3];
console.log(insertionSort(num_array)); 
