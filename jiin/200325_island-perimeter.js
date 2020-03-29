const islandPerimeter = (grid) => { //[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (i !== 0) {
                    if (grid[i - 1][j] !== 1) {
                        result++;
                        console.log(`${i},${j} up++`);
                    }
                } else {
                    result++;
                    console.log(`${i},${j} up++`);
                }
                if (j !== grid[i].length - 1) {
                    if (grid[i][j + 1] !== 1) {
                        result++;
                        console.log(`${i},${j} right++`);
                    }
                } else {
                    result++;
                    console.log(`${i},${j} right++`);
                }
                if (i !== grid.length - 1) {
                    if (grid[i + 1][j] !== 1) {
                        result++;
                        console.log(`${i},${j} down++`);
                    }
                } else {
                    result++;
                    console.log(`${i},${j} down++`);
                }
                if (j !== 0) {
                    if (grid[i][j - 1] !== 1) {
                        result++;
                        console.log(`${i},${j} left++`);
                    }
                } else {
                    result++;
                    console.log(`${i},${j} left++`);
                }
            }

        }
    }
    return result; //16
};