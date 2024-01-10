import { Header } from './Header'
import { FetchingCompanies, FetchingContacts, FetchingInvoices } from './Fetch'
import { Greeting } from './Greeting'
import { Propaganda } from './Propaganda'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <div className="home">
            <Header />
            <section>
                <Greeting />
            </section>
            
            <section>
                <FetchingInvoices />
            </section>
            <section>
                <FetchingContacts />
            </section>
            <section>
                <FetchingCompanies />
            </section>
            <section>
                <Propaganda />
            </section>
            <section className='footerSection'>
                <Footer />
            </section>
        </div>
    )
}