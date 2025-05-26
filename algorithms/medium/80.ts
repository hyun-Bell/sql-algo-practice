function removeDuplicates(nums: number[]): number {
    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (pos < 2 || nums[i] !== nums[pos-2]) {
            nums[pos++] = nums[i];
        }
    }

    return pos;
}