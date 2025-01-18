class TimeLimitedCache {
    
    private cacheMap: Map<number, { value: number, createdAt: Date, duration: number }>;

    constructor() {
        this.cacheMap = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        if (this.cacheMap.has(key)) {
            const cache = this.cacheMap.get(key);
            if (!cache) return false;
            if (!TimeLimitedCache.checkExpired(cache)) {
                this.cacheMap.set(key, { value, createdAt: new Date(), duration });
                return true;
            }
            return false;
        } else {
            this.cacheMap.set(key, { value, createdAt: new Date(), duration });
            return false;
        }
    }
    
    get(key: number): number {
        if (this.cacheMap.has(key)) {
            const cache = this.cacheMap.get(key);
            if (!cache) return -1;
            if (TimeLimitedCache.checkExpired(cache)) {
                this.cacheMap.delete(key);
                return -1;
            }
            return cache.value;
        } else {
            return -1;
        }
    }

    static checkExpired(cache: { value: number, createdAt: Date, duration: number }): boolean {
        return cache.createdAt.getTime() + cache.duration <= Date.now();
    }
    
    count(): number {
        return Array.from(this.cacheMap.entries()).map(([key, cache]) => {
            if (TimeLimitedCache.checkExpired(cache)) {
                this.cacheMap.delete(key);
                return false;
            }
            return true;
        }).filter(Boolean).length;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */