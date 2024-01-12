export const Companies = (companies) => {
    const data = companies.companies;
    
    if (data.length == 0) {
        return (
            <div className="companiesTableDiv">
                <h2>Last Companies</h2>
                <div className="loadingContainer">
                    <div className="loading"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="companiesTableDiv">
            <h2>Last companies</h2>
            <table>
                <tbody>
                    <tr className="heading">
                        <th className="name">Name</th>
                        <th className="tva">TVA</th>
                        <th className="country">Mail</th>
                        <th className="type">Type</th>
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