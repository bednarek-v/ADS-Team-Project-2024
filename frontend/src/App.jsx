import {useEffect, useState} from 'react'
import './App.css'
import JobOfferList from "./JobOfferList";
import JobOfferForm from "./JobOfferForm";

function App() {
    const [job_offers, setJobOffers] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentJobOffer, setCurrentJobOffer] = useState({})

    useEffect(() => {
        fetchJobOffers()
    }, []);

    const fetchJobOffers = async () => {
        const response = await fetch("http://127.0.0.1:5000/job-offers")
        const data = await response.json()
        setJobOffers(data.job_offers)
    };


    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentJobOffer({})
    }

    const openCreateModal = () => {
        if (!isModalOpen) setIsModalOpen(true)
    }

    const openEditModal = (offer) => {
        if (isModalOpen) return
        setCurrentJobOffer(offer)
        setIsModalOpen(true)
    }

    const onUpdate = () => {
        closeModal()
        fetchJobOffers()
    }


    return (
        <>
            <JobOfferList job_offers={job_offers} updateJobOffer={openEditModal} updateCallback={onUpdate}/>
            <button onClick={openCreateModal}>Create new job offer</button>
            {isModalOpen && <div className='modal'>
                <div className='modal-content'>
                    <span className='close' onClick={closeModal}>&times;</span>
                    <JobOfferForm existingJobOffer={currentJobOffer} updateCallback={onUpdate}/>
                </div>
            </div>
            }
        </>
    );
}

export default App
