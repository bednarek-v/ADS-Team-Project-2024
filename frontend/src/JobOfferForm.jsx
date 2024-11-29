import {useState} from 'react'

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
        const url = "http://127.0.0.1:5000" + (updating ? `/update-job-offer/${existingJobOffer.id}` : "/create-job-offer")
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

