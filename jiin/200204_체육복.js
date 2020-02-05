const solution = (n, lost, reserve) => { //(7,[2,3,4],[1,2,3,6]), (5,[2,3,4],[3,4,5])
    let result = n - lost.length - reserve.length;
    //도난도 안당하고 여벌도 없는 사람 수 체크
    reserve.forEach((reserve_num, i)=>{
        if (lost.includes(reserve_num)) {
            reserve[i] = 'MINE';
            lost[lost.indexOf(reserve_num)]='LOST';
        }
    });
    //여벌을 가지고 있는 사람이 도난 당했을 때 케이스에서 제외

    reserve.forEach((reserve_num, i) => {
        let front = reserve_num - 1;
        let back = reserve_num + 1;
        if (lost.includes(front) || lost.includes(back)) {
            let can_borrow = lost.includes(front) ? front : back;
            lost[lost.indexOf(can_borrow)] = 'GOT';
            reserve[i] = 'DONE';
        }
    });
    //여벌옷을 가지고 있는 사람의 앞 뒤 번호 체크, 앞 뒤 번호가 있을 경우 빌려준다.

    lost.forEach((ls) => {
        if (typeof (ls) === 'string') {
            result++;
        }
    });
    //여벌옷을 빌렸을 경우, 값이 'got'으로 바뀐다. 데이터 타입이 스트링인 학생을 세어 빌린 학생의 수를 센다.

    reserve.forEach(() => {
        result++;
    });
    //여벌옷을 보유하고 있는 학생의 경우 빌려줬든 안빌려줬든 체육복을 가지고 있기 때문에 더한다.

    return result; //6,4
}