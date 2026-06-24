/**
 * Pair class to store key-value pairs
 */

class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        const states: Pair[][] = [];
        if (pairs.length === 0) {
            return states;
        }
        states.push([...pairs]);
        for (let i = 1; i < pairs.length; i++) {
            let current = pairs[i];
            let j = i - 1;
            while (j >= 0 && pairs[j].key > current.key) {
                pairs[j + 1] = pairs[j];
                j--;
            }
            pairs[j + 1] = current;
            states.push([...pairs]);
        }

        return states
    }
}
