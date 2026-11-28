class MinStack {
    private stack: number[]
    private minStack: number[]
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        const currentMin = this.minStack.length > 0 ?
        Math.min(val, this.minStack.at(-1)!)
        : val
        this.minStack.push(currentMin)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1)
    }
}
