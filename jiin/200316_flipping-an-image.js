const flipAndInvertImage = (A) => { //[[1,1,0],[1,0,1],[0,0,0]]
    A.forEach((ar, i, array)=>{
        let new_array = ar.reverse();
        new_array.forEach((num, i, inner_array)=>{
            if(num===1){
                inner_array[i]=0;
            }else inner_array[i]=1;
        });
        array[i] = new_array
    });
    return A;//[[1,0,0],[0,1,0],[1,1,1]]
};