let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = ()=>{
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Mozilla.png") {
        myImage.setAttribute("src","images/note2.png");
    } else {
        myImage.setAttribute("src","images/Mozilla.png");
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storeName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla cool!" + storeName;
}

myButton.onclick = ()=>{
    setUserName();
};

function setUserName(){
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name",myName);
        myHeading.textContent = "Mozilla cool!" + myName;
    }
}

function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}