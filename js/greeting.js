// const loginForm = document.getElementById("login-form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === ""){
//     alert("please write your name");
//   }else if(username.length>15){
//     alert("Your name is too long")
//   }
// }

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  // show the greetings
  paintGreeting(savedUsername);
}

function paintGreeting(savedUsername){
  greeting.innerText = `Hello, ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintGreeting(username);
}




// loginButton.addEventListener("click",onLoginBtnClick);

loginForm.addEventListener("submit", onLoginSubmit);



//1.로컬스토리지에서 값 가져오기
//-1) localStroage.getItem("키") == null 일 때
//폼 클래스리스트에 히든 삭제 
//submit 실행시, event.preventDefalut(), 
//클래스리스트에 히든 추가, 입력 값 저장, 로컬스토리지에 저장 
//-2) 아닐 때
//if문에 의해 인사와 이름 출력 