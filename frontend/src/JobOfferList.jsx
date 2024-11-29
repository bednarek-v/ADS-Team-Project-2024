import React, {useState, useEffect} from "react"


const JobOfferList = ({job_offers, updateJobOffer, updateCallback, fetchNotes}) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: 'DELETE'
            }
            const response = await fetch(`http://127.0.0.1:5000/delete-job-offer/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete job offer")
            }
        } catch (error) {
            alert(error)
        }
    }

    return <div>
        <table>
            <thead>
            <tr>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Title</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Company</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Location</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Salary</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Description</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Hiring Manager</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}></th>
            </tr>
            </thead>
            <tbody>
            {job_offers.map((offer) => (
                <tr key={offer.id}>
                    <td>
                        <button onClick={() => fetchNotes(offer.id)}>{offer.title}</button>
                    </td>
                    <td>{offer.company}</td>
                    <td>{offer.location}</td>
                    <td>{offer.salary}</td>
                    <td>{offer.description}</td>
                    <td>{offer.hiringManager}</td>
                    <td>
                        <button onClick={() => updateJobOffer(offer)}>Update</button>
                        <button onClick={() => onDelete(offer.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default JobOfferList;