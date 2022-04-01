var data = JSON.parse(localStorage.getItem("CartItems"))
data.map(creation)
function creation(elem)
{   
    var image = document.createElement("img");
    var div = document.createElement("div");
    image.setAttribute("src", elem.imgURL)
    image.setAttribute("width", "75%");
    image.setAttribute("height", "58%");
    var body = document.querySelector("body")
    var con = document.querySelector("#items");
    var name = document.createElement("h3")
    var price = document.createElement("h4")
    var btn = document.createElement("button")
    var myList = document.querySelector("#myList")
    btn.setAttribute("class","buyNow")
    name.textContent = elem.name;
    price.textContent = elem.price;
    btn.textContent = "BUY NOW";
    var p = document.createElement("p")
    p.textContent = elem.itemDes
    btn.addEventListener("click",myFunc)
    con.append(div)
    div.append(image,name,p,price,btn);

}
var userText = document.querySelector(".content1Text")
var userTextData = localStorage.getItem("loggedUser");

userText.textContent = "Hello @" + userTextData; 
function myFunc(event)
{
    window.location.href = "thanks.html"
}