import { Footer } from "./Footer";
import { Header } from "./Header";

export const AllCompanies = ( allCompanies ) => {
    const data = allCompanies.allCompanies;

    if (data.length == 0) {
        return (
            <div className="allCompanies">
                <Header />
                <section className="allCompaniesTop">
                    <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
                </section>
                <section className="allCompaniesTable">
                    <h2>All companies</h2>
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
        <div className="allCompanies">
            <Header />
            <section className="allCompaniesTop">
                <div className="geometricShape"><img src="Rectangle 10.png" alt="Geometric Shape png" /></div>
            </section>
            <section className="allCompaniesTable">
                <h2><div className="colorH2"></div>All companies</h2>
                <table>
                    <tbody>
                        <tr className="heading">
                            <th className="name">Name</th>
                            <th className="tva">TVA</th>
                            <th className="country">Country</th>
                            <th className="type">Type</th>
                            <th className="creationDate">Created at</th>
                        </tr>
                        {data.map(companies => (
                            <tr key={companies.id} className="allInfos">
                                <td className="name">{ companies.name }</td>
                                <td className="tva">{ companies.tva }</td>
                                <td className="country">{ companies.country }</td>
                                <td className="type">{ companies.types_name }</td>
                                <td className="creationDate">{ companies.created_at.slice(0, 10) }</td>
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