import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
    const [highlightHome, setHighlightHome] = useState("");
    const [highlightInvoices, setHighlightInvoices] = useState("");
    const [highlightCompanies, setHighlightCompanies] = useState("");
    const [highlightContacts, setHighlightContacts] = useState("");
    
    let location = useLocation();
    
    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setHighlightHome("black");
                break;
            case "/Invoices":
                setHighlightInvoices("black");
                break;
            case "/Companies":
                setHighlightCompanies("black");
                break;
            case "/Contacts":
                setHighlightContacts("black");
                break;
        }
    })

    return (
        <div className="header">
            <div className="title">
                <Link to='/'><h2>COGIP</h2></Link>
            </div>
            <div className="noTitle">
                <div className="pages">
                    <Link to='/'><span style={{borderColor: highlightHome}}>Home</span></Link>
                    <Link to='/Invoices'><span style={{borderColor: highlightInvoices}}>Invoices</span></Link>
                    <Link to='/Companies'><span style={{borderColor: highlightCompanies}}>Companies</span></Link>
                    <Link to='/Contacts'><span style={{borderColor: highlightContacts}}>Contacts</span></Link>
                </div>
                <div className="accountButtons">
                    <span className="signUp">Sign up</span>
                    <Link to='/DashBoard'><span className="login">Login</span></Link>
                </div>
            </div>
        </div>
    )
}