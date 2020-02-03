const solution = (answers) => { // ([5,1,4,3,2,1]) , ([5,5,5,5,5])
    let person_answer = [];
    //수포자들이 적을 답이 담길 배열
    let person_rule = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    //수포자들의 답을 찍는 방식
    for(let i=0; i<3; i++){
        person_answer[i]= [];
        for(let j = 0; j<answers.length; j++){
            person_answer[i][j] = person_rule[i][j%person_rule[i].length];
        }
    }
    //수포자들이 실제로 어떤 방식으로 답을 찍었는지 person_answer 배열에 담음
    
    //수포자들의 총 점수를 체크하는 함수
    const answer_check = (supozas) =>{
        let supoza_score = [0, 0, 0];
        //수포자들의 시험점수
        for(let i=0; i<3; i++){
            for(let j=0; j<answers.length; j++){
                if(supozas[i][j]===answers[j]){
                    supoza_score[i]++;
                }
                //적어낸 답과 정답이 일치할 경우 +1
            }
        }
        return supoza_score;
        //총점 배열로 반환
    }
    
    let scores = answer_check(person_answer);
    let best_score = Math.max.apply(null, scores);
    //총점 배열에서 가장 높은 점수 체크
    let result = [];
    //동점자 고려하여 배열로 선언
    for(let i=0; i<3; i++){
        if(scores[i]===best_score){
            result.push(i+1);
        }
        //i번째 수포자의 점수가 최고점과 같을 경우 result 배열에 추가
    }
    return result;
    //[2] , [1]
}