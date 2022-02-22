/**
 * https://leetcode.com/problems/merge-intervals/
 * 
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * 중복되는 범위를 구하는 문제입니다.
 * Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//* 검토할 시간이 부족해 시간 복잡도는 생각하지 않고 깡으로 풀이하였습니다.

 var merge = function(intervals) {
    
  let result = [];
  
  if (intervals.length === 1) return intervals;
  
  // Sort intervals arrays in order to first element of each.
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  
  // pull out elements at the interval array until it's length 0.
  while (intervals.length > 0) {
      // pull out elements at the first of interval array. 
      let tmp = intervals.shift();
      let cmp;
      
      // When result array does not have element, pull out elements from interval array.
      if (result.length === 0) {
          cmp = intervals.shift();    
      } else {
          cmp = result.pop();
      }
      
      // When tmp, cmp array do not have overlapping intervals, push it to result array.
      if (tmp[1] < cmp[0] || tmp[0] > cmp[1]) {
         let merge = [...tmp, ...cmp].sort((a,b) => a - b);
         result.push([merge[0], merge[1]], [merge[2], merge[3]]);    
      // if not, compare each elements and push it to result array.
      } else {
          let merge = [...tmp, ...cmp];
          result.push([Math.min.apply(null, merge), Math.max.apply(null, merge)]);
      }  
  }
  
  return result;
};

