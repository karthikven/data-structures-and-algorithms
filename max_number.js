//print the maximum element in array

//function that returns the maximum element in an array

function arrayMax(arr){
	var max = arr[0];
	for(i=1; i<num_array.length; i++) {
		if (num_array[i]>max) {
			max = num_array[i];
		}
	}
	return max;
}


var num_array = [1,2,3,4,5];


console.log(arrayMax(num_array)); 





