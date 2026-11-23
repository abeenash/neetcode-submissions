class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res: string = "";
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res: string[] = [];
        let i: number = 0;
        while (i < str.length) {
            let j: number = i;
            while (str[j] !== "#") {
                j += 1;
            }
            const length = parseInt(str.slice(i, j));
            res.push(str.slice(j + 1, j + length + 1));
            i = j + length + 1;
        }
        return res;
    }
}
