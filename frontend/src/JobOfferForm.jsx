import {useState} from 'react'
import flaskHost from './App'
/**
 * JobOfferForm is a React component that renders a form for creating or updating a job offer.
 * It pre-fills the form fields with data from an existing job offer if provided.
 * The form includes fields for the job title, company, location, salary, description, and hiring manager.
 * Upon submission, it makes a POST or PATCH request to the server to create or update the job offer, respectively.
 * The form submission result is communicated through a callback function.
 *
 * @param {Object} existingJobOffer An object containing details of a job offer that is being edited. Defaults to an empty object, indicating a new job offer.
 * @param {string} [existingJobOffer.title] The title of the job offer.
 * @param {string} [existingJobOffer.company] The company name for the job offer.
 * @param {string} [existingJobOffer.location] The location of the job offer.
 * @param {string} [existingJobOffer.salary] The salary for the job offer.
 * @param {string} [existingJobOffer.description] A description of the job offer.
 * @param {string} [existingJobOffer.hiringManager] The name of the hiring manager responsible for the job offer.
 * @param {function} updateCallback A callback function that will be called when the job offer is successfully created or updated.
 * @returns {JSX.Element} A JSX element representing the job offer form.
 */
const JobOfferForm = ({existingJobOffer = {}, updateCallback}) => {
    const [title, setTitle] = useState(existingJobOffer.title || "");
    const [company, setCompany] = useState(existingJobOffer.company || "");
    const [location, setLocation] = useState(existingJobOffer.location || "");
    const [salary, setSalary] = useState(existingJobOffer.salary || "");
    const [description, setDescription] = useState(existingJobOffer.description || "");
    const [hiringManager, setHiringManager] = useState(existingJobOffer.hiringManager || "");


    const updating = Object.entries(existingJobOffer).length !== 0


    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            title, company, location, salary, description, hiringManager
        }
        const url = `${flaskHost}` + (updating ? `/update-job-offer/${existingJobOffer.id}` : "/create-job-offer")
        const options = {
            method: updating ? 'PATCH' : 'POST', headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }

    return (<form onSubmit={onSubmit}>
        <div className="label-input-container">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className="label-input-container">
            <label htmlFor="company">Company</label>
            <input
                type="text"
                id="company"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />
        </div>
        <div className="label-input-container">
            <label htmlFor="location">Location</label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
        </div>
        <div className="label-input-container">
            <label htmlFor="salary">Salary</label>
            <input
                type="string"
                id="salary"
                value={salary}
                onChange={e => setSalary(e.target.value)}
            />
        </div>
        <div className="label-input-container">
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
        </div>
        <div className="label-input-container">
            <label htmlFor="hiringManager">Hiring Manager</label>
            <input
                type="text"
                id="hiringManager"
                value={hiringManager}
                onChange={e => setHiringManager(e.target.value)}
            />
        </div>
        <button type="submit">{updating ? 'Update' : 'Create'}</button>
    </form>)
}


export default JobOfferForm

