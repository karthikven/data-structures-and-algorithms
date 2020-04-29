// code to find a peak in a 1 dimensional list
//an element in a list is a peak if it is greater than or equal to its neighbors

function peakFinder1D(arr) {	
	for(i=0; i<arr.length; i++) {
		if(i==0) {
			if (arr[i]>=arr[i+1]) {
				return arr[i];
				break;
			}
		}
		else if (i==(arr.length-1)) {
			if (arr[i]>=arr[i-1]) {
				return arr[i];
				break;
			}
		}
		else {
			if ((arr[i]>=arr[i-1])&&(arr[i]>=arr[i+1])) {
				return arr[i];
				break;
			}
		}
	}
}

var num_array = [2,3,4,6,1,3];
console.log(peakFinder1D(num_array)); 