const mN = document.querySelector(".myName h1");

function handleClick(){
    const myColor = mN.style.color;
    let newColor;
    if(myColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    mN.style.color = newColor;
}

function cs(){
    console.log("클릭되었습니다");
}



mN.addEventListener("click", handleClick);
mN.addEventListener("click", cs);