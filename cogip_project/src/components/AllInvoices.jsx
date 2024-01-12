import { Footer } from "./Footer";
import { Header } from "./Header"

export const AllInvoices = ( allInvoices ) => {
    const data = allInvoices.allInvoices;

    if (data.length == 0) {
        return (
            <div className="allInvoices">
                <Header />
                <section className="allInvoicesTop">
                    <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
                </section>
                <section className="allInvoicesTable">
                    <h2>All invoices</h2>
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
        <div className="allInvoices">
            <Header />
            <section className="allInvoicesTop">
                <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
            </section>
            <section className="allInvoicesTable">
                <h2><div className="colorH2"></div>All invoices</h2>
                <table>
                    <tbody>
                        <tr className="heading">
                            <th className="invoiceNumber">Invoice number</th>
                            <th className="dueDate">Dates due</th>
                            <th className="companyName">Company</th>
                            <th className="creationDate">Created at</th>
                        </tr>
                        {data.map(invoice => (
                            <tr key={invoice.id} className="allInfos">
                                <td className="invoiceNumber">{ invoice.ref }</td>
                                <td className="dueDate">{ invoice.due_at.slice(0, 10) }</td>
                                <td className="companyName">{ invoice.name }</td>
                                <td className="creationDate">{ invoice.updated_at.slice(0, 10) }</td>
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