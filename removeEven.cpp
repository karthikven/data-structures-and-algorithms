int * removeEven( int *& Arr, int size ) {
  // Write your code here
  int cou_nt = 0;
  int * tempArr = new int[size];
  for(int i=0; i<size; i++) {  
    if(Arr[i]%2!=0) {
      tempArr[cou_nt]=Arr[i];
      cou_nt++;
    }
  }
  Arr = tempArr;
  return Arr;
}

