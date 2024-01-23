import { Footer } from "./Footer"
import { Header } from "./Header"

export const InvoiceDetails = ( data ) => {
    let invoiceDetails = data.datas;

    if (invoiceDetails.name == null) {
        return (
            <div className="loadingContainerInvoice">
                <div className="loading"></div>
            </div>
        )
        
    } else {
        return (
            <div className="details">
                <Header />
                <section className="detailsTop">
                    <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
                </section>
                <section className="invoiceDetails">
                    <div className="name">
                        <h3>Company Name: {invoiceDetails.name}</h3>
                    </div>
                    <div className="dates">
                        <span className="creationDate">Invoice created at: {invoiceDetails.created_at}</span>
                        <span className="updateDate">Invoice updated at: {invoiceDetails.updated_at}</span>
                        <span className="dueDate">Invoice due date: {invoiceDetails.due_at}</span>
                    </div>
                    <div className="reference">
                        <h3>Reference: {invoiceDetails.ref}</h3>
                    </div>
                </section>
                <section className="footerSection">
                    <Footer />
                </section>
            </div>
        )
    }

    
}