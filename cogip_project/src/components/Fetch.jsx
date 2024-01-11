import { useEffect, useState } from "react";
import { Invoices } from "./Invoices";
import '../style/style.css'
import { Contacts } from "./Contacts";
import { Companies } from "./Companies";
import { AllInvoices } from "./AllInvoices";
import { AllContacts } from "./AllContacts";
import { AllCompanies } from "./AllCompanies";

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
export const FetchingAllInvoices = () => {
    const [allInvoices, setAllInvoices] = useState([]);
    const allInvoicesFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/invoices")
        .then(response => response.json())
        .then(data => setAllInvoices(data.data));
    }
    useEffect(() => {
        allInvoicesFetch();
    }, [])
    return (
        <AllInvoices key={ allInvoices } allInvoices = { allInvoices } /> 
    )
}
export const FetchingAllContacts = () => {
    const [allContacts, setAllContacts] = useState([]);
    const allContactsFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/contacts")
        .then(response => response.json())
        .then(data => setAllContacts(data.data));
    }
    useEffect(() => {
        allContactsFetch();
    }, [])
    return (
        <AllContacts key={ allContacts } allContacts = { allContacts } /> 
    )  
}
export const FetchingAllCompanies = () => {
    const [allCompanies, setAllCompanies] = useState([]);
    const allCompaniesFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/companies")
        .then(response => response.json())
        .then(data => setAllCompanies(data.data.slice(0, 5)));
    }
    useEffect(() => {
        allCompaniesFetch();
    }, [])
    return (
        <AllCompanies key={ allCompanies } allCompanies = { allCompanies } /> 
    )
}
export const FetchingDashboard = () => {
    const [allInvoices, setAllInvoices] = useState([]);
    const [allContacts, setAllContacts] = useState([]);
    const [allCompanies, setAllCompanies] = useState([]);
    const allInvoicesFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/invoices")
        .then(response => response.json())
        .then(data => setAllInvoices(data.data.slice(0, 4)));
    }
    const allContactsFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/contacts")
        .then(response => response.json())
        .then(data => setAllContacts(data.data.slice(0, 4)));
    }
    const allCompaniesFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/companies")
        .then(response => response.json())
        .then(data => setAllCompanies(data.data.slice(0, 4)));
    }
    useEffect(() => {
        allInvoicesFetch();
        allContactsFetch();
        allCompaniesFetch();
    }, []);
}