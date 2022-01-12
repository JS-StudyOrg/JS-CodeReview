/*
출처 : Leetcode 279_Perfect Squares
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

? 완전 제곱수란 한 개의 숫자가 여러 개의 정수의 합으로 계산이 되는데, 각 정수가 모두 어떤 수의 제곱으로 표현될 수 있는 경우를 말한다.
? 예를 들어 16=4+4+4+4 인데, 4는 2의 제곱이다. 13은 4+9인데 4응 2의제곱, 9는 3의 제곱수이다.

ex1 
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

ex2
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

Constraints:
1 <= n <= 104
*/
