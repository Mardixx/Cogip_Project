import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import './App.css'
import './style/reset.css'
import {  FetchingAllCompanies, FetchingAllContacts, FetchingAllInvoices, FetchingDashboard } from './components/Fetch'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Invoices" element={<FetchingAllInvoices />} />
        <Route path="/Contacts" element={<FetchingAllContacts />} />
        <Route path="/Companies" element={<FetchingAllCompanies />} />
        <Route path="/DashBoard" element={<FetchingDashboard />} />
      </Routes>
    </div>
  )
}

export default App
