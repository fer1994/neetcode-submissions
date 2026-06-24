class LinkedList {

    list = []

    constructor() {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        return this.list[index] || -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        this.list.unshift(val)
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.list.push(val)
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean | null {
        if(this.list.length <= index || index < 0) return false
        this.list.splice(index,1)
        return true
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        return this.list
    }
}
