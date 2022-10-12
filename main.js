const myImage = document.querySelector('img');

myImage.onclick = () =>{
    const mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/abe-hiroshi.jpg') {
        myImage.setAttribute('src', 'images/image0.jpg');
    }else{
        myImage.setAttribute('src', 'images/abe-hiroshi.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*
function setUserName() {
    var myName = prompt('あなたの名前を入力してください');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'こんにちは，${myName}';
}
*/

function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
        setUserName;
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}else {
    var storedName = localStorage.setItem('name');
    myHeading.textContent = 'ようこそ ${storedName}';
}

myButton.onClick = () => {
    setUserName();
}


