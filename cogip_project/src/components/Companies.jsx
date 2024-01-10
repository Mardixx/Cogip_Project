export const Companies = (companies) => {
    const data = companies.companies;
    

    return (
        <div className="companiesTableDiv">
            
            <h2>Last companies</h2>
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
                
        </div>
    )
}