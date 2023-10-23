
function AppExample() {

    /*
    1) 사용자에게 이름을 입력받아준다 - prompt
    2) 현재 날짜를 가져올 것
    3) 조건에 따라 계절을 분류
        - 3~5월 : 봄
        - 6~8월 : 여름
        - 9~11월 : 가을
        - 12~2월 : 겨울
    4)
    2023-05-15 => h1태그
    수평선
    XXX님 지금은 봄입니다. 좋은 하루 보내세요! :)
    */

    let name = prompt('이름을 입력해주세요')

    // 2) 현재날짜 가지고 오기
    let today = new Date()
    console.log('today: ', today)

    // a. 년-월-일 .toLocaleDateString()
    let date = today.toLocaleDateString()
    console.log('date: ', date)

    // b. 현재 몇 월? .getMonth()
    let month = today.getMonth() + 1 // 배열로 들어가있는거라 0부터 시작임
    console.log('month: ', month)

    let season = ""

    if (month >= 3 && month <= 5) {
        season = '봄'
    } else if (month >= 6 && month <= 8) {
        season = '여름'
    } else if (month > 9 && month <= 11) {
        season = '가을'
    } else {
        season = '겨울'
    }

    return (
        <div>
            <h2>{date}</h2>
            <hr></hr>
            <p>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</p>
        </div>
    );
}

export default AppExample;
