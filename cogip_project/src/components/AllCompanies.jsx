import { Footer } from "./Footer";
import { Header } from "./Header";

export const AllCompanies = ( allCompanies ) => {
    const data = allCompanies.allCompanies;

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
                        <th className="tva">Phone due</th>
                        <th className="country">Mail</th>
                        <th className="type">Company</th>
                        <th className="creationDate">Created at</th>
                    </tr>
                    {data.map(companies => (
                        <tr key={companies.id} className="allInfos">
                            <td className="name">{ companies.name }</td>
                            <td className="tva">{ companies.tva }</td>
                            <td className="country">{ companies.country }</td>
                            <td className="type">{ companies.types_name }</td>
                            <td className="creationDate">{ companies.created_at }</td>
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