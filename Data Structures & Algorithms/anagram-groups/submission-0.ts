class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string,string[]>()
        for(const str of strs){
            const sortedKeys = str.split("").sort().join("")
            if(!map.has(sortedKeys)){
                map.set(sortedKeys,[])
            }
            map.get(sortedKeys).push(str)
        }
        return Array.from(map.values())
    }
}
