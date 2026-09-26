function simpleLRU(capacity) {
    const cache = [];

    function put(key, value) {
        let index = -1;

        for (let i = 0; i < cache.length; i++) {
            if (cache[i].key === key) {
                index = i;
                break;
            }
        }
    
        if (index !== -1) {
            cache.splice(index, 1);
        }
      
        else if (cache.length >= capacity) {
            cache.shift();
        }
      
        cache.push({
            key: key,
            value: value
        });
    }

    function get(key) {
        let index = -1;
       
        for (let i = 0; i < cache.length; i++) {
            if (cache[i].key === key) {
                index = i;
                break;
            }
        }
    
        if (index === -1) {
            return -1;
        }
        const value = cache[index].value;
     
        cache.splice(index, 1);
      
        cache.push({
            key: key,
            value: value
        });
        return value;
    }

    return {
        put,
        get
    };
}

// --- Test Cases ---
const cache = simpleLRU(2);
cache.put("A", 10);
cache.put("B", 20);
console.log(cache.get("A")); 
cache.put("C", 30);
console.log(cache.get("B")); 
console.log(cache.get("C")); 