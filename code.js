function sum(a) {
    var sum = 0; // Was previously (var sum = a[0]) which is a logical error as it counts the first element twice.
    for(var i = 0; i < a.length; i++) {
        sum += a[i]; // Adds each element of the array to the sum.
    }
    return sum; // Returns the final sum of all array elements.
}
