import { FetchingInvoices } from "./Fetch";
import { Footer } from "./Footer"
import { Header } from "./Header"

export const CompaniesDetails = ( data ) => {
    let companiesDetails = data.datas;

    

    if (companiesDetails.name == null) {
        return (
            <div className="loadingContainerInvoice">
                <div className="loading"></div>
            </div>
        )
        
    } else {
        return (
            <div className="allDetailsCompanies">
                <div className="detailsCompanies">
                    <Header />
                    <section className="detailsTop">
                        <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
                    </section>
                    <section className="companiesDetails">
                        <div className="name">
                            <h3>{companiesDetails.name}</h3>
                            <div className="color"></div>
                        </div>
                        <div className="informations">
                            <span className="companyName">Name: {companiesDetails.name}</span>
                            <span className="tva">TVA: {companiesDetails.tva}</span>
                            <span className="country">Country: {companiesDetails.country}</span>
                            <span className="typeName">Type: {companiesDetails.types_name}</span>
                        </div>
                    </section>
                    <section className="contactPeople">
                        <h2>Contact people</h2>
                        <div className="contacts">
                            <div>
                                <img src="womanPeople.png" alt="People png" />
                                <span>Bertram Gilfoyle</span>
                            </div>
                            <div>
                                <img src="manPeople.png" alt="People png" />
                                <span>Henry George</span>
                            </div>
                        </div>
                        <img className="calpin" src="imgCalpin.png" alt="Calpin png" />
                    </section>
                    <section className="invoices">
                        <FetchingInvoices />
                    </section>
                    <section className="footerSection">
                        <Footer />
                    </section>
                </div>
                
            </div>
        )
    }

    
}