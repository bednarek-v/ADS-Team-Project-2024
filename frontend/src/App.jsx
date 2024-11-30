import {useEffect, useState} from 'react'
import './App.css'
import JobOfferList from "./JobOfferList";
import JobOfferForm from "./JobOfferForm";
import Header from "./Header";
import Footer from "./Footer.jsx";
/**
 * The App component is responsible for rendering and managing a list of job offers,
 * providing functionality to search, create, edit, and view job offers in a modal.
 *
 * It fetches job offers from a specified API endpoint and allows users to interact
 * with them through a user interface that includes a search bar, a list of job offers,
 * and buttons for creating new entries.
 *
 * @return {JSX.Element} The rendered component displaying job offers and controls for interaction.
 */
function App() {
    const [job_offers, setJobOffers] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentJobOffer, setCurrentJobOffer] = useState({})

    const apiUrl = process.env.API_URL;

    useEffect(() => {
        fetchJobOffers()
    }, []);

    const fetchJobOffers = async () => {
        const response = await fetch(`${apiUrl}/job-offers`)
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


    const [searchTerm, setSearchTerm] = useState("");

// Filter job offers based on the search term
    const filteredJobOffers = job_offers.filter((offer) =>
        offer.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="app-container">
            <Header/>
                <div className="content">
            <div className="search-bar">
            <input
                type="search"
                placeholder="Search job offers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <JobOfferList
                job_offers={filteredJobOffers}
                updateJobOffer={openEditModal}
                updateCallback={onUpdate}
            />
            <br/>
            <button onClick={openCreateModal}>Create new job offer</button>
            {isModalOpen && <div className='modal'>
                <div className='form-container'>
                    <span className='close' onClick={closeModal}>&times;</span>
                    <div className='form-content'>
                    <JobOfferForm existingJobOffer={currentJobOffer} updateCallback={onUpdate}/>
                    </div>
                </div>
            </div>
            }
            </div>
            <Footer/>
            </div>
        </>
    );
}

export default App