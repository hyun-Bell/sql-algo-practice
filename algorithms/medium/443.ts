function compress(chars: string[]): number {
   
    let read = 0;
    let count = 0;
    let write = 0;

    while (read < chars.length) {

        const char = chars[read];
        count = 0;
        while (char === chars[read]) {
            read++;
            count++;
        }

        chars[write++] = char;

        if (count > 1) {
            for (const digit of count.toString()) {
                chars[write++] = digit;
            }
        }
    }

    return write;

};
