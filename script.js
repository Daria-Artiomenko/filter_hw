Array.prototype.myFilter = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Cannot iterate over null or undefined');
    }

    if (typeof callback!== 'function') {
        throw new Error('Callback is not a function');
    }

    let context = thisArg ?? this;
    let obj = Object(this);

    let len = obj.length;
    
    let res = [];

    for (let i = 0; i < len; i++){
        if ( i in obj) {
            let element = this[i];
            if (callback.call(context, element, i, obj)) {
                res.push(element)
            }
        }
    }
    return res;
}


// const arr = [11, 2, 34, 4, 61, 71, 17, 9, 10];
// const arr2 = [16, 7, 4, 41, 5, 6, 7, 18, 8, 14];



// console.log(arr.myFilter(function (elem, i) {
//     return  this[i] < elem
// }, arr2));

// console.log(arr.filter(function (elem, i) {
//     return  this[i] < elem
// }, arr2));




