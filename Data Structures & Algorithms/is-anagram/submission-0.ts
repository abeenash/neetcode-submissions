class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
    const s_arrayed = Array.from(s).sort()
    const t_arrayed = Array.from(t).sort()
    const s_sorted = s_arrayed.join("")
    const t_sorted = t_arrayed.join("")
    if (s_sorted === t_sorted) return true
    return false
    }
}
