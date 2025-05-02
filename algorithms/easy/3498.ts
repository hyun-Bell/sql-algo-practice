function reverseDegree(s: string): number {
    return [...s].reduce((acc, char, index) => {
        const reversedAlphabetIndex = 'z'.charCodeAt(0) - char.charCodeAt(0) + 1;
        return acc + (reversedAlphabetIndex * (index + 1));
    }, 0);
}