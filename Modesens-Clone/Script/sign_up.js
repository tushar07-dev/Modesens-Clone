document.querySelector("form").addEventListener("submit", formSubmit)
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];

