var clock=document.querySelector('.clock');
var clockword=document.querySelector('.clockword');
function getTime(){
    const time=new Date;
    const hour=time.getHours();
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    //clock.innerHTML=hour+":"+minutes+":"+seconds;
    clock.innerHTML=`${hour<10?`0${hour}`:hour}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
    //var rand=Math.floor(Math.random()*2);
    var rand=1;
    if(hour<6){
        if(rand==1)
            clockword.innerHTML=`새벽에 커피빨면서 코딩하는 여유`;
        else
            clockword.innerHTML=`가끔은 쉬어주는 것도 괜찮아요`;
    }
    else if(hour<9){
        if(rand==1)
            clockword.innerHTML=`추운 날 아침엔 이불 속 코딩 어때요?`;
        else
            clockword.innerHTML=`이른 아침부터 코딩하는 당신이 멋집니다`;
    }
    else if(hour<12){
        if(rand==0)
            clockword.innerHTML=`점심 먹기 전에 가볍게 백준 풀어볼까요?`;
        else
            clockword.innerHTML=`가끔은 브론즈 문제로 힐링해보아요`;
    }
    else if(hour<18){
        if(rand==0)
            clockword.innerHTML=`1일 1문제, 지금 바로 실천해요`;
        else
            clockword.innerHTML=`가끔 너무 어려울 땐 조금 쉬었다가 해보자`;
    }
    else if(hour<21){
        if(rand==0)
            clockword.innerHTML=`힘들어도 참고 하면 골드 가있을 예정`;
        else
            clockword.innerHTML=`코딩테스트 합격하고 빨리 취뽀하고 싶다!`;
    }
    else{
        if(rand==1)
            clockword.innerHTML=`저녁 먹고 하루의 마무리로 코딩 어때요?`;
        else
            clockword.innerHTML=`오늘 한 번, 골드 문제에 도전해볼까요?`;
    }
}
function init(){
    setInterval(getTime, 1000);
}
init();