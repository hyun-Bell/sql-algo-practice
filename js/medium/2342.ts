function maximumSum(nums: number[]): number {
  
    let answer = - 1;

    const map: Map<number, number> = new Map();

    for (const currNum of nums) {
        const sum = currNum.toString().split('').map(Number).reduce((prev, curr) => {
            return prev + curr;
        }, 0);
        

        if (map.has(sum)) {
            const prevMax = map.get(sum);
            if (!prevMax) continue;

            answer = Math.max(answer, currNum + prevMax);
            
            map.set(sum,  Math.max(currNum, prevMax));
            

        } else {
            map.set(sum, currNum);
        }

    }
    
    return answer;
};



/**
 * Example 1:

Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.
Example 2:

Input: nums = [10,12,19,14]
Output: -1
Explanation: There are no two numbers that satisfy the conditions, so we return -1.
 
 */