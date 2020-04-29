/**
 * First Unique Number
 * You have a queue of integers, you need to retrieve the first unique integer in the queue.
 * 
 * Implement the FirstUnique class:
 * 
 * FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
 * int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
 * void add(int value) insert value to the queue.
 * @param {number[]} nums
 */

var Node = function(n) {
  return {
    prev: null,
    next: null,
    val: n
  }
} 

var FirstUnique = function(nums) {
  this.first = null;
  this.last = null
    this.uniques = {};
  for (let i = 0; i < nums.length; i ++) {
    this.add(nums[i])
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  if (this.first === null) return -1; 
  return this.first.val;  
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (value in this.uniques) {
        let temp = this.uniques[value].prev;
        if (this.first === this.uniques[value]) this.first = this.uniques[value].next;
        if (this.last === this.uniques[value]) this.last = this.uniques[value].prev;
        if (this.uniques[value].prev !==null )this.uniques[value].prev.next = this.uniques[value].next;
        if  (this.uniques[value].next !==null) this.uniques[value].next.prev = temp;
        this.uniques[value].next = null;
        this.uniques[value].prev = null
    } else {
      this.uniques[value] = new Node(value);
      if (this.first === null) {
        this.first = this.uniques[value];
      } else {
        this.uniques[value].prev = this.last;
        this.last.next = this.uniques[value];
      }
      this.last = this.uniques[value];
    }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
