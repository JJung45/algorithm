function solution(n) {
    let result = '';
    for(let i=1; i<=n; i++){
        let text;
        if (i%2 === 0){
            text='박';
        }else text='수';
        result+=text;
    }
    return result;
}