function sum(a) {
    var sum = 0; //previously a[0] which is a logical error as it counts the first element twice.
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
