const mn = document.querySelector(".myName h1");

function handleclick(){
    mn.style.color = "gray";
}

function handleMouseOn(){
    mn.innerText = "마우스가 감지 되었습니다!";
}

function handleMouseLeave(){
    mn.innerText = "마우스가 떠났습니다!";
}

function handwindowResize(){
    document.body.style.backgroundColor="orange";
}

function handleWindowCopy(){
    alert("복사 됐습니다!");
}

function handleWindowPaste(){
    alert("붙여졌다!");
}

function handleWindowOffline(){
    alert("와이파이가 연결되지 않았어용");
}

function handleWindowOnline(){
    alert("와우 와이파이 연결 됐어요!");
}
mn.addEventListener("click", handleclick);
mn.addEventListener("mouseenter", handleMouseOn);
mn.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handwindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("paste",handleWindowPaste);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);