import { Footer } from "./Footer"
import { Header } from "./Header"

export const AllContacts = ( allContacts ) => {
    const data = allContacts.allContacts;

    if (data.length == 0) {
        return (
            <div className="allContacts">
                <Header />
                <section className="allContactsTop">
                    <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
                </section>
                <section className="allContactsTable">
                    <h2>All contacts</h2>
                    <div className="loadingContainer">
                        <div className="loading"></div>
                    </div>
                </section>
                <section className="footerSection">
                    <Footer />
                </section>
            </div>
        )
    }

    return (
        <div className="allContacts">
            <Header />
            <section className="allContactsTop">
                <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
            </section>
            <section className="allContactsTable">
            <h2><div className="colorH2"></div>All contacts</h2>
            <table>
                <tbody>
                    <tr className="heading">
                        <th className="name">Name</th>
                        <th className="phone">Phone due</th>
                        <th className="mail">Mail</th>
                        <th className="company">Company</th>
                        <th className="creationDate">Created at</th>
                    </tr>
                    {data.map(contact => (
                        <tr key={contact.id} className="allInfos">
                            <td className="name">{ contact.name }</td>
                            <td className="phone">{ contact.phone }</td>
                            <td className="mail">{ contact.email }</td>
                            <td className="company">{ contact.company_name }</td>
                            <td className="creationDate">{ contact.created_at.slice(0, 10) }</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </section>
        <section className="footerSection">
            <Footer />
        </section>
    </div>
    )
}