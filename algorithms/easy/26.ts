function removeDuplicates(nums: number[]): number {

    let pos = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    return pos;
}