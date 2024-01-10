import { useEffect, useState } from "react";
import { Invoices } from "./Invoices";
import '../style/style.css'
import { Contacts } from "./Contacts";
import { Companies } from "./Companies";

export const FetchingInvoices = () => {
    const [invoices, setInvoices] = useState([]);

    const invoicesFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/invoices")
        .then(response => response.json())
        .then(data => setInvoices(data.data.slice(0, 5)));
    }
    useEffect(() => {
        invoicesFetch();
    }, [])
    return ( 
            <Invoices key={ invoices } invoices = { invoices } />         
    )    
}
export const FetchingContacts = () => {
    const [contacts, setContacts] = useState([]);
    const contactsFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/contacts")
        .then(response => response.json())
        .then(data => setContacts(data.data.slice(0, 5)));
    }
    useEffect(() => {
        contactsFetch();
    }, [])
    return (
        <Contacts key={ contacts } contacts = { contacts } /> 
    )  
}
export const FetchingCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const companiesFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/companies")
        .then(response => response.json())
        .then(data => setCompanies(data.data.slice(0, 5)));
    }
    useEffect(() => {
        companiesFetch();
    }, [])
    return (
        <Companies key={ companies } companies = { companies } /> 
    )
}