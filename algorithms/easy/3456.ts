function hasSpecialSubstring(s: string, k: number): boolean {

    let prev = s[0];

    let count = 0;
    let found = false;
    for (let i = 0; i < s.length; i++) {
        if (prev !== s[i]) {
            if (k === count) {
                found = true;
                break;
            }
            count = 1;
        }
        if (prev === s[i]) {
            count++;
        }

        prev = s[i];
    }

    if (count === k) {
        found = true;
    }
    return found;
}