class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const visitedItems = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (visitedItems.has(complement)) {
                return [visitedItems.get(complement)!, i];
            }

            visitedItems.set(nums[i], i);
        }
        return [];
    }
}
