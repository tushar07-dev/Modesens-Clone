var items = JSON.parse(localStorage.getItem("women"))


var cart = JSON.parse(localStorage.getItem("CartItems")) || [];
items.map(creation)



function creation(elem)
{
    // create element;
    var image = document.createElement("img");
    var div = document.createElement("div");
    div.style.width = "240px"
    var x = document.createElement("i"); 
    var y = document.createElement("i");    
    var div1 = document.createElement("div")
    div1.style.width = "40px"
    var div2 = document.createElement("div")
    div1.style.width = "40px"
    div1.setAttribute("class", "heart");
    div2.setAttribute("class", "bell");
    x.setAttribute("class", "far fa-heart")
    y.setAttribute("class", "far fa-bell");
    image.setAttribute("src", elem.imgURL)
    image.setAttribute("width", "70%");
    image.setAttribute("height", "58%");
    var body = document.querySelector("body")
    var con = document.querySelector("#container");
    var name = document.createElement("h3")
    var price = document.createElement("h4")
    var store = document.createElement("p")
    var myList = document.querySelector("#myList")

    //  1]-  click - likeBtn -red,  display grid; 
    //2] add to card function
    div1.addEventListener("click", function ()
    {
        div1.style.color = "red"; 
        myList.style.display = "grid";
        addToCart(elem)
    })
    var cross = document.querySelector("#cross")
    cross.addEventListener("click", function ()
    {
        myList.style.display = "none";
    })
    store.setAttribute("class","stores")
    name.textContent = elem.name;
    price.textContent = elem.price;
    store.textContent = elem.store;
    var p = document.createElement("p")
    p.textContent = elem.itemDes

// append
    con.append(div)
    div1.append(x)
    div2.append(y)
    
    div.append(image,div1,div2,name,p,price,store);
    
}

//  3] 
function addToCart(data)
{   
    cart.push(data);
     console.log(cart);
    localStorage.setItem("CartItems", JSON.stringify(cart));
}