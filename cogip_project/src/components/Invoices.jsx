export const Invoices = (invoices) => {
    const data = invoices.invoices;
    
    return (
        <div className="invoiceTableDiv">
            
            <h2>Last invoices</h2>
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
                            <td className="dueDate">{ invoice.due_at }</td>
                            <td className="companyName">{ invoice.name }</td>
                            <td className="creationDate">{ invoice.updated_at }</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            <img src="imgCalpin.png" alt="Calpin PNG" />
                
        </div>
    )
}