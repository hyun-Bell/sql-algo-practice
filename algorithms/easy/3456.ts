function hasSpecialSubstring(s: string, k: number): boolean {
    if (k > s.length) return false;

    let i = 0;
    while (i < s.length) {
        const currentChar = s[i];

        const start = i;

        while (i < s.length && s[i] === currentChar) {
            i++;
        }

        const length = i - start;

        if (length === k) {

            const validBefore = start === 0 || s[start - 1] !== currentChar;

            const validAfter = i === s.length || s[i] !== currentChar;

            if (validBefore && validAfter) {
                return true;
            }
        }
    }

    return false;
}