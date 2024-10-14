import React from "react"

const JobOfferList = ({job_offers}) => {
    return <div>
        <h2>Job Offers</h2>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Salary</th>
                    <th>Description</th>
                    <th>Hiring Manager</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {job_offers.map((offer) => (
                <tr key={offer.id}>
                    <td>{offer.title}</td>
                    <td>{offer.company}</td>
                    <td>{offer.location}</td>
                    <td>{offer.salary}</td>
                    <td>{offer.description}</td>
                    <td>{offer.hiringManager}</td>
                    <td>{offer.createdAt}</td>
                    <td>{offer.updatedAt}</td>
                    <td>
                        <button>Update</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default JobOfferList