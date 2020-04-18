/**
 *   Number of Islands
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var landCheck = function(grid,y,x) {
        if (grid[y][x] === '1') {
             grid[y][x] = '.' 
        } else {
           return;  
        }
        if (x) landCheck(grid, y, x-1);
        if (y) landCheck(grid, y-1, x);
        if (x < grid[0].length -1) landCheck(grid, y, x + 1);
        if (y < grid.length -1) landCheck(grid, y + 1, x);
    }
    var result = 0;
    for (var y = 0; y < grid.length; y++) {
        for (var x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === '1') {
                landCheck(grid,y,x);
                result ++
            }
        }
    }
    return result;
};
