import { useEffect, useState } from "react";
import { Invoices } from "./Invoices";
import '../style/style.css'
import { Contacts } from "./Contacts";
import { Companies } from "./Companies";
import { AllInvoices } from "./AllInvoices";
import { AllContacts } from "./AllContacts";
import { AllCompanies } from "./AllCompanies";
import { DashBoard } from "./DashBoard";
import { InvoiceDetails } from "./InvoiceDetails";
import { useLocation } from "react-router-dom";
import { CompaniesDetails } from "./CompaniesDetails";

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
        .then(data => setAllCompanies(data.data));
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
    const [allInvoicesStats, setAllInvoicesStats] = useState([]);
    const [allContactsStats, setAllContactsStats] = useState([]);
    const [allCompaniesStats, setAllCompaniesStats] = useState([]);

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
    const allInvoicesStatsFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/invoices/count")
        .then(response => response.json())
        .then(data => setAllInvoicesStats(data.data));
    }
    const allContactsStatsFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/contacts/count")
        .then(response => response.json())
        .then(data => setAllContactsStats(data.data));
    }
    const allCompaniesStatsFetch = () => {
        fetch("https://cogip-990e44950882.herokuapp.com/companies/count")
        .then(response => response.json())
        .then(data => setAllCompaniesStats(data.data));
    }

    useEffect(() => {
        allInvoicesFetch();
        allContactsFetch(); 
        allCompaniesFetch();
        allInvoicesStatsFetch();
        allContactsStatsFetch();
        allCompaniesStatsFetch();
    }, []);
    
    const datas = [allInvoices, allContacts, allCompanies, allInvoicesStats, allContactsStats, allCompaniesStats]

    return (
        <DashBoard key="DashBoard" data={datas} />
    )
}
export const DetailsFetch = () => {
    const [details, setDetails] = useState([]);
    const [invoiceData, setInvoiceData] = useState([]);

    const location = useLocation();
    const { invoice } = location.state;

    const dataFromInvoice = () => {
        setInvoiceData(invoice);
    }
    let id = invoiceData.id;

    useEffect(() => {
        dataFromInvoice();
    }, []);

    if (id == null) console.log('Loading') 
    else {
        fetch("https://cogip-990e44950882.herokuapp.com/invoices/" + id)
        .then(results => results.json())
        .then(data => setDetails(data.data));
    }
    return (
        <InvoiceDetails datas = {details} />
    )
}
export const CompaniesDetailsFetch = () => {
    const [details, setDetails] = useState([]);
    const [companiesData, setCompaniesData] = useState([]);

    const location = useLocation();
    const { companies } = location.state;

    const dataFromCompanies = () => {
        setCompaniesData(companies);
    }
    let id = companiesData.id;

    useEffect(() => {
        dataFromCompanies();
    }, []);

    if (id == null) console.log('Loading') 
    else {
        fetch("https://cogip-990e44950882.herokuapp.com/companies/" + id)
        .then(results => results.json())
        .then(data => setDetails(data.data));
    }
    return (
        <CompaniesDetails datas = {details} />
    )
}