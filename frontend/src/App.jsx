import {useEffect, useState} from 'react'
import './App.css'
import JobOfferList from "./JobOfferList";
import JobOfferForm from "./JobOfferForm";

function App() {
    const [job_offers, setJobOffers] = useState([])

    useEffect(() => {
        fetchJobOffers()
    }, []);

    const fetchJobOffers = async () => {
        const response = await fetch("http://127.0.0.1:5000/job-offers")
        const data = await response.json()
        setJobOffers(data.job_offers)
    }
  return( <>
      <JobOfferList job_offers={job_offers}/>
      <JobOfferForm/>
      </>
  );
}

export default App
