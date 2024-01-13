export const Contacts = (contacts) => {
    const data = contacts.contacts;

    if (data.length == 0) {
        return (
            <div className="contactTableDiv">
                <h2>Last Contacts</h2>
                <div className="loadingContainer">
                    <div className="loading"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="contactTableDiv">
            
            <h2>Last contacts</h2>
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
                            <td className="creationDate">{ contact.created_at }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <img src="lightBulb.png" alt="Calpin PNG" />  
        </div>
    )
}