// addEventListener을 통해 html을 내가 어떤 이벤트 적용시킬지 정할 수 있음 click은 많은 이벤트 중에 하나의 요소임.


const mN = document.querySelector(".myName h1");

function handmNClick(){
    console.log("글이 눌러졌어요!")
    mN.style.color = "red";
}

mN.addEventListener("click", handmNClick);
