function quickSort(arr) {
  if (arr.length < 1) return arr
  var middleIndex = Math.floor(arr.length / 2)
  var middle = arr.splice(middleIndex, 1)[0]
  var left = [], //闭包,函数里面的函数,不能定义全局变量
    right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i])
    } else if (arr[i] > middle) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([middle], quickSort(right)) //递归循环
}
console.log(quickSort([1, 3, 4, 7, 9, 34, 4, 5])) //[ 1, 3, 4, 5, 7, 9, 34 ]