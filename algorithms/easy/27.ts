function removeElement(nums: number[], val: number): number {
    let pos = 0;

    for (let num of nums) {
        if (num !== val) {
            nums[pos++] = num;
        }
    }

    return pos

}