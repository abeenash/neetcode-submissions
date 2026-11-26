class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set<number>(nums);
        let longest: number = 0;
        for (const num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let length: number = 0;
                while (numsSet.has(num + length)) {
                    length += 1;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
