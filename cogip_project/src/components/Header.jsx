import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="header">
            <div className="title">
                <Link to='/'><h2>COGIP</h2></Link>
            </div>
            <div className="noTitle">
                <div className="pages">
                    <Link to='/'><span>Home</span></Link>
                    <Link to='/Invoices'><span>Invoices</span></Link>
                    <Link to='/Companies'><span>Companies</span></Link>
                    <Link to='/Contacts'><span>Contacts</span></Link>
                </div>
                <div className="accountButtons">
                    <span className="signUp">Sign up</span>
                    <span className="login">Login</span>
                </div>
            </div>
        </div>
    )
}