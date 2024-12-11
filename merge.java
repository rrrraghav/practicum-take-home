class Merge {
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5, 7};
        int[] arr2 = {2, 4, 6, 8};
    }

    public int[] mergeArrays(int[] arr1, int[] arr2) {
        int[] merged = new int[arr1.length + arr2.length];
        // keep track smallest vals (not added yet) in each array
        // compare these and whichever is smaller add to result
        // increment pointer for smaller one
        // keep going till exhausted one list
        int firstArray = 0;
        int secondArray = 0;
        int smallestArray = (arr1.length < arr2.length) ? arr1.length : arr2.length;
        for (int i = 0; i < smallestArray; i++) {
            if (arr1[firstArray] < arr2[secondArray]) {
                merged[i] = arr1[firstArray];
                firstArray++;
            } else {
                merged[i] = arr2[secondArray];
                secondArray++;
            }
        }
        return merged;
    }
}