const solution = (heights) => {
    let answer = [];
    for(let i=heights.length-1; i>-1; i--){
        for(let k=i; k>-1; k--){
            if(heights[i]<heights[k]){
                answer[i]=k+1;
              break;
            }else{
                answer[i]=0;
            }
        }
    }
    return answer;
}