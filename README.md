# LRU Cache Implementation (JavaScript)

## Overview
This project implements a Least Recently Used (LRU) Cache in JavaScript as part of the Vecosoft job assessment. It supports positive capacity, `get(key)`, and `put(key, value)` operations with automatic eviction of the least recently used entries when capacity is exceeded.

## Data Structures Used
- **JavaScript Array & Objects**: We used a custom array-based approach combined with object wrapping (`{ key, value }`) to track the usage order. 
- **LRU Ordering**: 
  - Whenever an item is accessed via `get()` or updated/added via `put()`, its prior position is removed (`splice`) and it is pushed to the end of the array, marking it as the **most recently used**.
  - When the cache size reaches the maximum `capacity` during a new insertion, the item at the very beginning of the array (`shift()`) is automatically evicted, as it represents the **least recently used** entry.

## Complexity
- **Time Complexity**: 
  - `get()`: $O(N)$ due to linear scanning of the array to find the key.
  - `put()`: $O(N)$ for searching existing keys and rearranging elements.
- **Space Complexity**: $O(capacity)$ to store the key-value pairs within the array.

## How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Open your terminal in the project directory.
3. Run the script using Node:
   ```bash
   node lru_cache.js