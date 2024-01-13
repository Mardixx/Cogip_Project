export const DashboardAdd = () => {
    const [state, setState] = useState([]);

    const dashBoardChange = () => {
        setState("dashboard");
    }
    const dashBoardChangeInvoices = () => {
        setState("invoices");
    }
    const dashBoardChangeCompanies = () => {
        setState("companies");
    }
    const dashBoardChangeContacts = () => {
        setState("contacts");
    }
    
    return (
        <div className="dashBoard">
                    <div className="sideMenu">
                        <div className="person">
                            <img src="avataaars.svg" alt="Avatar svg" />
                            <span className="name">Jean-Christian Ranu</span>
                        </div>
                        <div className="list">
                            <ul>
                                <li onClick={dashBoardChange} tabIndex={1} value={"Hey"}>
                                    <img src="Icon_dashboard.svg" alt="DashBoard svg" />
                                    <span>Dashboard</span>
                                </li>
                                <li onClick={dashBoardChangeInvoices} tabIndex={1}>
                                    <img src="Icon_Invoices.svg" alt="Invoices svg" />
                                    <span>Invoices</span>
                                </li>
                                <li onClick={dashBoardChangeCompanies} tabIndex={1}>
                                    <img src="Icon_Companies.svg" alt="Companies svg" />
                                    <span>Companies</span>
                                </li>
                                <li onClick={dashBoardChangeContacts} tabIndex={1}>
                                    <img src="Icon_contact.svg" alt="Contacts svg" />
                                    <span>Contacts</span>
                                </li>
                            </ul>
                        </div>
                        <div className="logout">
                            <img src="avataaars.svg" alt="Avatar svg" />
                            <span>Logout</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="welcomeMessage">
                            <div className="page">
                                <h2>Dashboard</h2>
                                <span>dashboard/</span>
                            </div>
                            <div className="text">
                                <h2>Welcome back Jean-Christian!</h2>
                                <span>You can here add an invoice, a company and some contacts</span>
                            </div>
                            <img src="dashboardImg.png" alt="Dashboard Img" />
                        </div>
                        <div className="formNewInvoice">
                            <h3>New invoice</h3>
                            <form action="">
                                <input type="text" placeholder="Add Something" />
                                <input type="text" placeholder="Add Something" />
                                <input type="text" placeholder="Add Something" />
                                <button>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
    )
}