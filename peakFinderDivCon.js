//an optimised version of the peak finder algorithm for a 1 dimensional list

function peakFinderDivCon (arr) {

	var mid = Math.floor(arr.length/2);
	var step_count = 0;

	if (arr[mid]<arr[mid-1]) {
		var subarr = [];
		for(i=0;i<mid;i++) {
			subarr.push(arr[i]);
		}
		return peakFinderDivCon(subarr);
	}

	else if (arr[mid]<arr[mid+1]) {
		var subarr2 = [];
		for(i=mid+1;i<arr.length;i++) {
			subarr2.push(arr[i]);
		}
		return peakFinderDivCon(subarr2);
	}

	else {
		console.log("steps: ",step_count);
		return arr[mid];
	}
}


var num_array = [2,3,4,6,1,3];
console.log(peakFinderDivCon(num_array));

