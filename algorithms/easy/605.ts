function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let remain = n;
    for (let i = 0; i < flowerbed.length; i = i + 1) {
        if (flowerbed[i] === 0 && flowerbed[i-1 >= 0 ? i -1 : 0] === 0 && flowerbed[i+1 < flowerbed.length ? i+1 : flowerbed.length - 1] === 0)      {
            flowerbed[i] = 1;
            remain = remain - 1;
        }
    }

    return remain <= 0;
};