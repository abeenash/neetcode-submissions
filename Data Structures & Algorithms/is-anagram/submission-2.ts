class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const counts = new Map<string, number>();
        for (const eachCharacter of s) {
            counts.set(eachCharacter, (counts.get(eachCharacter) ?? 0) + 1);
        }
        for (const eachCharacter of t) {
            const current = counts.get(eachCharacter);
            if (!current) return false;
            counts.set(eachCharacter, current - 1);
        }
        return true;
    }
}
