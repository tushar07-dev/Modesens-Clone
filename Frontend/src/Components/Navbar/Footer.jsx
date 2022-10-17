import { React, useState } from "react";
// import styled from "styled-component";
import "./footer.css"
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faMobileScreen } from "@fontawesome/free-solid-svg-icons";
// import { faWindowRestore } from "@fontawesome/free-solid-svg-icons";

export const Footer = () => {
    const [formData, setformData] = useState({
        email: "",
        gender: "",
    })

    const handleChange = (e) => {
        setformData({
            ...formData({ ...formData, [e.target.id]: e.target.value, })
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <hr />
            <br />
            <div className="mainbox">


                <div className="customercare">
                    <h3>CUSTOMER CARE</h3>
                    <a href="https://modesens.com/protection/">Shopper Protection</a><br />
                    <a href="https://modesens.com/loyalty/">Loyalty Program</a><br />
                    <a href="https://modesens.com/faq/">Help Center</a><br />
                    <a href="https://modesens.com/size-guide/">Size Guides</a><br />
                    <a href="">Contact Us / Feedback</a><br />
                    <a href="https://modesens.com/faq/#shipping-return">Shipping / Returns</a>
                </div>
                <div className="Information">
                    <h3>INFORMATION</h3>
                    <a href="https://modesens.com/about/">About Us</a><br />
                    <a href="https://modesens.com/influencer/">Influencer Program</a><br />
                    <a href="https://modesens.com/stores/">Partner Stores</a><br />
                    <a href="https://modesens.com/fashion-sitemap/">Sitemap</a><br />
                </div>
                <div className="Legal">
                    <h3>LEGAL</h3>
                    <a href="https://modesens.com/legal/">Terms Of Use</a><br />
                    <a href="https://modesens.com/disclosure/">Disclosure</a><br />
                    <a href="https://modesens.com/privacy/">Privacy Policy</a><br />
                    <a href="https://modesens.com/community-guidelines/">Community Guidelines</a><br />
                </div>
                <div className="connect">
                    <h3>CONNECT WITH US</h3>
                    {/* <FontAwesomeIcon icon={faMobileScreen} /><a href="https://play.google.com/store/apps/details?id=com.modesens.androidapp&hl=en_IN&gl=US"> ModeSense App for IOS and Android</a><br />
                    <FontAwesomeIcon icon={faWindowRestore} /> <a href="https://microsoftedge.microsoft.com/addons/detail/modesens-shopping-assista/bpmcdjmehcbmbedbhmmipkcccmhigamj">Add to Browser</a><br /> */}
                </div>
                <div className="News">
                    <h3>NEWSLETTER SIGN UP</h3>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} className="email" type="text" name="email" placeholder="Email Address" id="email" />
                        <div>
                            <input onChange={(e) => {
                                const setGender = e.target.value;
                                setformData({ ...formData, gender: setGender })
                            }} type="radio" name="Women's" className="Women's" value={"Women's"} /> &nbsp;
                            Women's  &nbsp;
                            <input onChange={(e) => {
                                const setGender = e.target.value;
                                setformData({ ...formData, gender: setGender })
                            }} type="radio" name="Men's" className="Men's" value={"Men's"} /> &nbsp;
                            Men's
                        </div>
                        <input className="inputSubmit" type="submit" value="submit" />
                    </form>
                </div>


            </div>
            <br /><br />
            <hr className="hrTag" />
            <div className="contacticons">
                <div className="leftside">
                    <img src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" alt="" />

                </div>
                <div className="adjust"><p><p>© 2022, ModeSens Inc</p></p></div>
                <div className="rightside">
                    <div className="adjust1">
                        <a href="https://www.pinterest.com/modesens/"><img src="https://cdn.modesens.com/static/img/20181008footer-pit.svg" alt="" /></a>
                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/modesens"><img src="https://cdn.modesens.com/static/img/20181008footer-tt.svg" alt="" /></a>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/modesens/"><img src="https://cdn.modesens.com/static/img/footer-p.svg" alt="" /></a>
                    </div>
                    <div className="facebook">
                        <a href="https://www.facebook.com/modesens"><img src="https://cdn.modesens.com/static/img/footer-fb.svg" alt="" /></a>
                    </div>
                    <div className="wb">
                        <a href="https://weibo.com/modesens"><img src="https://cdn.modesens.com/static/img/footer-wb.svg" alt="" /></a>
                    </div>
                    <div className="chat">
                        <a href=""><img src="https://cdn.modesens.com/static/img/footer-wx.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}