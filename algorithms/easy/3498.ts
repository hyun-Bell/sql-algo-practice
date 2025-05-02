function reverseDegree(s: string): number {

    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let reversedIndex = 122 - s.charCodeAt(i) + 1;

        sum += reversedIndex * (i + 1)
    }

    return sum;
}