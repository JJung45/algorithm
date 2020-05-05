const countNegatives = (grid) => { //[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    let result = grid.reduce((acc, cur)=>{
        return acc + cur.filter(v=>v<0).length;
    }, 0);
    return result;  //8
};