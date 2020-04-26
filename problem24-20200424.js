/**
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 * 
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 * 
 * The cache is initialized with a positive capacity.
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.data = {};
    this.recent = new Set();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.data)  {
        this.recent.delete(key);
        this.recent.add(key);
      return this.data[key]  
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.data[key] = value;
    this.recent.delete(key);
    this.recent.add(key);
    if (this.recent.size > this.cap) {
        let values = this.recent.values();
        let delVal = values.next().value;
        this.recent.delete(delVal);
        delete this.data[delVal]
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
