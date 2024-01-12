import { useState } from "react";
import { DashboardAdd } from "./DashboardAdd";

export const DashBoard = ( data ) => {

    const invoices = data.data[0];
    const contacts = data.data[1];
    const companies = data.data[2];
    const invoicesStats = data.data[3];
    const contactsStats = data.data[4];
    const companiesStats = data.data[5];

    if (invoices.length == 0 || contacts.length == 0 || companies.length == 0) {
        return (
            <div className="dashBoardLoad">
                    <div className="loadingContainer">
                        <div className="loading"></div>
                    </div>
            </div>
        )
    }

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

    

    switch(state) {
        case "dashboard":
            return (
                <div className="dashBoard">
                    <div className="sideMenu">
                        <div className="person">
                            <img src="avataaars.svg" alt="Avatar svg" />
                            <span className="name">Jean-Christian Ranu</span>
                        </div>
                        <div className="list">
                            <ul>
                                <li onClick={dashBoardChange} tabIndex={1}>
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
                        <div className="allTables">
                            <div className="statsAndContacts">
                                <div className="statsDiv">
                                    <h3>Statistics</h3>
                                    <div className="stats">
                                        <div className="invoicesCount">
                                            <span>{ invoicesStats }</span>
                                            <span>invoices</span>
                                        </div>
                                        <div className="contactsCount">
                                            <span>{ contactsStats }</span>
                                            <span>contacts</span>
                                        </div>
                                        <div className="companiesCount">
                                            <span>{ companiesStats }</span>
                                            <span>companies</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboardContactsTable">
                                    <h2>Last contacts</h2>
                                    <table>
                                        <tbody>
                                            <tr className="heading">
                                                <th className="name">Name</th>
                                                <th className="phone">Phone</th>
                                                <th className="mail">Email</th>

                                            </tr>
                                            {contacts.map(contact => (
                                                <tr key={contact.id} className="allInfos">
                                                    <td className="name">{ contact.name }</td>
                                                    <td className="phone">{ contact.phone }</td>
                                                    <td className="mail">{ contact.email }</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="invoicesAndCompanies">
                                <div className="dashboardInvoicesTable">                
                                    <h2>Last invoices</h2>
                                    <table>
                                        <tbody>
                                            <tr className="heading">
                                                <th className="invoiceNumber">Invoice</th>
                                                <th className="dueDate">Dates</th>
                                                <th className="companyName">Company</th>
                                            </tr>
                                            {invoices.map(invoice => (
                                                <tr key={invoice.id} className="allInfos">
                                                    <td className="invoiceNumber">{ invoice.ref }</td>
                                                    <td className="dueDate">{ invoice.due_at.slice(0, 10) }</td>
                                                    <td className="companyName">{ invoice.name }</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                
                                </div>
                                <div className="dashboardCompaniesTable">
                                    <h2>Last companies</h2>
                                    <table>
                                        <tbody>
                                            <tr className="heading">
                                                <th className="name">Name</th>
                                                <th className="tva">TVA</th>
                                                <th className="country">Country</th>
                                            </tr>
                                            {companies.map(companies => (
                                                <tr key={companies.id} className="allInfos">
                                                    <td className="name">{ companies.name }</td>
                                                    <td className="tva">{ companies.tva }</td>
                                                    <td className="country">{ companies.country }</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "invoices":
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
        case "companies":
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
                            <h3>New company</h3>
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
        case "contacts":
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
                            <h3>New contact</h3>
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
                        <li tabIndex={1}>
                            <img src="Icon_Invoices.svg" alt="Invoices svg" />
                            <span>Invoices</span>
                        </li>
                        <li tabIndex={1}>
                            <img src="Icon_Companies.svg" alt="Companies svg" />
                            <span>Companies</span>
                        </li>
                        <li tabIndex={1}>
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
                <div className="allTables">
                    <div className="statsAndContacts">
                        <div className="statsDiv">
                            <h3>Statistics</h3>
                            <div className="stats">
                                <div className="invoicesCount">
                                    <span>{ invoicesStats }</span>
                                    <span>invoices</span>
                                </div>
                                <div className="contactsCount">
                                    <span>{ contactsStats }</span>
                                    <span>contacts</span>
                                </div>
                                <div className="companiesCount">
                                    <span>{ companiesStats }</span>
                                    <span>companies</span>
                                </div>
                            </div>
                        </div>
                        <div className="dashboardContactsTable">
                            <h2>Last contacts</h2>
                            <table>
                                <tbody>
                                    <tr className="heading">
                                        <th className="name">Name</th>
                                        <th className="phone">Phone</th>
                                        <th className="mail">Email</th>

                                    </tr>
                                    {contacts.map(contact => (
                                        <tr key={contact.id} className="allInfos">
                                            <td className="name">{ contact.name }</td>
                                            <td className="phone">{ contact.phone }</td>
                                            <td className="mail">{ contact.email }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="invoicesAndCompanies">
                        <div className="dashboardInvoicesTable">                
                            <h2>Last invoices</h2>
                            <table>
                                <tbody>
                                    <tr className="heading">
                                        <th className="invoiceNumber">Invoice</th>
                                        <th className="dueDate">Dates</th>
                                        <th className="companyName">Company</th>
                                    </tr>
                                    {invoices.map(invoice => (
                                        <tr key={invoice.id} className="allInfos">
                                            <td className="invoiceNumber">{ invoice.ref }</td>
                                            <td className="dueDate">{ invoice.due_at.slice(0, 10) }</td>
                                            <td className="companyName">{ invoice.name }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        
                        </div>
                        <div className="dashboardCompaniesTable">
                            <h2>Last companies</h2>
                            <table>
                                <tbody>
                                    <tr className="heading">
                                        <th className="name">Name</th>
                                        <th className="tva">TVA</th>
                                        <th className="country">Country</th>
                                    </tr>
                                    {companies.map(companies => (
                                        <tr key={companies.id} className="allInfos">
                                            <td className="name">{ companies.name }</td>
                                            <td className="tva">{ companies.tva }</td>
                                            <td className="country">{ companies.country }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}