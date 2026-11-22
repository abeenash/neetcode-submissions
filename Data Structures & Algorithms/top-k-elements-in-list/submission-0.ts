class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>();

        for (const num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }

        const uniqueNums = Array.from(counts.keys());

        uniqueNums.sort((a, b) => {
            const aFreq = counts.get(a)!;
            const bFreq = counts.get(b)!;
            return bFreq - aFreq;
        });

        return uniqueNums.slice(0, k);
    }
}
