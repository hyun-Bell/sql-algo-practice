function moveZeroes(nums: number[]): void {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i]
            insertPos++;
        }
    }

    for (let j = insertPos; j < nums.length; j++) {
        nums[j] = 0;
    }
}