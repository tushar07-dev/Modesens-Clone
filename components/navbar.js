function navbar(){
    return `
    <div id="navBar">
        
        <div class="title0">
            <a href="home.html"><img class="logo" src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="" height=100% width="150px"></a>

        </div>
       
       <div class="title1">
           <p><a href="./womens.html">WOMEN</a></p>
       <div class="womens">  
           <p><a href="./womens.html">SHOP ALL</a></p>
           <p><a href="./womens.html">CLOTHING</a></p>
           <p><a href="./womens.html">BAGS</a></p>
           <p><a href="./womens.html">SHOES</a></p>
           <p><a href="./womens.html">ACCESORIES</a></p>
           <p><a href="./womens.html">BEAUTY</a></p>
           <p><a href="./womens.html">SALE</a></p>
           <p><a href="./womens.html">PREOWNED</a></p>
           <p><a href="./womens.html">OCCASION</a></p>
       </div>
    
       </div>
       <div class="title1">
           <p><a href="./mens.html">MEN</a></p>
           <div class="womens">
               <p><a href="./mens.html">SHOP ALL</a></p>
               <p><a href="./mens.html">CLOTHING</a></p>
               <p><a href="./mens.html">BAGS</a></p>
               <p><a href="./mens.html">SHOES</a></p>
               <p><a href="./mens.html">ACCESORIES</a></p>
               <p><a href="./mens.html">BEAUTY</a></p>
               <p><a href="./mens.html">SALE</a></p>
               <p><a href="./mens.html">PREOWNED</a></p>
               <p><a href="./mens.html">OCCASION</a></p>
           </div>
       
       </div>
    
       <div class="title1">
           <p><a href="">KIDS</a></p>
           <div class="womens">
               <p><a href="">SHOP ALL</a></p>
               <p><a href="">BABY GIRLS</a></p>
               <p><a href="">BABY BOYS</a></p>
               <p><a href="">GIRLS</a></p>
               <p><a href="">BOYS</a></p>                
               <p><a style="color: red;" href="">SALE</a></p>
           </div>
       
       </div>      
        <div class="title2">
            <p><a href="./home.html">HOME</a></p>
            <p><a href="">OFFER</a></p>
            <p><a href="">DESIGNERS</a></p>
            <p><a href="">DESIGNERS</a></p>
            <p><a href="">DESIGNERS</a></p>
            <p><a href="">COMMUNITY</a></p>
            <p><a href=""> WHY MODESENS</a></p>
        </div>
      
       
        <div class="title3">
        <img style="margin: 25px 0px 0px 15px;" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/220px-Flag_of_the_United_States.svg.png" alt="User" height="20px">
        <div class="user" onclick="myFunction()">
         <i class="far fa-user"></i>
        </div>
         <input type="text" placeholder="Search" value="">
         <i class="fas fa-search searchIcon"></i>  
     </div>
    </div>
`
}

function footer(){
    return `
    <div class="upperLine"></div>
    <div class="ftCol">
      <h3>CUSTOMER CARE</h3>
      <a href="" style="display: block">Shopper Protection</a>
      <a href="" style="display: block">Loyality Program</a>
      <a href="" style="display: block">Help Center</a>
      <a href="" style="display: block">Size Guides</a>
      <a href="" style="display: block">Contact Us/Feedback</a>
      <a href="" style="display: block">Shipping/Returns</a>
    </div>
    <div class="ftCol">
      <h3>INFORMATION</h3>
      <a href="" style="display: block">About Us</a>
      <a href="" style="display: block">Influencer Program</a>
      <a href="" style="display: block">Partner Stores</a>
      <a href="" style="display: block">Sitemap</a>
    </div>
    <div class="ftCol">
      <h3>LEGAL</h3>
      <a href="" style="display: block">Terms Of Use</a>
      <a href="" style="display: block">Disclosure</a>
      <a href="" style="display: block">Privacy Policy</a>
      <a href="" style="display: block">Size Guides</a>
      <a href="" style="display: block">Community Guidelines</a>
    </div>
    <div class="ftCol">
      <h3>CONNECT WITH US</h3>
      <a href="" style="display: block"
        ><i class="fas fa-mobile-alt"></i> ModeSens App for IOS and Android</a
      >
      <a href="" style="display: block"
        ><i class="fas fa-camera-retro"></i> Add to Browser</a
      >
    </div>
    <div class="ftCol">
      <h3>SHARE THE LOVE</h3>
      <h4>Your Friends Will Thank You - more than once</h4>
      <input
        type="text"
        placeholder="Enter email addresses seperated by commas"
        name=""
        id=""
        style="width: 98%"
      />
      <button
        style="
          width: 98%;
          height: 40px;
          font-size: 24px;
          margin: 15px auto;
          background-color: white;
          border: 1px solid;
        "
      >
        INVITE FRIENDS
      </button>
    </div>

    <div class="lowerLine"></div>
    <div class="footerEnd" style="margin-top: 20px">
      <div>
        <img
          src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
          alt=""
          height="5%"
          width="3%"
        />
        <h4 style="margin-top: 16px">© 2022, ModeSens Inc</h4>
      </div>
      <div style="margin-left: 1180px; width: 30%; margin-top: -75px">
        <img
          src="https://cdn.modesens.com/static/img/20181008footer-pit.svg"
          alt=""
          width="13%"
        />
        <img
          src="https://cdn.modesens.com/static/img/20181008footer-tt.svg"
          alt=""
          width="13%"
        />
        <img
          src="https://cdn.modesens.com/static/img/footer-p.svg"
          alt=""
          width="20%"
          style="display: block; margin-left: -20px"
        />
        <img
          src="https://cdn.modesens.com/static/img/footer-fb.svg"
          alt=""
          width="20%"
          style="display: block; margin-left: -40px"
        />
        <img
          src="https://cdn.modesens.com/static/img/footer-wb.svg"
          alt=""
          width="20%"
          style="display: block; margin-left: -40px"
        />
        <img
          src="https://cdn.modesens.com/static/img/footer-wx.svg"
          alt=""
          width="20%"
          style="display: block; margin-left: -40px"
        />
      </div>
    </div>
    `
}

function menu(){
    return `
    <div>
    <h4 style="margin-top: 20px;">MODESENS/SHOP/WOMENS</h4>
    <span>10,000+ ITEMS</span>
    <span style="margin-left: 160px;"><i class="fas fa-search searchIcon"></i></span>
    <div style="display: flex;">
     <h4>Filter By:</h4>
     <h4 style="margin-left: 170px;">Reset</h4>
     </div>
     <p>Gender:Women</p>
     <p>Condtion:New</p>
     <p>Category:All</p>
     <button style="width: 300px; padding: 7px; font-size: 20px; background-color: white; border: 1px solid;">SAVE MY SEARCH</button>
     <h4>Share My Search</h4>
     <h4>My Saved Searches</h4>
<div class="menuCat">
  <h4>CATEGORY</h4>
  <p>Clothing</p>
  <p>Shoes</p>
  <p>Bags </p>
  <p>Accessories</p>
  <p>Beauty</p>
  <p>Home</p>
  <h4>DESIGNER</h4>
  <h4>SIZE</h4>
  <h4>COLOR</h4>
  <h4>PRICE RANGE</h4>
  <h4>ON SALE</h4>
  <h4>STORE</h4>
  <h4>KEYWORD</h4>
  <h4>Related Category</h4>
  <p>Sale</p>
  <p>Home</p>
  <p>Accessories</p>
  <p>Bags</p>
  <p>Beauty</p>
  <p>Clothing</p>
  <p>Shoes</p>
  <h4>Related Search</h4>
  <p>Men</p>
  <p>Kids</p>
  <p>Marc Le Bihan</p>
  <p>Yohji Yamamoto</p>
  <p>Gucci</p>
  <p>Mabu By Maria Bk</p>
  <p>Sophia Webster X Puma</p>
  <p>Topo Designs</p>
  <p>Versace</p>
  <p>Burberry</p>
  <p>Patagonia</p>
  <p>Balenciaga</p>
</div> 
</div>
    `
}


export {navbar, footer , menu};
