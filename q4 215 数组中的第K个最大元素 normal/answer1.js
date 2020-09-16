/*
保存长度为K的arr，然后遍历一遍数组，再在arr中进行比较，所以时间复杂度为O(kn)
不断比较失去了意义，我意识到直接快排可以解决这个问题
为了更快，可以使用快速选择算法，这个算法明天解决2020/9/13
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    




};


let arr = [3,1,2,5,6,4]

// findKthLargest(arr,2)
console.log(findKthLargest(arr,2))

