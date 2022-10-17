import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginActionSuccess } from "../../Redux/PagesRedux/action";
import "./Navbar.css";
import { logOut, useAuth } from "../../firebase/firebase";



const Navbar = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const currentUser=useAuth()
    const handleBoolean=()=>{
        dispatch(LoginActionSuccess(false))
        navigate("/login")
    }
    // console.log("details",currentUser)

    const handleLogout=async()=>{
        try {
            logOut();
            alert("Logout Successful")
            navigate("/")
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <div id="Navbar">
            <div id="logo">

                <img
                    src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
                    alt=""
                />
            </div>
            <div className="categories">
                <div className="women" onClick={()=>navigate("/womens")}> WOMEN</div>
                <div className="womenhide">

                    <h5>SHOP ALL</h5>
                    <h5 className="clothing">CLOTHING</h5>
                    <div className="clothinghide">
                        <div className="flex">
                            <div>
                                <h5>SHOP BY CATEGORY</h5>
                                <h5>NEW ARRIVALS</h5>
                                <h5>ALL CLOTHING</h5>
                                <h5>BEACHWEAR</h5>
                                <h5>DRESSES</h5>
                                <h5>TOPS </h5>
                                <h5>SKIRTS </h5>
                                <h5>JEANS </h5>
                                <h5>PANTS</h5>
                            </div>
                            <div style={{ lineHeight: "30px" }}>
                                <h5></h5>
                                <h5>JUMPSUITS</h5>
                                <h5>SHORTS</h5>
                                <h5>COATS</h5>
                                <h5>JACKETS</h5>
                                <h5>KNITWEAR </h5>
                                <h5>LINGERE </h5>
                                <h5>HOSIERY </h5>
                                <h5>SALE</h5>
                            </div>
                            <div style={{ marginLeft: '100px', lineHeight: "30px" }}>
                                <h5>SHOP BY LIST</h5>
                                <h5>LUXURY-T-SHIRTS</h5>
                                <h5>WIDE LEG PANTS</h5>
                                <h5>PRINTED BLOUSES</h5>
                                <h5>MINI DRESSES</h5>
                                <h5>SPRING'S TOP SKIRTS </h5>
                                <h5>FEELING TRANSPARENT </h5>
                                <h5>VESTED INTEREST </h5>
                                <h5>SALE</h5>
                            </div>
                            <div style={{ marginLeft: '100px', lineHeight: "30px" }}>
                                <h5>DESIGNERS</h5>
                                <h5>SAINT LAURENT</h5>
                                <h5>GUCCI</h5>
                                <h5>DOLCE & GABBANA</h5>
                                <h5>PRADA</h5>
                                <h5>GIVENCHY</h5>
                                <h5>VETEMENTS</h5>
                                <h5>VALENTINO </h5>
                                <h5>STELLA MCCARTNEY</h5>
                            </div>
                            <div style={{ marginLeft: '100px', lineHeight: "30px" }}>
                                <h5>POPULAR CATEGORY</h5>
                                <h5>WOMENS KNITWEAR</h5>

                                <img src='https://modesens.com/banner/9352/getimg/?img=%2Fbanner%2F20210816Women-Knits-Nav.jpg ' alt='' />
                            </div>
                        </div>
                    </div>
                    <h5>BAGS</h5>
                    <h5>SHOES</h5>
                    <h5>ACCESSORIES</h5>
                    <h5>BEAUTY</h5>
                    <h5>SALE</h5>
                    <h5>PRE-OWNED</h5>
                    <h5>OCCASION</h5>

                </div>
                <div className="men" onClick={()=>navigate("/mens")}> MEN </div>
                <div className="menhide">

                    <h5>SHOP ALL</h5>
                    <h5 >CLOTHING</h5>

                    <h5>BAGS</h5>
                    <h5>SHOES</h5>
                    <h5>ACCESSORIES</h5>
                    <h5>GROOMING</h5>
                    <h5>SALE</h5>
                    <h5>PRE-OWNED</h5>
                    <h5>OCCASION</h5>
                </div>

                <div className="beauty" onClick={()=>navigate("/beauty")}> BEAUTY</div>
                <div className="beautyhide">
                    <h5>SHOP ALL</h5>
                    <h5>WOMEN'S BEAUTY</h5>
                    <h5>MEN'S GROOMING</h5>
                    <h5>KID'S CARE</h5>
                </div>
                <div className="kids" onClick={()=>navigate("/kids")}> KIDS</div>
                <div className="kidshide">
                    <h5>SHOP ALL</h5>
                    <h5>BABY GIRL</h5>
                    <h5>BABY BOY</h5>
                    <h5>GIRLS</h5>
                    <h5>BOYS</h5>
                    <h5>SALE</h5>
                </div>
                <div className="home" onClick={()=>navigate("/")}> HOME</div>
                <div className="homehide">
                    <div className="flex">
                        <div>
                            <h5 style={{ color: "Grey" }}>SHOP BY CATEGORY</h5>
                            <h5>NEW ARRIVALS</h5>
                            <h5>SHOP ALL </h5>
                            <h5>BATH</h5>
                            <h5>BED</h5>
                            <h5>FURNITURE</h5>
                            <h5>HOME DECOR</h5>
                            <h5>KITCHEN & DINING</h5>
                            <h5>PET ACCESSORIES</h5>
                            <h5>TECHNOLOGY</h5>
                            <h5>SALE</h5>
                        </div>
                        <div>
                            <h5 style={{ color: "Grey" }}>DESIGNERS</h5>
                            <h5>GUCCI</h5>
                            <h5>VERSACE</h5>
                            <h5>MAISON MARGIELA</h5>
                            <h5>OFF-WHITE</h5>
                            <h5>MASTER & AMP</h5>
                            <h5>HAY</h5>
                            <h5>VITRA</h5>
                            <h5>FORNASETTI</h5>
                        </div>
                        <div>
                            <h5 style={{ color: "Grey" }}>POPULAR CATEGORY</h5>
                            <h5>TECHNOLOGY</h5>
                            <img src='https://modesens.com/banner/9368/getimg/?img=%2Fbanner%2F20210816Home-Technology-Nav.jpg' alt='' />
                        </div>
                    </div>

                </div>
                <div className="offers" onClick={()=>navigate('/offers')}> OFFERS</div>
                <div className="offershide">
                    <h5>COUPONS</h5>
                    <h5>WOMEN'S SALE</h5>
                    <h5>MEN'S SALE</h5>
                </div>
                <div className="designer" onClick={()=>navigate("/design")}> DESIGNER</div>
                <div className="community" onClick={()=>navigate("/offers")} > COMMUNITY</div>
                <div className="communityhide">
                    <h5>DISCOVER</h5>
                    <h5>MY CLOSET</h5>
                    <h5>EDITORIALS</h5>
                    <h5>INFLUENCER PROGRAM</h5>
                </div>
                <div className="why modesens" onClick={()=>navigate("/why_modesens")}> WHY MODESENS</div>
            </div>
            <div className="right_side">
                <div onClick={()=>navigate("/cart")}>
                    <img
                        src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
                        alt=""
                    />
                </div>
                <div id="login" >
                    <img className="loginimage"
                        src={currentUser?"https://ca.slack-edge.com/T02QFJUB5DF-U02RBFN2N1Y-dcb969d1b8b8-48":"https://cdn.modesens.com/static/img/20200612account_b2.svg"}
                        alt=""
                    />
                </div>
                <div id="loginhide">
                    <h5>Earn Points</h5>
                    <h5>Signup to unlock all benefits</h5>
                    <hr></hr>
                    <h5>My Likes</h5>
                    <h5>My Alerts</h5>
                    <h5>My Recently Viewed</h5>
                    <hr></hr>
                    <h5>My Closet</h5>
                    <h5>My Orders</h5>
                    <h5>My Save Searches</h5>
                    <h5>My Loyality </h5>
                    <h5>My messages</h5>
                    <h5>Invite Friends</h5>
                    <h5>Settings</h5>
                    <hr></hr>
                    {currentUser?<h5 className="inbtn" onClick={handleLogout}>Logout</h5>:<h5 className="inbtn" onClick={handleBoolean}>Login</h5>}
                </div>
                <div>
                    <img
                        src="https://cdn.modesens.com/static/img/20191109search_b.svg"
                        alt=""
                    />
                </div>
                <div>
                    <input placeholder="SEARCH" id="search"></input>{" "}
                </div>
            </div>
        </div>
    );
};

export default Navbar;