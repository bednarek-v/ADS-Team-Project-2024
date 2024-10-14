import {useState} from 'react'

const JobOfferForm = ({}) => {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [salary, setSalary] = useState('')
    const [description, setDescription] = useState('')
    const [hiringManager, setHiringManager] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            title,
            company,
            location,
            salary,
            description,
            hiringManager,
        }
        const url = "http://127.0.0.1:5000/create-offer"
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {

        }
    }

    return( <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="company">Company</label>
            <input
            type="text"
            id="company"
            value={company}
            onChange={e => setCompany(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="location">Location</label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="salary">Salary</label>
            <input
            type="string"
            id="salary"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <input
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="hiringManager">Hiring Manager</label>
            <input
            type="text"
            id="hiringManager"
            value={hiringManager}
            onChange={e => setHiringManager(e.target.value)}
            />
        </div>
        <button type="submit">Create Job Offer</button>
    </form>
    )
}

export default JobOfferForm