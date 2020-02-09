const solution = (s) => { //'abcde' , 'qwer'
    let middleIndex = s.length/2;
    if(parseInt(middleIndex)===middleIndex){
        return s[middleIndex-1]+s[middleIndex]; 
    }else{
        return s[parseInt(middleIndex)];
    }
    
}
//'c' , 'we'