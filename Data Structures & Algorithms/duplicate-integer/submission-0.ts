class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>()
        const duplicate = new Set<number>()
        for(const num of nums){
            if(!seen.has(num)){
                seen.add(num)
            }else{
                duplicate.add(num)
            }
        }
        const hasDuplicates = Array.from(duplicate)
        if(hasDuplicates.length !== 0) return true
        return false
    }
}
