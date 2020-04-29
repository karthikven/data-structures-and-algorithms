
//function that returns the index of the maximum element in a row

function findColumnMax(arr, column) {
	
	var max_elem = 0;
	var index = 0;
	for(i=0;i<arr.length;i++) {
		if (arr[i][column]>max_elem) {
			max_elem = arr[i][column];
			index = i;
		}
	}
	return index;

}

//function that takes a 2d array and an index and checks if it's a peak

function checkIfPeak(arr,i,j) {

	//define different positions that a peak could occur in and the different checks we need to do

	if ((i==0)&&(j==0)) {
		//check if the given index is the top left corner element and if it is a peak
		if ((arr[i][j]>=arr[i+1][j])&&(arr[i][j]>=arr[i][j+1])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else if ((i==0)&&(j==(arr[0].length-1))) {
		//check if the given index is the top right corner element and if it is a peak

		if ((arr[i][j]>=arr[i][j-1])&&(arr[i][j]>=arr[i+1][j])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else if (((i==arr[0].length-1))&&(j==0)) {
		//check if the given index is the bottom left corner element and if it is a peak

		if ((arr[i][j]>=arr[i-1][j])&&(arr[i][j]>=arr[i][j+1])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else if ((i==j)&&(i==arr[0].length-1)) {
		//check if the given index is the bottom right corner element and if it is a peak

		if ((arr[i][j]>=arr[i-1][j])&&(arr[i][j]>=arr[i][j-1])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else if (i==0) {
		//check if the given index is a non corner element in the first row

		if ((arr[i][j]>=arr[i][j-1])&&(arr[i][j]>=arr[i][j+1])&&(arr[i][j]>=arr[i+1][j])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else if (j==0) {
		//check if the given index is a non corner element in the first column

		if ((arr[i][j]>=arr[i-1][j])&&(arr[i][j]>=arr[i+1][j])&&(arr[i][j]>=arr[i][j+1])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else if (i==(arr[0].length)-1) {
		//check if the given index is a non corner element in the last row

		if ((arr[i][j]>=arr[i][j-1])&&(arr[i][j]>=arr[i][j+1])&&(arr[i][j]>=arr[i-1][j])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else if (j==(arr[0].length-1)) {
		//check if the given index is a non corner element in the last column

		if ((arr[i][j]>=arr[i-1][j])&&(arr[i][j]>=arr[i+1][j])&&(arr[i][j]>=arr[i][j-1])) {
			return 1;
		}
		else {
			return 0;
		}
	}

	else {
		if ((arr[i][j]>=arr[i+1][j])&&(arr[i][j]>=arr[i-1][j])&&(arr[i][j]>=arr[i][j-1])&&(arr[i][j]>=arr[j+1])) {
			return 1;
		}
		else {
			return 0;
		}
	}

}

//function that returns a peak from a 2d array

/*
function peakFinder(arr) {
	
	var col=Math.floor(arr[0].length/2);

	while((col!=-1)||(col!=arr.length)) {

		var col_max_index = findColumnMax(arr, col);
		var isPeakCheck = checkIfPeak(arr, col_max_index, col);

		console.log("col_max_index: ",arr[col_max_index][col]);
		console.log("isPeakCheck: ", isPeakCheck);
		break;

		

		if(isPeakCheck==1) {
			return arr[col_max_index][col];
			//console.log("Peak is: ",arr[col_max_index][col]);
			//break;
		}
		else {
			if (arr[col_max_index][col]<arr[col_max_index][col+1]) {
				col=col+1;
			}
			else {
				col=col-1;
			}
		}
	}
}

*/



var num_array = [[1,2,3],[4,535,6],[7,8,9]];
//console.log(findColumnMax(num_array,0));
console.log(checkIfPeak(num_array,2,2));
//console.log(peakFinder(num_array));






