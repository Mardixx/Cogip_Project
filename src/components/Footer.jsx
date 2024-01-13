export const Footer = () => {
    return (
        <footer className="footer">
            <div  className="footerDiv">
                <div className="logoFooter"><span>COGIP</span></div>
                <div className="infosBusiness">
                    <div className="dual">
                        <div className="location">
                            <span><img src="round-place-24px.svg" alt="Location svg" />Square des Martyrs, 6000 Charleroi</span>
                        </div>
                        <div className="number">
                            <span><img src="round-phone-24px.svg" alt="Phone svg" />(123) 456-7890</span>
                            <span><img src="printshop.svg" alt="Print Shop svg" />(123) 456-7890</span>
                        </div>
                    </div>
                    <div className="socials">
                        <span>Social Media</span>
                        <img src="facebook.svg" alt="" />
                        <img src="twitter.svg" alt="" />
                        <img src="linkedin.svg" alt="" />
                        <img src="youtube.svg" alt="" />
                        <img src="instagram.svg" alt="" />
                        <img src="googlePlus.svg" alt="" />
                        <img src="pinterest.svg" alt="" />
                        <img src="wifi.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="footerThings">
                <div className="pagesLinks">
                    <span>HOME</span>
                    <span>INVOICES</span>
                    <span>COMPANIES</span>
                    <span>CONTACTS</span>
                    <span>PRIVACY POLICY</span>
                </div>
                <div className="copyright">
                    <span>Copyright © 2022 • COGIP Inc.</span>
                </div>
            </div>
        </footer>
    )
}