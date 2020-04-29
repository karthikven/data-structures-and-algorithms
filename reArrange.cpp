#include <iostream>
using namespace std;

void reArrange(int arr[], int size) {
	/*
	for(int i=0; i<size; i++) {
		if (arr[i]>=0)
		{
			int j=i+1;
			while(j<size) {
				if(arr[j]<0) {
					int temp = arr[j];
					//shift arr[j] left until it comes to i's position
					while(j>i) {
						arr[j] = arr[j-1];
						j--;
					}
					arr[i]=temp;
				}
			}
			
		}
	}
	*/

	for(int i=0; i<size; i++) {
		cout<<"\n";
		cout<<arr[i]<<" ";
	}
}

int main() {
	int array[7] = {10,-1,20,4,5,-9,-6}; 
	int n = 7;
	cout<<"Rearranged array is: \n";
	reArrange(array, n);
	return 0;
}